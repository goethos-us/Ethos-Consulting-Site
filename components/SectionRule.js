export default function SectionRule({ className = "" }) {
  return (
    <span
      className={`ethos-section-rule mt-4 block h-1 w-16 rounded-full sm:w-24 ${className}`}
      aria-hidden
    />
  );
}
