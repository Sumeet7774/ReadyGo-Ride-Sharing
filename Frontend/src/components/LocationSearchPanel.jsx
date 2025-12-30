/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const LocationSearchPanel = ({ suggestions, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
    }

    return (
        <div className="space-y-2">
            {(!suggestions || suggestions.length === 0) ? (
                <p className="text-gray-500 text-center py-3 text-sm">
                    No address found. Try refining your search.
                </p>
            ) : (
                suggestions.map((elem, idx) => (
                    <button
                        type="button"
                        key={idx}
                        onClick={() => handleSuggestionClick(elem.name)}
                        className="w-full flex gap-4 items-center my-2 px-3 py-3 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-150 text-left"
                    >
                        <span className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-50 text-primary-600">
                            <i className="ri-map-pin-fill text-lg" />
                        </span>
                        <div className="flex-1">
                            <h4 className="font-medium text-sm text-gray-900 line-clamp-1">
                                {elem.name}
                            </h4>
                            {elem.label && (
                                <p className="text-xs text-gray-500 line-clamp-1">
                                    {elem.label}
                                </p>
                            )}
                        </div>
                    </button>
                ))
            )}
        </div>
    )
}


export default LocationSearchPanel