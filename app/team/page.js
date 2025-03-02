import TeamCard from '@/components/TeamCard';
import { FaEnvelope } from 'react-icons/fa';

const facultyMembers = [
    {
        name: 'Dr. Alex Johnson',
        title: 'Associate Professor',
        role: 'Department Head',
        education: 'Ph.D., Stanford University, USA',
        email: 'alex.johnson@northsouth.edu',
        image: 'https://th-thumbnailer.cdn-si-edu.com/gnVVC1OLQs1cWyFWBciZSwXKon8=/1072x720/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg    ',
    },
    {
        name: 'Dr. Maria Chen',
        title: 'Assistant Professor',
        role: 'Structural Engineering',
        education: 'Ph.D., Massachusetts Institute of Technology, USA',
        email: 'maria.chen@northsouth.edu',
        image: 'https://th-thumbnailer.cdn-si-edu.com/gnVVC1OLQs1cWyFWBciZSwXKon8=/1072x720/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg',
    },
];


export default function TeamList() {
    return (
        <section className="min-h-screen bg-white  py-10 px-4">
            <div className='container mx-auto'>
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">Department of Civil and Environmental Engineering</h1>
                </div>
                <div className="flex md:grid md:grid-cols-2 flex-wrap justify-center gap-6">
                    {facultyMembers.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}
