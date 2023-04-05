export const InfoRow = ({ label, value }: { label: string, value: string | undefined }) => {
  return (
    <div className="mt-3">
      <span className='text-white text-md mt-2'>{label}:</span>
      <span className='text-white text-md mt-2'> {value}</span>
    </div>
  )
}