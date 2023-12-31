import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import ArtistsList from './components/views/ArtistsList/ArtistsList.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/wiki/:artistlist" element={<ArtistsList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
