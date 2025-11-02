import React, { useEffect, useState } from 'react'

const MyOrdersPage = () => {
    const [orders,setOrders]= useState([])

    useEffect(()=>{
        setTimeout(()=>{
            const mockOrders=[
                {
                    _id:"12345",
                    createdAt:new Date(),
                    shippingAddress:{city:"New York", country:"USA"},
                    orderItems:[
                        {
                            name:"product 1",
                            image:"http://picsum.photos/500/500?random=1"
                        }
                    ],
                    totalPrice:100,
                    isPaid:true
                },
                  {
                    _id:"34567",
                    createdAt:new Date(),
                    shippingAddress:{city:"New York", country:"USA"},
                    orderItems:[
                        {
                            name:"product 2",
                            image:"http://picsum.photos/500/500?random=2"
                        }
                    ],
                    totalPrice:100,
                    isPaid:true
                }
            ]
            setOrders(mockOrders)
        },[])
    })
  return (
    <div className='max-w-9xl mx-auto '>
        <h2 className='text-xl sm:text-2xl font-bold mb-6'>my orders</h2>
        <div className='relative shadow-md sm:rounded-lg '>
            <table className='min-w-full text-left '>
                <thead className='text-black text-xs font-semibold'>
                    <tr>
                        <th className='py-2 px-8 sm:py-2'>image</th>
                        <th className='py-2 px-8 sm:py-2'>Order Id</th>
                        <th className='py-2 px-8 sm:py-2'>created</th>
                        <th className='py-2 px-8 sm:py-2'>shipping address</th>
                        <th className='py-2 px-8 sm:py-2'>items</th>
                        <th className='py-2 px-8 sm:py-2'>price</th>
                        <th className='py-2 px-8 sm:py-2'>status</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {orders.length>0 ?(
                        orders.map((order)=>(
                            <tr key={order._id} className='border-b hover:border-gray-50 cursor-pointer'>
                                <td className='p-2 px-2 sm:py-4 sm:px-4'>
                                    <img src={order.orderItems[0].image} alt="" 
                                    className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg'/>
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4 text-xs text-gray-950 '>#{order._id}</td>
                                <td className='py-2 px-2 text-xs sm:py-4 sm:px-4'>
                                    {new Date(order.createdAt).toLocaleDateString()} {" "}
                                    
                                </td>
                                <td className='py-2 px-2 sm:px-4 sm:py-4 text-xs'>
                                    {order.shippingAddress ? `${order.shippingAddress.city}`:"N/A"}
                                </td>
                                <td className='py-2 px-2 text-xs sm:py-4 sm:px-4'>{order.orderItems.length}</td>

                                <td className='py-2 px-2 text-xs sm:py-4 sm:px-4'>${order.totalPrice}</td>

                                <td className='py-2 px-2 text-xs sm:py-4 sm:px-4'>
                                    <span className={`${order.isPaid ? "bg-green-100":"bg-red-500"} px-2 py-1 rounded-full sm:text-xs`}>
                                        {order.isPaid ? "paid" :"pending"}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan={7} className='py-4 px-4 text-center text-gray-600'>you have no order</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
       

  )
}

export default MyOrdersPage
