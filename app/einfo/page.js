'use client';
import { cityData, universityData } from "@/data/einfo";
import { Hind_Siliguri } from "next/font/google";
import { useState } from "react";
import { toast } from "react-toastify";

const hindsiliguri = Hind_Siliguri({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-hindsiliguri',
    display: 'swap',
})

export default function ImportantInfoPage() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState(null);

    

    const handlePopup = (data) => {
        setPopupData(data);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPopupData(null);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!", {
            position: "top-center",
        });
        const notify = () => toast.success("Login Successful!", {
            position: "top-center",
        })
    };

    return (
        <div className={`${hindsiliguri.variable} min-h-screen hind-font bg-gray-50 py-10`}>
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
                                className="bg-white  hover:bg-gray-100 border border-primary shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => handlePopup(data)}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">{data.category}</h3>
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
                                className="bg-white  border border-primary hover:bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => handlePopup(data)}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">{data.category}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className={`${hindsiliguri.variable} fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]`}>
                    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative max-h-[80vh] overflow-y-auto">
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
                                            <span className="font-semibold">ফোন:</span>{" "}
                                            <span
                                                className="text-blue-500 hover:underline cursor-pointer"
                                                onClick={() => copyToClipboard(item.phone)}
                                            >
                                                {item.phone}
                                            </span>
                                        </p>
                                        <p>
                                            <span className="font-semibold">ইমেইল:</span>{" "}
                                            <span
                                                className="text-blue-500 hover:underline cursor-pointer"
                                                onClick={() => copyToClipboard(item.email)}
                                            >
                                                {item.email}
                                            </span>
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