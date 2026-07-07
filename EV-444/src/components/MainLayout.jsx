import { useState } from 'react'
import SearchBar from './SearchBar'
import ItemList from './ItemList'
import FavoritesPanel from './FavoritesPanel'
import BlockedPanel from './BlockedPanel'
import StatsPanel from './StatsPanel'
import useLocalStorage from '../hooks/useLocalStorage'

function MainLayout() {
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useLocalStorage('ev444_favorites', [])
  const [blocked, setBlocked] = useLocalStorage('ev444_blocked', [])

  const toggleFavorite = (characterId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(characterId)
        ? prevFavorites.filter((id) => id !== characterId)
        : [...prevFavorites, characterId]
    )
  }

  const toggleBlocked = (characterId) => {
    setBlocked((prevBlocked) => {
      const isCurrentlyBlocked = prevBlocked.includes(characterId)
      
      if (isCurrentlyBlocked) {
        // Desbloquear: solo quitar de bloqueados
        return prevBlocked.filter((id) => id !== characterId)
      } else {
        // Bloquear: agregar a bloqueados y quitar de favoritos si estaba
        setFavorites((prevFavorites) =>
          prevFavorites.filter((id) => id !== characterId)
        )
        return [...prevBlocked, characterId]
      }
    })
  }

  return (
    <main className="container-fluid py-4">
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <p className="text-uppercase fw-bold mb-1 text-primary small">Taller Front End</p>
            <h1 className="h3 mb-0">Diseño de interfaz</h1>
          </div>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </header>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="d-flex flex-column gap-4">
              <ItemList 
                searchTerm={searchTerm} 
                favorites={favorites} 
                onToggleFavorite={toggleFavorite}
                blocked={blocked}
                onToggleBlocked={toggleBlocked}
              />
              <StatsPanel 
                totalCharacters={20}
                favoritesCount={favorites.length}
                blockedCount={blocked.length}
              />
            </div>
          </div>

          <div className="col-12 col-lg-4 d-flex flex-column gap-4">
            <FavoritesPanel favorites={favorites} onToggleFavorite={toggleFavorite} />
            <BlockedPanel blocked={blocked} onToggleBlocked={toggleBlocked} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainLayout
