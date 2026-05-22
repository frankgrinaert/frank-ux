import { BrowserRouter, Route, Routes } from "react-router-dom"

import { SiteHeader } from "@/components/site-header"
import { BlokPage } from "@/pages/work/blok"
import { CloudPortalPage } from "@/pages/work/cloud-portal"
import { HomePage } from "@/pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/blok" element={<BlokPage />} />
        <Route path="/work/cloud-portal" element={<CloudPortalPage />} />
      </Routes>
    </BrowserRouter>
  )
}
