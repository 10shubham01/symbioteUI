import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const componentPath = Array.isArray(req.query.componentPath)
    ? req.query.componentPath[0]
    : req.query.componentPath;

  if (!componentPath) {
    res.status(400).json({ error: "Component path is required" });
    return;
  }

  try {
    if (process.env.NODE_ENV === "development") {
      // Development: Read from local file system
      const filePath = path.join(process.cwd(), `/components/${componentPath}`);

      try {
        const sourceCode = fs.readFileSync(filePath, "utf-8");
        res.status(200).json({ sourceCode });
      } catch (error) {
        console.error("Error reading local file:", error);
        res.status(500).json({ error: "Error reading local file" });
      }
    } else {
      const githubRepo = process.env.GITHUB_REPO;
      const githubToken = process.env.GITHUB_TOKEN;

      if (!githubRepo || !githubToken) {
        res.status(500).json({ error: "GitHub configuration is missing" });
        return;
      }

      if (!/^[\w-]+\/[\w-]+$/.test(githubRepo)) {
        res.status(500).json({ error: "Invalid GitHub repository format" });
        return;
      }

      const githubUrl = `https://api.github.com/repos/${githubRepo}/contents/components/${componentPath}`;

      const response = await fetch(githubUrl, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`GitHub fetch error: ${response.status} - ${errorText}`);
        res
          .status(response.status)
          .json({ error: `GitHub fetch error: ${response.statusText}` });
        return;
      }

      const data = await response.json();
      if (!data.content) {
        throw new Error("No content found in the GitHub response");
      }
      const sourceCode = Buffer.from(data.content, "base64").toString("utf-8");
      res.status(200).json({ sourceCode });
    }
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).json({ error: "Error fetching source code" });
  }
}
