// simple css illustration used instead of photos
export default function Plate({ variant = 'pasta', className = '' }) {
  return (
    <div className={`plate plate--${variant} ${className}`} aria-hidden="true">
      <div className="plate__food" />
    </div>
  )
}
