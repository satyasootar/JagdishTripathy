import { Linkedin, Instagram, Github } from 'lucide-react';

function Footer() {


    return (
        <div className='h-40 bg-transparent '>
            <div className='flex justify-center gap-10' >
                <a href='https://www.linkedin.com/in/jagadishtripathy/' ><Linkedin /></a>
                <a href='https://www.instagram.com/Jagadishtripathy_official/' ><Instagram /></a>
                <a href='https://github.com/Jagadishtripathy' ><Github /></a>
            </div>
            <div>
                <div className='flex justify-center py-6 font-light'>© 2025 Jagadish Tripathy  All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer