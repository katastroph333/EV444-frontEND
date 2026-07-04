function ItemList() {
  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Listado principal</h2>
          <span className="text-muted small">Mostrando 0 elementos</span>
        </div>

        <div className="d-flex flex-column gap-2">
          <article className="p-3 rounded-4 bg-light">
            <h3 className="h6 mb-1">Elemento 1</h3>
            <p className="mb-0 text-muted">Contenido de ejemplo para el layout.</p>
          </article>
          <article className="p-3 rounded-4 bg-light">
            <h3 className="h6 mb-1">Elemento 2</h3>
            <p className="mb-0 text-muted">Contenido de ejemplo para el layout.</p>
          </article>
          <article className="p-3 rounded-4 bg-light">
            <h3 className="h6 mb-1">Elemento 3</h3>
            <p className="mb-0 text-muted">Contenido de ejemplo para el layout.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ItemList
