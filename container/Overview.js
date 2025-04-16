import OverViewItem from '@/components/Home/OverViewItem';
import { CiMonitor } from "react-icons/ci";
import { PiVideoConferenceThin } from "react-icons/pi";
import { PiFileVideoThin } from "react-icons/pi";


export default function Overview() {
    const data = [
        { icon: <CiMonitor size={50} className="text-primary group-hover:text-black" />, title: <><p >Explore 100,000 <br /> online courses</p></> },
        { icon: <PiVideoConferenceThin size={50} className="text-primary group-hover:text-black" />, title: <><p>Find the right<br /> instructor for you</p></> },
        { icon: <PiFileVideoThin size={50} className="text-primary group-hover:text-black" />, title: <><p>Lifetime access Learn  <br /> on your schedule</p></> },
    ]

    return (
        <div className='bg-primary '>
            <div className='p-6 hidden md:flex '>
                {data.map((item, i) => {
                    return <OverViewItem icon={item.icon} key={i} text={item.title} />
                })}

            </div>
        </div>
    )
}

