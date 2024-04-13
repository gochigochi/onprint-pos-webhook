import { useEffect, useState, useRef } from "react"
import { socket } from "./socket"
import { Route, Routes } from "react-router-dom"
import Orders from "./pages/Orders"
import Layout from "./components/layout/Layout"
import { useDispatch } from "react-redux"
import { setStatus } from "./store/status/statusSlice"
import type { AppDispatch } from "./store/store"
import QRious from "qrious"

// TODO dynamic imports!

type OrderNotification = {
  id: number
}

function App() {

  const dispatch = useDispatch<AppDispatch>()
  const [newOrdersNotifications, setNewOrdersNotifications] = useState<OrderNotification[]>([])
  const [newOrderId, setNewOrderId] = useState(0)

  const windowRef = useRef(window)

  const handleClose = (id: number) => {
    console.log("X")
    const filtered = newOrdersNotifications.filter(notification => notification.id !== id)
    setNewOrdersNotifications(filtered)
  }

  // console.log(newOrdersNotifications)

  useEffect(() => {
    if (newOrderId !== 0) {
      setNewOrdersNotifications(prev => [...prev, { id: newOrderId }])
    }
  }, [newOrderId])

  useEffect(() => {

    const onConnect = (args) => {
      console.log("connected to server", args)
      // dispatch(setStatus({ status: true }))
    }

    //   // GENERATE ADDRESS QR
    //   const address = args.data.shipping.address_1 || ""
    //   const postcode = args.data.shipping.postcode || ""
    //   const city = args.data.shipping.city || ""
    //   const country = args.data.shipping.country || ""
    //   const url = `https://www.google.com/maps/place/${address},+${postcode}+${city}+${country}`
    //   console.log("URL.....", url)
    //   const qr = new QRious({ value: url })
    //   const QRimage = qr.toDataURL()

    const printOrder = (args) => {
      console.log("INCOMING ORDERS....", args)
    }

    const handlePrintOrder = (args) => printOrder(args)

    const handleTestSocket = () => console.log("Test Socket")

    const handleOnConnect = (args) => onConnect(args)

    socket.on("on-connection", handleOnConnect)
    socket.on("new-order", handlePrintOrder)
    socket.on("test-socket", handleTestSocket)

    return () => {
      socket.off("on-connection", handleOnConnect)
      socket.off("new-order", handlePrintOrder)
      socket.off("test-socket", handleTestSocket)
    }

  }, [dispatch])

  return (
    <Layout>

      <main className="@container/main flex-1 py-6 px-4 bg-indigo-50/50 overflow-y-auto">
        Test
        {/* <Routes>
          <Route path="/" element={<Orders />} />
        </Routes> */}
      </main>

      {/* NOTIFICATIONS BAR */}
      <div className="absolute z-50 right-0 top-0 h-screen w-80 p-2 flex flex-col gap-2 pointer-events-none">
        {
          newOrdersNotifications.length !== 0 ?
            newOrdersNotifications.map(notification => {
              return (
                <div key={notification.id} onClick={() => handleClose(notification.id)} className="bg-white rounded-md p-3 shadow-md cursor-pointer pointer-events-auto">
                  <p>Tenes un nuevo pedido <span>[id: {notification.id}]</span></p>
                </div>
              )
            }) : null
        }
      </div>
    </Layout>
  )
}

export default App
