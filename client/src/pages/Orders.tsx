import { useGetOrdersQuery } from "../store/api/apiSlice"
import { formatDate } from "../utils/formatDate"

const Orders = () => {

    const { data, error, isFetching, isLoading } = useGetOrdersQuery({ page: 1 })

    return (
        <div>
            {
                !isFetching ?
                <table className="w-full bg-white">
                    <thead className="sticky -top-6 grid grid-cols-12 gap-2 bg-white p-4 shadow-md shadow-slate-100">
                        <tr className="col-span-1 "><td>Order</td></tr>
                        <tr className="col-span-4"><td>Customer</td></tr>
                        <tr className="col-span-2"><td>Date</td></tr>
                        <tr className="col-span-2"><td>Status</td></tr>
                        <tr className="col-span-2"><td>Total</td></tr>
                    </thead>
                    <tbody className={`flex flex-col divide-y divide-slate-200 px-4 first-line:selection:${isFetching && "opacity-45"}`}>
                        {
                            !isLoading ?
                                data?.orders.map(order => {
                                    return (
                                        <tr key={order.id} className="col-span-1 py-5 grid grid-cols-12 gap-2">
                                            <td className="font-semibold">{order.number}</td>
                                            <td className="col-span-4 overflow-hidden whitespace-nowrap text-ellipsis w-[85%]">{order.shipping.first_name}</td>
                                            <td className="col-span-2">{formatDate(order.date_created)}</td>
                                            <td className="col-span-2">{order.status}</td>
                                            <td className="col-span-2">CHF. {order.total}</td>
                                            <td>
                                                <button>
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }) : <p>loading...</p>
                        }
                    </tbody>
                </table> : null
            }
        </div>
    )
}

export default Orders