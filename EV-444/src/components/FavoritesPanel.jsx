function FavoritesPanel() {
  return (
    <aside className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Favoritos</h2>
          <span className="text-muted">0</span>
        </div>

        <div className="border border-dashed rounded-4 p-4 text-center text-muted">
          <p className="mb-0">No hay favoritos aún.</p>
        </div>
      </div>
    </aside>
  )
}

export default FavoritesPanel
