import { Linkedin, Instagram, Github } from 'lucide-react';

function Footer() {


    return (
        <div className='h-40 bg-transparent '>
            <div className='flex justify-center gap-10' >
                <Linkedin />
                <Instagram />
                <Github />
            </div>
            <div>
                <div className='flex justify-center py-6 font-light'>© 2025 Jagadish Tripathy  All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer