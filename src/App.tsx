import { BrowserRouter, Route, Routes } from "react-router-dom"

import { BlokPage } from "@/pages/work/blok"
import { HomePage } from "@/pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/blok" element={<BlokPage />} />
      </Routes>
    </BrowserRouter>
  )
}
