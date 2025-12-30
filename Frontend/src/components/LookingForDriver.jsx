/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div className="relative">
      <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
          props.setVehicleFound(false)
      }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
      <h3 className="text-2xl font-semibold mb-3 text-gray-900">Looking for your driver</h3>
      <p className="text-sm text-gray-600 mb-4">We’re matching you with the best nearby captain.</p>

      <div className="flex gap-3 justify-between flex-col items-center">
          <img className="h-20 rounded-xl shadow-md object-cover" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div className="w-full mt-2 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-4 p-3 border-b border-gray-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <i className="ri-map-pin-user-fill"></i>
                  </span>
                  <div>
                      <h3 className="text-sm font-semibold text-gray-900">Pickup</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{props.pickup}</p>
                  </div>
              </div>
              <div className="flex items-center gap-4 p-3 border-b border-gray-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <i className="text-lg ri-map-pin-2-fill"></i>
                  </span>
                  <div>
                      <h3 className="text-sm font-semibold text-gray-900">Destination</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{props.destination}</p>
                  </div>
              </div>
              <div className="flex items-center gap-4 p-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                      <i className="ri-currency-line"></i>
                  </span>
                  <div>
                      <h3 className="text-sm font-semibold text-gray-900">₹{props.fare[ props.vehicleType ]}</h3>
                      <p className="text-xs text-gray-600">Cash payment at drop-off</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default LookingForDriver
