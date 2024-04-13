import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { Link } from "react-router-dom"

const SideBar = () => {

  const { status: connectionStatus } = useSelector<RootState, { status: boolean }>(state => state.status)
  const [active, setActive] = useState("/")

  return (
    <header className="flex flex-col gap-8 px-1 py-2 shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <span className={`absolute right-1 top-2 w-2 h-2 ring-2 ring-white rounded-full ${connectionStatus ? "bg-green-400" : "bg-red-500"}`}></span>
          <picture className="w-10 h-10 grid place-items-center">
            <source srcSet="/assets/onprint-logo.webp" type="image/webp" />
            <img src="/assets/onprint-logo.png" />
          </picture>
        </div>
        <div className="relative font-bold">POS</div>
      </div>
      <nav>
        <ul className="flex flex-col gap-4">
          <li className="text-[10px]">
            <Link
              to="/orders"
              onClick={() => setActive("/orders")}
              className={`flex flex-col items-center p-1 hover:bg-zinc-100 rounded-md ${active === "/orders" && "bg-zinc-100"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
              </svg>
              Orders
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default SideBar