import { useState } from 'react'
import logo from '../assets/logo.png'
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
        return prevBlocked.filter((id) => id !== characterId)
      } else {
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

        <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4 mb-4">

          <div>
            <span className="app-badge">
              Rick and Morty API
            </span>

            <div className="title-wrapper">
              <img
                src={logo}
                alt="Rick and Morty"
                className="app-logo"
              />

              <h1 className="app-title mb-0">
                Rick and Morty Explorer
              </h1>
            </div>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

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

            <FavoritesPanel
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />

            <BlockedPanel
              blocked={blocked}
              onToggleBlocked={toggleBlocked}
            />

          </div>

        </div>

        <footer className="app-footer">
          <p>
            Desarrollado por: 
            <strong> Scarlett Aguilera</strong> •
            <strong> Carlos Seura</strong> •
            <strong> Fernando Villagran</strong>
          </p>
        </footer>

      </div>
    </main>
  )
}

export default MainLayout