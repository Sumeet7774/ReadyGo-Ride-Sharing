// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext);

    return (
        <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-soft border border-gray-100 p-4">
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover shadow-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <div>
                        <h4 className='text-lg font-semibold capitalize text-gray-900'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                        <p className='text-xs text-gray-500'>Active Captain</p>
                    </div>
                </div>
                <div className="text-right">
                    <h4 className='text-xl font-semibold text-emerald-600'>₹295.20</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>
            <div className='flex p-3 mt-5 bg-gray-50 rounded-2xl justify-center gap-5 items-start border border-gray-100'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line text-primary-600"></i>
                    <h5 className='text-lg font-semibold text-gray-900'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line text-primary-600"></i>
                    <h5 className='text-lg font-semibold text-gray-900'>4.8</h5>
                    <p className='text-sm text-gray-600'>Rating</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line text-primary-600"></i>
                    <h5 className='text-lg font-semibold text-gray-900'>128</h5>
                    <p className='text-sm text-gray-600'>Trips</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails