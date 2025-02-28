import React from 'react'
import { Jost } from 'next/font/google';


const jost = Jost({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export default function Heading({ sub, main, align }) {
    return (
        <div className={`text-${align} mb-8`}>
            <p className="text-primary text-sm mb-3 uppercase">{sub}</p>
            <h2 className={`${jost.className} text-5xl font-semibold`}>{main}</h2>
        </div>
    )
}

