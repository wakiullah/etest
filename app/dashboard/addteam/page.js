'use client';
import { useState } from 'react';
import { ref, push } from "firebase/database";
import { db } from "@/firebase/firebase"; // Adjust the path based on your project structure

const AddTeam = () => {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        place: '',
        department: '',
        university: '',
        email: '',
        pictureUrl: '',
        facebookId: '',
        linkedinId: '',
        whatsappNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reference to the "teamMembers" node in the database
        const teamMembersRef = ref(db, "teamMembers");

        // Push the form data to the database
        push(teamMembersRef, formData)
            .then(() => {
                console.log("Form Data Submitted Successfully:");
                alert("Team member added successfully!");
                setFormData({
                    name: '',
                    position: '',
                    place: '',
                    department: '',
                    university: '',
                    email: '',
                    pictureUrl: '',
                    facebookId: '',
                    linkedinId: '',
                    whatsappNumber: '',
                });
            })
            .catch((error) => {
                console.error("Error submitting form data:", error);
                alert("Failed to add team member. Please try again.");
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Team Member</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Position</label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Place</label>
                        <input
                            type="text"
                            name="place"
                            value={formData.place}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Department</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">University</label>
                        <input
                            type="text"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Picture URL</label>
                        <input
                            type="url"
                            name="pictureUrl"
                            value={formData.pictureUrl}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Facebook ID</label>
                        <input
                            type="text"
                            name="facebookId"
                            value={formData.facebookId}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">LinkedIn ID</label>
                        <input
                            type="text"
                            name="linkedinId"
                            value={formData.linkedinId}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                        <input
                            type="text"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add Team Member
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTeam;