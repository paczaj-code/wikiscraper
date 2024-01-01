import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import ArtistsList from './components/views/ArtistsList/ArtistsList.tsx'
import ArtistDetails from './components/views/ArtistDetails.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/wiki/:artistlist" element={<ArtistsList />} />
        <Route path="/wiki/artist/:artistlist" element={<ArtistDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
