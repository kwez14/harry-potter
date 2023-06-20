import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Character } from "./pages/Character"
// eslint-disable-next-line no-unused-vars
import styles from './global.css'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="character/:id" element={<Character />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
