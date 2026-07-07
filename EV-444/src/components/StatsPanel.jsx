function StatsPanel({ totalCharacters, favoritesCount, blockedCount }) {
  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Estadísticas</h2>
        </div>

        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="p-3 rounded-4 bg-light text-center">
              <strong className="d-block fs-5">{totalCharacters}</strong>
              <span className="text-muted small">Total</span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-3 rounded-4 bg-light text-center">
              <strong className="d-block fs-5">{favoritesCount}</strong>
              <span className="text-muted small">Favoritos</span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-3 rounded-4 bg-light text-center">
              <strong className="d-block fs-5">{blockedCount}</strong>
              <span className="text-muted small">Bloqueados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsPanel
