import React from 'react'
import sponsor from '@/public/assests/sponsor.png'
import Image from 'next/image'
const sponsorsIMG = [
    { img: sponsor, alt: "Sponsor Logo" },
    { img: sponsor, alt: "Sponsor Logo" },
    { img: sponsor, alt: "Sponsor Logo" },
    { img: sponsor, alt: "Sponsor Logo" },
    { img: sponsor, alt: "Sponsor Logo" },
    { img: sponsor, alt: "Sponsor Logo" },

]

export default function Sponsors() {
    return (
        <section className='bg-gray-100 py-10'>
            <div className="container mx-auto ">
                <div className='grid gap-y-4 w-full lg:grid-cols-6 md:grid-cols-4 grid-cols-3 '>{sponsorsIMG.map((data, i) => {
                    return <div key={i} className='flex justify-center border-r-2'>
                        <Image src={data.img} key={i} alt={data.alt} width={100} height={100} />
                    </div>
                })}</div>
            </div>
        </section>
    )
}
