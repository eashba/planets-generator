export const StyledButton = ({ onClick, isDisabled, text }: { onClick: Function, isDisabled: boolean, text: string }) => {
  return (
    <button onClick={() => onClick()} className="border-white border mt-3 mr-4 enabled:hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-sm text-sm disabled:opacity-25" disabled={isDisabled} >
      {text}
    </button>
  )
}