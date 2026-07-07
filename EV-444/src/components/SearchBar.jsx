function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-100" style={{ maxWidth: '320px' }}>
      <label htmlFor="search" className="visually-hidden">
        Buscar elemento
      </label>
      <input
        id="search"
        type="text"
        placeholder="Buscar..."
        className="form-control rounded-pill shadow-sm"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
