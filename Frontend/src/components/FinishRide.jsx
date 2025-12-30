// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'

const FinishRide = (props) => {
    const navigate = useNavigate()
    console.log(props.ride)

    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            rideId: props.ride._id
        },{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('captainToken')}`
            }
        })

        if(response.status === 200){
            navigate('/captain-home')
        }
    }

    return (
        <div className="relative">
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className="text-3xl text-gray-400 cursor-pointer ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-3 text-center text-gray-900'>Finish the ride</h3>
            <p className="text-sm text-center text-gray-600 mb-4">Confirm completion and payment collection.</p>
            <div className='flex items-center justify-between p-4 bg-amber-50 border border-amber-100 rounded-2xl mt-2'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12 shadow-sm' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <div>
                        <h2 className='text-lg font-semibold text-gray-900'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                        <p className='text-xs text-gray-600'>Passenger</p>
                    </div>
                </div>
                <h5 className='text-sm font-semibold text-gray-800'>~2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-4 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden'>
                    <div className='flex items-center gap-4 p-3 border-b border-gray-100'>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                            <i className="ri-map-pin-user-fill"></i>
                        </span>
                        <div>
                            <p className='text-sm font-semibold text-gray-900'>Pickup</p>
                            <p className='text-xs text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-3 border-b border-gray-100'>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                            <i className="text-lg ri-map-pin-2-fill"></i>
                        </span>
                        <div>
                            <p className='text-sm font-semibold text-gray-900'>Destination</p>
                            <p className='text-xs text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-3'>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                            <i className="ri-currency-line"></i>
                        </span>
                        <div>
                            <h3 className='text-sm font-semibold text-gray-900'>₹{props.ride?.fare} </h3>
                            <p className='text-xs text-gray-600'>Collect cash or confirm digital payment</p>
                        </div>
                    </div>
                </div>
                <div className='mt-6 w-full'>
                    <button onClick={endRide} className='w-full mt-1 text-lg flex justify-center bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-emerald-700 transition-colors'>Finish Ride</button>
                </div>
            </div>
        </div>
    )
}
FinishRide.propTypes = {
    ride: PropTypes.shape({
        _id: PropTypes.string,
        user: PropTypes.shape({
            fullname: PropTypes.shape({
                firstname: PropTypes.string,
                lastname: PropTypes.string
            })
        }),
        pickup: PropTypes.string,
        destination: PropTypes.string,
        fare: PropTypes.number
    }),
    setFinishRidePanel: PropTypes.func
}

export default FinishRide