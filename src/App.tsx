import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ScrollToTop } from "@/components/scroll-to-top"
import { SiteHeader } from "@/components/site-header"
import { BlokPage } from "@/pages/work/blok"
import { CloudPortalPage } from "@/pages/work/cloud-portal"
import { CloudPortalRedesignPage } from "@/pages/work/cloud-portal-redesign"
import { WfpDesignSystemPage } from "@/pages/work/wfp-design-system"
import { HomePage } from "@/pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/blok" element={<BlokPage />} />
        <Route path="/work/cloud-portal" element={<CloudPortalPage />} />
        <Route
          path="/work/cloud-portal-redesign"
          element={<CloudPortalRedesignPage />}
        />
        <Route
          path="/work/wfp-design-system"
          element={<WfpDesignSystemPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}
