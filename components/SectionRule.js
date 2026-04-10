export default function SectionRule({ className = "" }) {
  return (
    <span
      className={`mt-4 block h-px w-16 bg-brand sm:w-24 ${className}`}
      aria-hidden
    />
  );
}
