interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text that may contain inline bullet points (•) as a proper list.
 * E.g. "Intro: • Item one. • Item two." becomes an intro line + bullet list.
 */
export function FormattedText({ text, className }: FormattedTextProps) {
  const parts = text.split(/\s*•\s*/);
  const intro = parts[0].trim();
  const bullets = parts.slice(1).filter((b) => b.trim());

  if (bullets.length === 0) {
    return (
      <p className={className} style={{ whiteSpace: "pre-wrap" }}>
        {text}
      </p>
    );
  }

  return (
    <div className={className}>
      {intro && <p className="mb-1.5">{intro}</p>}
      <ul className="space-y-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-slate-400 flex-shrink-0">•</span>
            <span>{bullet.trim()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
