import SearchBar from './SearchBar'
import ItemList from './ItemList'
import FavoritesPanel from './FavoritesPanel'
import StatsPanel from './StatsPanel'

function MainLayout() {
  return (
    <main className="container-fluid py-4">
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <p className="text-uppercase fw-bold mb-1 text-primary small">Taller Front End</p>
            <h1 className="h3 mb-0">Diseño de interfaz</h1>
          </div>
          <SearchBar />
        </header>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="d-flex flex-column gap-4">
              <ItemList />
              <StatsPanel />
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <FavoritesPanel />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainLayout
