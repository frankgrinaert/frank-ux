import { BrowserRouter, Route, Routes } from "react-router-dom"

import { SiteHeader } from "@/components/site-header"
import { BlokPage } from "@/pages/work/blok"
import { HomePage } from "@/pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/blok" element={<BlokPage />} />
      </Routes>
    </BrowserRouter>
  )
}
