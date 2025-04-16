import { FaReact, FaCss3Alt, FaVideo, FaEdit } from 'react-icons/fa'; // Import skill icons
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import social icons
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiDavinciresolve, SiAdobepremierepro } from "react-icons/si";

export default function HireUsPage() {
    const teamMembers = [
        {
            id: 1,
            name: "MD Wakiullah",
            role: "Web Developer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kDrlFsc_Dfhy_c0QyIG7LUHglgmq9RH03w&s",
            bio: "Passionate about building responsive and user-friendly web applications.",
            skills: [{
                name: "NextJS", icon: <RiNextjsFill />
            },
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            {
                name: "Firebase", icon: <IoLogoFirebase className='text-[#FF9100]' />
            },
            {
                name: "CSS", icon: <RiTailwindCssFill />
            },

            ],
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/mdwakiullah/",
                github: "https://github.com/wakiullah",
                facebook: "https://facebook.com/mwakiullah",
                whatsapp: "https://wa.me/+8801308163654",
            },
        },
        {
            id: 2,
            name: "Hasan Sabbir",
            role: "Video Editor",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaGj1QxdZOVJ8pjiIM64CSaOaXKaoyv3NHA&s",
            bio: "Expert in creating stunning video content for various platforms.",
            skills: [
                {
                    name: "Premier Pro", icon: <SiAdobepremierepro className='text-[#ED2224]' />
                },
                {
                    name: "DaVinci", icon: <SiDavinciresolve />

                },
                { name: "Creative Editing", icon: <FaEdit className="text-purple-500" /> },
            ],
            socialLinks: {
                linkedin: "https://linkedin.com/in/janesmith",
                facebook: "https://facebook.com/janesmith",
                whatsapp: "https://wa.me/9876543210",
            },
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Hire Our Team</h1>
                <p className="text-center text-gray-600 mb-12">
                    Meet our talented team members and connect with them for your next project.
                </p>
                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className={`flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden border hover:border-primary transition-shadow duration-300 ${index === 1 ? "md:order-first" : "md:order-last"
                                }`}
                        >
                            {/* Image Section */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                            />
                            {/* Content Section */}
                            <div className="p-6 flex-1">
                                <h3 className="text-lg font-bold text-primary mb-2">
                                    Hire {member.role}
                                </h3>
                                <h2 className="text-2xl font-semibold text-gray-800">{member.name}</h2>
                                <p className="text-gray-600 mb-4">{member.bio}</p>
                                <div className="mb-4">
                                    <p className="text-sm font-bold text-gray-700 mb-2">Skills:</p>
                                    <div className="flex flex-wrap gap-4">
                                        {member.skills.map((skill, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded-full"
                                            >
                                                {skill.icon}
                                                <span className="text-gray-800 text-sm font-medium">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-700 mb-2">Contact:</p>
                                    <div className="flex items-center space-x-4">
                                        {member.socialLinks?.whatsapp && (
                                            <a
                                                href={member.socialLinks.whatsapp}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-500 hover:text-green-700"
                                            >
                                                <FaWhatsapp size={20} />
                                            </a>
                                        )}
                                        {member.socialLinks?.facebook && (
                                            <a
                                                href={member.socialLinks.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <FaFacebook size={20} />
                                            </a>
                                        )}
                                        {member.socialLinks?.linkedin && (
                                            <a
                                                href={member.socialLinks.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <FaLinkedin size={20} />
                                            </a>
                                        )}
                                        {member.socialLinks?.github && (
                                            <a
                                                href={member.socialLinks.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-800 hover:text-gray-900"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}