/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const RidePopUp = (props) => {
    return (
        <div className="relative">
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-2 text-gray-900'>New ride available</h3>
            <p className='text-sm text-gray-600 mb-4'>A nearby passenger requested a ride.</p>

            <div className='flex items-center justify-between p-4 bg-amber-50 border border-amber-100 rounded-2xl mt-2'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12 shadow-sm' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <div>
                        <h2 className='text-lg font-semibold text-gray-900'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                        <p className='text-xs text-gray-600'>Passenger</p>
                    </div>
                </div>
                <h5 className='text-sm font-semibold text-gray-800'>~2.2 KM</h5>
            </div>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-4 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden'>
                    <div className='flex items-center gap-4 p-3 border-b border-gray-100'>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                            <i className="ri-map-pin-user-fill"></i>
                        </span>
                        <div>
                            <h3 className='text-sm font-semibold text-gray-900'>Pickup</h3>
                            <p className='text-xs text-gray-600 line-clamp-2'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-3 border-b border-gray-100'>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                            <i className="text-lg ri-map-pin-2-fill"></i>
                        </span>
                        <div>
                            <h3 className='text-sm font-semibold text-gray-900'>Destination</h3>
                            <p className='text-xs text-gray-600 line-clamp-2'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-3'>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                            <i className="ri-currency-line"></i>
                        </span>
                        <div>
                            <h3 className='text-sm font-semibold text-gray-900'>₹{props.ride?.fare}</h3>
                            <p className='text-xs text-gray-600'>Cash payment at drop-off</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 w-full grid grid-cols-1 gap-3'>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                        props.confirmRide()
                    }} className=' bg-emerald-600 w-full text-white font-semibold py-3 rounded-xl shadow-md hover:bg-emerald-700 transition-colors'>Accept Ride</button>

                    <button onClick={() => {
                        props.setRidePopupPanel(false)

                    }} className='w-full bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-300 transition-colors'>Ignore</button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp