import React from 'react'

export default function Heading({ sub, main, align }) {
    return (
        <div className={`text-${align} mb-8`}>
            <p className="text-primary text-sm mb-3 uppercase">{sub}</p>
            <h2 className="text-4xl font-bold">{main}</h2>
        </div>
    )
}
