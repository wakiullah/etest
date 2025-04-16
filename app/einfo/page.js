'use client';

import { useState } from "react";

export default function ImportantInfoPage() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState(null);

    const universityData = [
        {
            category: "প্রক্টরের নাম্বার সমূহ",
            items: [
                { name: "প্রক্টর ১", phone: "+880123456789", email: "proctor1@cu.ac.bd" },
                { name: "প্রক্টর ২", phone: "+880987654321", email: "proctor2@cu.ac.bd" },
                { name: "প্রক্টর ৩", phone: "+880112233445", email: "proctor3@cu.ac.bd" },
            ],
        },
        {
            category: "হলের প্রভোষ্ট",
            items: [
                { name: "প্রভোষ্ট ১", phone: "+880223344556", email: "provost1@cu.ac.bd" },
                { name: "প্রভোষ্ঠ ২", phone: "+880334455667", email: "provost2@cu.ac.bd" },
            ],
        },
    ];

    const cityData = [
        {
            category: "থানা",
            items: [
                { name: "কোতোয়ালি থানা", phone: "+880312345678", email: "kotwali@police.gov.bd" },
                { name: "পাঁচলাইশ থানা", phone: "+880312345679", email: "panchlaish@police.gov.bd" },
            ],
        },
        {
            category: "ফায়ার সার্ভিস",
            items: [
                { name: "চট্টগ্রাম ফায়ার সার্ভিস", phone: "199", email: "fireservice@chittagong.gov.bd" },
            ],
        },
    ];

    const handlePopup = (data) => {
        setPopupData(data);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPopupData(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    গুরুত্বপূর্ণ তথ্য
                </h1>

                {/* University Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        চট্টগ্রাম বিশ্ববিদ্যালয়ের গুরুত্বপূর্ণ তথ্য
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {universityData.map((data, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => handlePopup(data)}
                            >
                                <h3 className="text-xl font-bold text-gray-800">{data.category}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* City Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        চট্টগ্রামের গুরুত্বপূর্ণ প্রতিষ্ঠান
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cityData.map((data, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => handlePopup(data)}
                            >
                                <h3 className="text-xl font-bold text-gray-800">{data.category}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                            onClick={closePopup}
                        >
                            ✖
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{popupData.category}</h2>
                        <div className="space-y-4">
                            {popupData.items.map((item, index) => (
                                <details
                                    key={index}
                                    className="border rounded-lg p-4 transition-all duration-300 ease-in-out"
                                >
                                    <summary className="cursor-pointer font-semibold text-gray-800">
                                        {item.name}
                                    </summary>
                                    <div className="mt-2 text-gray-600">
                                        <p>
                                            <span className="font-semibold">ফোন:</span> {item.phone}
                                        </p>
                                        <p>
                                            <span className="font-semibold">ইমেইল:</span>{" "}
                                            <a
                                                href={`mailto:${item.email}`}
                                                className="text-blue-500 hover:underline"
                                            >
                                                {item.email}
                                            </a>
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}