import useFetch from '../hooks/useFetch'

function FavoritesPanel({ favorites, onToggleFavorite }) {
  const { data } = useFetch('https://rickandmortyapi.com/api/character')
  const allCharacters = data?.results ?? []
  
  // Filtrar personajes que están en favoritos
  const favoriteCharacters = allCharacters.filter((character) =>
    favorites.includes(character.id)
  )

  return (
    <aside className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Favoritos</h2>
          <span className="text-muted">{favoriteCharacters.length}</span>
        </div>

        {favoriteCharacters.length === 0 ? (
          <div className="border border-dashed rounded-4 p-4 text-center text-muted">
            <p className="mb-0">No hay favoritos aún.</p>
          </div>
        ) : (
          <div className="d-flex flex-column gap-2">
            {favoriteCharacters.map((character) => (
              <div
                key={character.id}
                className="d-flex align-items-center gap-2 p-2 border rounded-3 bg-light"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="rounded-circle"
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
                <div className="flex-grow-1 min-width-0">
                  <p className="mb-0 text-truncate small fw-semibold">{character.name}</p>
                  <p className="mb-0 text-truncate text-muted small">{character.species}</p>
                </div>
                <button
                  onClick={() => onToggleFavorite(character.id)}
                  className="btn btn-sm btn-danger"
                  title="Quitar de favoritos"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}

export default FavoritesPanel
