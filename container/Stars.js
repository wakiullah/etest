import React from 'react'
const stats = [
    { label: 'COURSES', value: '03+' },
    { label: 'ENROLLED', value: '700+' },
    { label: 'TUTORS', value: '05+' },
    { label: 'GRADUATES', value: '10+' },
];

export default function Stars() {
    return (

        < section className="bg-primary text-white py-12 text-center" >
            <div className='container mx-auto'>
                <div className=" mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className='relative'>
                            <p className="text-7xl opacity-[25%] font-bold">{stat.value}</p>
                            <p className="text-lg absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 uppercase font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
