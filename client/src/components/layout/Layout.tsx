import { ReactNode } from 'react'
import SideBar from './side_bar/SideBar'

type PropsTypes = {
    children: ReactNode
}

const Layout = ({ children }: PropsTypes) => {
  return (
    <div className="relative flex w-full h-screen overflow-hidden">
        <SideBar />
        {children}
    </div>
  )
}

export default Layout