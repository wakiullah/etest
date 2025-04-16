'use client';
import React, { useState } from 'react';
import { ref, push } from "firebase/database";
import { db } from "@/firebase/firebase";

const AddCoursePage = () => {
    const [formData, setFormData] = useState({
        title: '',
        creator: '',
        totalEnrolled: '',
        category: '',
        description: '',
        price: '',
        oldPrice: '',
        level: '',
        lecturesCount: '',
        duration: '',
        language: '',
        learningPoints: '',
        curriculumData: '',
        imageUrl: '',
        certificate: ''
    });

    const [loading, setLoading] = useState(false); // Add loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when processing starts
        try {

            // Parse curriculumData as JSON
            let parsedCurriculumData;
            try {
                parsedCurriculumData = JSON.parse(formData.curriculumData); // Parse JSON input for curriculumData
            } catch (error) {
                alert("Invalid JSON format in Curriculum Data. Please check your input.");
                setLoading(false); // Reset loading state
                return;
            }

            // Parse learningPoints as JSON
            let parsedLearningPoints;
            try {
                parsedLearningPoints = JSON.parse(formData.learningPoints); // Parse JSON input for learningPoints
            } catch (error) {
                alert("Invalid JSON format in Learning Points. Please check your input.");
                setLoading(false); // Reset loading state
                return;
            }

            // Prepare data to submit
            const dataToSubmit = {
                id: formData.title.toLowerCase().replace(/\s+/g, '-'), // Convert title to lowercase and replace spaces with dashes
                ...formData,
                learningPoints: JSON.stringify(parsedLearningPoints), // Use parsed JSON
                curriculumData: JSON.stringify(parsedCurriculumData) // Use parsed JSON
            };

            const coursesRef = ref(db, 'courses'); // 'courses' is the collection name
            await push(coursesRef, dataToSubmit);
            alert('Course uploaded successfully!');
            setFormData({
                title: '',
                creator: '',
                totalEnrolled: '',
                category: '',
                description: '',
                price: '',
                oldPrice: '',
                level: '',
                lecturesCount: '',
                duration: '',
                language: '',
                learningPoints: '',
                curriculumData: '',
                imageUrl: '',
                certificate: ''
            });
        } catch (error) {
            console.error('Error uploading course:', error);
            alert('Failed to upload course. Please try again.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload New Course</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-1 font-medium">Course Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Course Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="creator" className="block mb-1 font-medium">Creator Name</label>
                    <input
                        type="text"
                        id="creator"
                        name="creator"
                        placeholder="Creator Name"
                        value={formData.creator}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block mb-1 font-medium">Course Image</label>
                    <input
                        type="text"
                        id="image"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="totalEnrolled" className="block mb-1 font-medium">Total Enrolled</label>
                    <input
                        type="number"
                        id="totalEnrolled"
                        name="totalEnrolled"
                        placeholder="Total Enrolled"
                        value={formData.totalEnrolled}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block mb-1 font-medium">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-1 font-medium">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block mb-1 font-medium">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="oldPrice" className="block mb-1 font-medium">Old Price</label>
                    <input
                        type="number"
                        id="oldPrice"
                        name="oldPrice"
                        placeholder="Old Price"
                        value={formData.oldPrice}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="level" className="block mb-1 font-medium">Level</label>
                    <select
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lecturesCount" className="block mb-1 font-medium">Lectures Count</label>
                    <input
                        type="number"
                        id="lecturesCount"
                        name="lecturesCount"
                        placeholder="Lectures Count"
                        value={formData.lecturesCount}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="duration" className="block mb-1 font-medium">Duration</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        placeholder="Duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="language" className="block mb-1 font-medium">Language</label>
                    <select
                        id="language"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select Language</option>
                        <option value="bangla">Bangla</option>
                        <option value="english">English</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="learningpoints" className="block mb-1 font-medium">Learning Points (JSON)</label>
                    <textarea
                        id="learningpoints"
                        name="learningPoints"
                        placeholder='Paste JSON data here (e.g., ["Point 1", "Point 2", "Point 3"])'
                        value={formData.learningPoints}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="curriculumData" className="block mb-1 font-medium">Curriculum Data (JSON)</label>
                    <textarea
                        id="curriculumData"
                        name="curriculumData"
                        placeholder='Paste JSON data here (e.g., [{"title": "Module 1", "lessons": [...]}, ...])'
                        value={formData.curriculumData}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="certificate" className="block mb-1 font-medium">Certificate</label>
                    <select
                        id="certificate"
                        name="certificate"
                        value={formData.certificate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select Certificate Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className={`w-full p-2 rounded text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={loading} // Disable button when loading
                >
                    {loading ? 'Processing...' : 'Upload Course'}
                </button>
            </form>
        </div>
    );
};

export default AddCoursePage;