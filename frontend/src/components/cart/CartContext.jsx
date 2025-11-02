
import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContent = () => {

    const cartProducts=[
        {
            productId:1,
            name:"shirt",
            size:"M",
            color:"red",
            quantity:1,
            price:14,
            image:"https://picsum.photos/200?random=1"
        },
         {
            productId:2,
            name:"short",
            size:"L",
            color:"blue",
            quantity:1,
            price:19,
            image:"https://picsum.photos/200?random=2"
        }
    ]

  return (
    <div>
      {cartProducts.map((product,index)=>(
        <div key={index}
        className='flex items-start justify-between py-4 border-b'>
            <div className='flex items-start'>
                <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded'/>

                <div>
                    <h5>{product.name}</h5>
                    <p className='text-xs text-gray-700'>
                        size: {product.size} | color: {product.color}

                    </p>
                    <div>
                        <button className='border rounded px-2 py-1 font-medium'>-</button>
                        <span className='mx-2'>{product.quantity}</span>
                        <button className='border rounded px-2 py-1 font-medium'>+</button>
                    </div>
                </div>
            </div>
            
            <div>
                <p className='font-medium '>${product.price}</p>
                <button>
                       <RiDeleteBin3Line className='h-5 w-5 text-red-500'/>
                </button>
             
            </div>

        </div>
      ))}
    </div>
  )
}

export default CartContent