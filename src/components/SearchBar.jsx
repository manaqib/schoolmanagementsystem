const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="search-box">
      <span>🔎</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchBar
