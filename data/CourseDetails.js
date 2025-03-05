import { MdOutlineAccessTime, MdOutlineCategory, MdLanguage, MdOutlineFileDownload, MdOutlineVideoLibrary, MdOutlineVerified } from "react-icons/md";
import { GiLevelFour } from "react-icons/gi";

export const courseData = {
    title: "Complete Guide to Web Development: Beginner to Advanced",
    reviews: "⭐⭐⭐⭐☆ (1,230 reviews)",
    creator: "John Doe",
    totalEnrolled: "12,580",
    lastUpdate: "15 September 2024",
    category: "Web Development",
    description: "This comprehensive course covers all aspects of web development from the basics of HTML, CSS, and JavaScript to advanced topics like React, Node.js, and database integration. Whether you're a complete beginner or an experienced developer looking to hone your skills, this course has everything you need to master web development. Learn best practices and gain hands-on experience with real-world projects.",
    price: "$Free",
    oldPrice: "$1200",
    details: [
        { label: "Level", value: "Beginners", icon: <GiLevelFour /> },
        { label: "Lectures", value: "8 Lectures", icon: <MdOutlineVideoLibrary /> },
        { label: "Duration", value: "1h 30m 12s", icon: <MdOutlineAccessTime /> },
        { label: "Category", value: "Web Development", icon: <MdOutlineCategory /> },
        { label: "Language", value: "English", icon: <MdLanguage /> },
        { label: "Resources", value: "5 Downloadable Files", icon: <MdOutlineFileDownload /> },
        { label: "Certificate", value: "Yes", icon: <MdOutlineVerified /> }
    ],
    learningPoints: [
        "Build fully responsive websites using HTML, CSS, and JavaScript",
        "Develop web applications using modern JavaScript frameworks like React",
        "Implement back-end services with Node.js and Express",
        "Understand RESTful APIs and connect front-end to back-end",
        "Work with databases like MongoDB and MySQL for full-stack applications",
        "Learn how to deploy web applications to the cloud"
    ]
};



export const curriculumData = [
    {
        "title": "Introduction to Web Development",
        "lessons": [
            { "title": "Overview of HTML, CSS, and JavaScript", "duration": "08:45", "locked": true },
            { "title": "Setting up your development environment", "duration": "10:22", "locked": true }
        ]
    },
    {
        "title": "HTML Fundamentals",
        "lessons": [
            { "title": "Understanding HTML structure", "duration": "12:30", "locked": true },
            { "title": "Common HTML tags and attributes", "duration": "09:15", "locked": true }
        ]
    },
    {
        "title": "CSS Basics",
        "lessons": [
            { "title": "Introduction to CSS and selectors", "duration": "11:50", "locked": true },
            { "title": "Styling text and layouts", "duration": "13:05", "locked": true }
        ]
    },
    {
        "title": "JavaScript Essentials",
        "lessons": [
            { "title": "JavaScript syntax and variables", "duration": "14:20", "locked": true },
            { "title": "Functions and event handling", "duration": "15:45", "locked": true }
        ]
    },
    {
        "title": "Frontend Frameworks",
        "lessons": [
            { "title": "Introduction to React.js", "duration": "16:30", "locked": true },
            { "title": "State and props in React", "duration": "17:10", "locked": true }
        ]
    },
    {
        "title": "Backend Basics",
        "lessons": [
            { "title": "Introduction to Node.js and Express", "duration": "18:00", "locked": true },
            { "title": "Working with databases", "duration": "19:25", "locked": true }
        ]
    }
]
