import { Outlet } from "react-router-dom"

import { SiteHeader } from "@/components/layout/site-header"

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <Outlet />
    </div>
  )
}
