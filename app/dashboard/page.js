import Link from 'next/link';

export default function DashboardPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <p className="text-gray-600 mb-8">Welcome to the dashboard!</p>
            <div className="flex space-x-4">
                <Link
                    href="/dashboard/addcourse"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                    Add Course
                </Link>
                <Link
                    href="/dashboard/addteam"
                    className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                >
                    Add Team
                </Link>
            </div>
        </div>
    );
}