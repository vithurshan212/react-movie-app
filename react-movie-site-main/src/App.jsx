import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import Watchlist from "./pages/Watchlist"
import './index.css'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { WatchListProvider } from "./context/WatchListContext"

function App() {

  return (
    <WatchListProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
      </WatchListProvider>
  )
}

export default App
