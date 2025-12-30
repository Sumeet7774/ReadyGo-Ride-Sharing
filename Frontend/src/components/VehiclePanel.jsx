/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { toast } from 'react-toastify'

const VehiclePanel = ({ fare, selectVehicle, setConfirmRidePanel, setVehiclePanel }) => {
  return (
    <div className="relative">
      <h5
        className="p-1 text-center w-[93%] absolute top-0 cursor-pointer"
        onClick={() => {
          setVehiclePanel(false)
        }}
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line" />
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-gray-900">Choose a Ride</h3>

      <div className="space-y-3">
        <button
          type="button"
          onClick={() => {
            setConfirmRidePanel(true)
            selectVehicle('car')
          }}
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-gray-100 bg-white shadow-soft hover:border-primary-200 hover:shadow-lg transition-all duration-150"
        >
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-16 object-cover rounded-lg"
              src=" https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
              alt="Car"
            />
            <div className="w-full">
              <h3 className="font-semibold text-sm text-gray-900 flex items-center gap-1">
                UberGo
                <span className="inline-flex items-center text-xs text-gray-500">
                  <i className="ri-user-3-fill mr-1" />
                  4
                </span>
              </h3>
              <h5 className="font-medium text-xs text-emerald-600">2 mins away</h5>
              <p className="font-normal text-xs text-gray-500">Comfortable everyday rides</p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
            ₹{fare.car}
          </h2>
        </button>

        <button
          type="button"
          onClick={() => {
            setConfirmRidePanel(true)
            selectVehicle('moto')
          }}
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-gray-100 bg-white shadow-soft hover:border-primary-200 hover:shadow-lg transition-all duration-150"
        >
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-16 object-cover rounded-lg"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt="Moto"
            />
            <div className="w-full">
              <h4 className="font-semibold text-sm text-gray-900 flex items-center gap-1">
                Moto
                <span className="inline-flex items-center text-xs text-gray-500">
                  <i className="ri-user-3-fill mr-1" />
                  1
                </span>
              </h4>
              <h5 className="font-medium text-xs text-emerald-600">3 mins away</h5>
              <p className="font-normal text-xs text-gray-500">Fast and affordable two-wheelers</p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
            ₹{fare.moto}
          </h2>
        </button>

        <button
          type="button"
          onClick={() => {
            setConfirmRidePanel(true)
            selectVehicle('auto')
          }}
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-gray-100 bg-white shadow-soft hover:border-primary-200 hover:shadow-lg transition-all duration-150"
        >
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-16 object-cover rounded-lg"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt="Auto"
            />
            <div className="w-full">
              <h4 className="font-semibold text-sm text-gray-900 flex items-center gap-1">
                UberAuto
                <span className="inline-flex items-center text-xs text-gray-500">
                  <i className="ri-user-3-fill mr-1" />
                  3
                </span>
              </h4>
              <h5 className="font-medium text-xs text-emerald-600">3 mins away</h5>
              <p className="font-normal text-xs text-gray-500">Convenient auto-rickshaw rides</p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
            ₹{fare.auto}
          </h2>
        </button>
      </div>
    </div>
  )
}

export default VehiclePanel
//
  