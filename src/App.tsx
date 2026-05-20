import { BrowserRouter, Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/layout/site-layout"
import { HomePage } from "@/pages/home"
import { WorkPage } from "@/pages/work"
import { AiAuthoringPage } from "@/pages/case-studies/ai-authoring"
import { AiCmpConceptPage } from "@/pages/case-studies/ai-cmp-concept"
import { BlokPage } from "@/pages/case-studies/blok"
import { CloudPortalMobilePage } from "@/pages/case-studies/cloud-portal-mobile"
import { CloudPortalPage } from "@/pages/case-studies/cloud-portal"
import { LayoutSystemPage } from "@/pages/case-studies/layout-system"
import { WfpDesignSystemPage } from "@/pages/case-studies/wfp-design-system"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/wfp-design-system" element={<WfpDesignSystemPage />} />
          <Route path="work/blok" element={<BlokPage />} />
          <Route path="work/cloud-portal" element={<CloudPortalPage />} />
          <Route path="work/cloud-portal-mobile" element={<CloudPortalMobilePage />} />
          <Route path="work/layout-system" element={<LayoutSystemPage />} />
          <Route path="work/ai-authoring" element={<AiAuthoringPage />} />
          <Route path="work/ai-cmp-concept" element={<AiCmpConceptPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
