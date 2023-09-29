

interface InputProps {
  placeholder?: string,
  value?: string,
  type?: string,
  disabled?: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({placeholder, value, type, disabled, onChange}) => {
  return (
    <input 
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className="w-full p-4 text-lg border-2 border-slate-700 bg-slate-900 rounded-md text-white outline-none focus:border-slate-500 focus:border-2 transition disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-slate-950"
    />
  )
}

export default Input