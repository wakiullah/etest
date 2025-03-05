import React from 'react'
import { FaStar } from 'react-icons/fa';

export default function Review() {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4">Student Feedback</h2>
            <div className="flex items-center gap-4">
                <div className="text-center">
                    <span className="text-4xl font-bold">4.9</span>
                    <div className="text-yellow-500 flex justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <p className="text-gray-500">(234 Reviews)</p>
                </div>
                <div className="flex-1 space-y-2">
                    {[{ rating: 5, percentage: 82, count: 212 }, { rating: 4, percentage: 12, count: 28 }, { rating: 3, percentage: 4, count: 9 }, { rating: 2, percentage: 1, count: 5 }, { rating: 1, percentage: 1, count: 1 }].map((item) => (
                        <div key={item.rating} className="flex items-center">
                            <span className="w-6 text-gray-600">{item.rating}</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded-md overflow-hidden mx-2">
                                <div className={`h-full ${item.rating === 5 ? 'bg-green-500' : item.rating === 4 ? 'bg-yellow-500' : item.rating === 3 ? 'bg-blue-500' : item.rating === 2 ? 'bg-orange-500' : 'bg-red-500'}`} style={{ width: `${item.percentage}%` }}></div>
                            </div>
                            <span className="w-6 text-gray-600">{item.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
