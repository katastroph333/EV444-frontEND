function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-wrapper w-100" style={{ maxWidth: "340px" }}>
      <i className="bi bi-search search-icon"></i>

      <input
        id="search"
        type="text"
        placeholder="Buscar personaje..."
        className="form-control rounded-pill shadow-sm ps-5"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar