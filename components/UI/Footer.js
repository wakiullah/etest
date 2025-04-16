'use client';

import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

export default function Footer() {
    return (
        <footer className="bg-primary pt-16 pb-4 text-white ">
            <div className=''>
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            ESOMOY
                        </h2>
                        <p className="text-white mt-4">
                            Education focused website or template is an essential part that provides visitors with insights into the
                            program or service offered.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.facebook.com/profile.php?id=61569850573190" target='_blank' className="p-2 border rounded-sm hover:bg-white hover:text-primary"><FaFacebookF /></a>
                            <a href="#" className="p-2 border  rounded-sm hover:bg-white hover:text-primary"><RxCross2 /></a>
                            <a href="#" className="p-2 border rounded-sm hover:bg-white hover:text-primary"><FaLinkedinIn /></a>
                            <a href="#" className="p-2 border rounded-sm hover:bg-white hover:text-primary"><FaInstagram /></a>
                        </div>
                    </div>
                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Links</h3>
                        <ul className="mt-4 space-y-2 text-white">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
                            <li><Link href="/team" className="hover:text-white">Instructor</Link></li>
                            <li><a href="#" className="hover:text-white">Instructor Details</a></li>
                            <li><a href="#" className="hover:text-white">Event</a></li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="mt-4 space-y-2 text-white">
                            <li><Link href="/hireus" className="hover:text-white">Contact Now</Link></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Purchase Guide</a></li>
                            <li><a href="#" className="hover:text-white">Terms Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold">Newsletter</h3>
                        <p className="text-white mt-4">Subscribe our newsletter to get the latest news & updates.</p>
                        <div className="mt-4 flex items-center border border-gray-600 rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full p-2 bg-transparent text-white focus:outline-none"
                            />
                            <button className="bg-green-500 text-black px-4 py-2">Subscribe</button>
                        </div>
                        <div className="mt-4 flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-white">I Have Read And Agree To The Website.</span>
                        </div>
                    </div>
                </div>
                <div className="text-center  mt-10 border-t border-gray-200 pt-4">
                    <p className="text-white">© Copyright E-somoy 2025 | Developed By <a className="hover:underline text-green-200"href='https://github.com/wakiullah' target="_blank">Md Wakiullah</a></p>
                </div>
            </div>
        </footer>
    );
}
