export default function SectionDivider({ label, className = '' }) {
  return (
    <div className={`section-divider reveal ${className}`}>
      <span className="text-[0.6rem] tracking-[0.5em] uppercase text-red whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
