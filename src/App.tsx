import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Case1Page } from "@/pages/cases/case-1"
import { HomePage } from "@/pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cases/case-1" element={<Case1Page />} />
      </Routes>
    </BrowserRouter>
  )
}
