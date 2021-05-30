import React from 'react'

function CartDisplay(props) {
    return (
        <div className='flex h-26 font-body text-gray-800 justify-between items-center m-6'>
            <img 
                className='w-14 hover:opacity-75 hover:border hover:border-gray-300'
                src={props.img} alt=''
            />

            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>${props.price * props.quantity}</p>
        </div>
    )
}

export default CartDisplay