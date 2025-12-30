/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const WaitingForDriver = (props) => {
    return (
    <div className="relative">
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
          props.waitingForDriver(false)
      }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

      <div className='flex items-center justify-between bg-white border border-gray-100 rounded-2xl p-4 shadow-sm'>
          <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full object-cover shadow-sm' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
            <div>
              <h2 className='text-lg font-semibold capitalize text-gray-900'>{props.ride?.captain.fullname.firstname}</h2>
              <p className='text-xs text-gray-500'>Your driver is on the way</p>
            </div>
          </div>
          <div className='text-right'>
            <h4 className='text-xl font-semibold -mt-1 -mb-1 text-gray-900'>{props.ride?.captain.vehicle.plate}</h4>
            <p className='text-sm text-gray-600'>{props.ride?.captain.vehicle.model || 'Your vehicle'}</p>
            <h1 className='text-lg font-semibold text-emerald-600'>OTP: {props.ride?.otp}</h1>
          </div>
      </div>
     
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
    </div>  

  )
}

export default WaitingForDriver
