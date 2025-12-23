function Button ({children, label}) {
  return (
    <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded md hover:bg-blue-700">
      {children}
      <span className="font-bold">{label}</span>
    </button>
  )
}

export default Button