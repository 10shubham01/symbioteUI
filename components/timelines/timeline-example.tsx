import React, { useState } from "react";
import Timeline from "./timeline";

const Example: React.FC = () => {
  const timelineItems = [
    {
      heading: "1984",
      label: "Birth of the Symbiote",
      description:
        "The Venom symbiote was introduced as part of the 'Secret Wars' storyline when Spider-Man discovers an alien black suit on Battleworld.",
    },
    {
      heading: "1988",
      label: "First Bond with Eddie Brock",
      description:
        "Eddie Brock bonds with the alien symbiote, forming Venom, one of Spider-Man's deadliest foes and anti-heroes.",
    },
    {
      heading: "1993",
      label: "Carnage is Born",
      description:
        "The Venom symbiote spawns Carnage, a deadly offspring that bonds with Cletus Kasady, creating a bloodthirsty villain.",
    },
    {
      heading: "2018",
      label: "Venom: Lethal Protector",
      description:
        "Venom becomes a standalone anti-hero, protecting innocents while dealing with his darker instincts.",
    },
    {
      heading: "2021",
      label: "King in Black",
      description:
        "Venom plays a key role in defeating Knull, the dark god of the symbiotes, proving to be a powerful and unlikely hero.",
    },
  ];

  return (
    <div>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default Example;
