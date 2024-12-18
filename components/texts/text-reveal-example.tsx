import RevealEffect from './text-reveal';

function Example() {
  const texts = [
    'Welcome to the Symbiote UI',
    'Ready to Build Something',
    'Stay Symbiotic! 🖤',
  ];

  return (
    <div className="p-4">
      <RevealEffect
        texts={texts}
        className="dark:text-gray-200 text-gray-900"
      />
    </div>
  );
}

export default Example;
