import { Outlet } from "react-router-dom"
import { Narbar } from "../components/Narbar"

export default function RootLayout() {
  return (
    <div>
      <Narbar />
      <Outlet />
    </div>
  )
}
