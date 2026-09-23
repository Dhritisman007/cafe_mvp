const phrases = ["Come for the food", "Stay for the vibe", "Good food", "Better company", "Longer evenings"];

export function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {phrases.map((p) => (
        <span key={p} className="flex items-center">
          <span className="px-6 font-serif text-4xl font-light whitespace-nowrap italic md:px-10 md:text-6xl">{p}</span>
          <span className="text-lg text-ember md:text-xl">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-forest py-6 text-cream/85 md:py-9">
      <span className="sr-only">Come for the food. Stay for the vibe.</span>
      <div className="marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
