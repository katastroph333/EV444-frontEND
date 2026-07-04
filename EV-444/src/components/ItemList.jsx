import useFetch from '../hooks/useFetch'

function ItemList() {
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character')
  const characters = data?.results ?? []

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h5 mb-0">Listado principal</h2>
            <p className="mb-0 text-muted">Personajes de Rick and Morty</p>
          </div>
          <span className="text-muted small">Mostrando {loading ? '...' : characters.length} elementos</span>
        </div>

        {loading && (
          <div className="text-center py-5 text-muted">Cargando personajes...</div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            Ocurrió un error al cargar los datos: {error.message}
          </div>
        )}

        {!loading && !error && (
          <div className="row g-3">
            {characters.map((character) => (
              <article key={character.id} className="col-12 col-sm-6 col-xl-4">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '220px' }}
                  />
                  <div className="card-body">
                    <h3 className="h6 mb-1">{character.name}</h3>
                    <p className="mb-1 text-muted small">{character.status} - {character.species}</p>
                    <p className="mb-0 text-muted">{character.location.name}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ItemList
