'use client'
import TeamCard from '@/components/TeamCard';
import Heading from '@/components/UI/Heading';
import { TeamMembers } from '@/data/Team';


export default function TeamList() {
    return (
        <section className="min-h-screen bg-white  py-10 px-4">
            <div className='container mx-auto'>
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <Heading sub={'OUR TEAM'} main={'Meet out Team'} align={'center'} />

                </div>
                <div className="flex lg:grid lg:grid-cols-2 flex-wrap justify-center gap-6">
                    {TeamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}
