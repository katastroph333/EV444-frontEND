import useFetch from '../hooks/useFetch'

function ItemList({ searchTerm, favorites, onToggleFavorite, blocked, onToggleBlocked }) {
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character')
  const allCharacters = data?.results ?? []
  
  // Filtrar personajes: por nombre y excluir bloqueados
  const filteredCharacters = allCharacters.filter((character) =>
    !blocked.includes(character.id) &&
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h5 mb-1">Personajes</h2>

            {searchTerm ? (
              <p className="mb-0 text-muted">
                Resultados para "<strong>{searchTerm}</strong>"
              </p>
            ) : (
              <p className="mb-0 text-muted">
                Explora los personajes de Rick and Morty
              </p>
            )}
          </div>
          <span className="text-muted small">
            {loading 
            ? 'Cargando...'
            :searchTerm
              ? `${filteredCharacters.length} encontrados`
              : `${filteredCharacters.length} mostrados`}
          </span>
        </div>

        {loading && (
          <div className="text-center py-5 text-muted">
            Cargando personajes...
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            Ocurrió un error al cargar los datos: {error.message}
          </div>
        )}

        {!loading && !error && filteredCharacters.length > 0 && (
          <div className="row g-3">
            {filteredCharacters.map((character) => (
              <article key={character.id} className="col-12 col-sm-6 col-xl-4">
                <div className="card character-card h-100 border-0 overflow-hidden position-relative">

                  <div
                    className="position-absolute top-0 end-0 m-2 d-flex gap-2"
                    style={{ zIndex: 10 }}
                  >
                    <button
                      onClick={() => onToggleFavorite(character.id)}
                      className={`btn btn-sm px-2 py-2 ${
                        favorites.includes(character.id)
                          ? 'btn-danger'
                          : 'btn-outline-danger'
                      }`}
                      title={
                        favorites.includes(character.id)
                          ? 'Quitar de favoritos'
                          : 'Agregar a favoritos'
                      }
                    >
                      <i className={`bi ${
                        favorites.includes(character.id)
                          ? 'bi-heart-fill'
                          : 'bi-heart'
                      }`}></i>
                    </button>

                    <button
                      onClick={() => onToggleBlocked(character.id)}
                      className="btn btn-sm btn-outline-secondary px-2 py-2"
                      title="Bloquear este elemento"
                    >
                      <i className="bi bi-lock-fill"></i>
                    </button>
                  </div>

                  <img
                    src={character.image}
                    alt={character.name}
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '280px' }}
                  />

                  <div className="card-body">
                    <h3 className="h6 fw-bold mb-3">
                      {character.name}
                    </h3>
                    
                    <p className="mb-2">
                      <span
                        className={`badge ${
                          character.status === 'Alive'
                            ? 'bg-success'
                            : character.status === 'Dead'
                            ? 'bg-danger'
                            : 'bg-warning text-dark'
                        }`}
                      >
                       {character.status}
                      </span>
                    </p>

                    <p className="mb-2 text-muted">
                      {character.species}
                    </p>

                    <p className="mb-0 text-muted">
                      {character.location.name}
                     </p>
                    
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && !error && filteredCharacters.length === 0 && allCharacters.length > 0 && (
          <div className="alert alert-info" role="alert">
            <strong>No se encontraron resultados</strong> para "{searchTerm}".
            Intenta con otro término de búsqueda.
          </div>
        )}
      </div>
    </section>
  )
}

export default ItemList