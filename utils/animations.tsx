export function fadeAnimation(text: string, offset: number = 0) {
  return text.split(" ").map((word, i) => (
    <span
      key={i}
      className="inline-block opacity-0 animate-fade"
      style={{ animationDelay: `${(offset + i) * 0.2}s` }}
    >
      {word}&nbsp;
    </span>
  ));
}
