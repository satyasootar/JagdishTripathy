import { Dock, DockIcon } from "@/components/ui/dock";
import { Linkedin, Instagram, Github, Twitter, BookOpen } from 'lucide-react';

function Footer() {
    return (
        <div className='h-40 bg-transparent flex flex-col justify-center items-center gap-4'>
            <Dock direction="middle">
                <DockIcon>
                    <a href='https://www.linkedin.com/in/jagadishtripathy/' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                        <Linkedin className="size-6" />
                    </a>
                </DockIcon>
                <DockIcon>
                    <a href='https://www.instagram.com/Jagadishtripathy_official/' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                        <Instagram className="size-6" />
                    </a>
                </DockIcon>
                <DockIcon>
                    <a href='https://github.com/Jagadishtripathy' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                        <Github className="size-6" />
                    </a>
                </DockIcon>
                <DockIcon>
                    <a href='https://x.com/cyber_jagdish' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                        <Twitter className="size-6" />
                    </a>
                </DockIcon>
                <DockIcon>
                    <a href='https://medium.com/@jagadishtripathy' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                        <BookOpen className="size-6" />
                    </a>
                </DockIcon>
            </Dock>

            <div className='flex justify-center py-2 font-light text-sm text-neutral-500 dark:text-neutral-400'>
                © 2025 Jagadish Tripathy All rights reserved.
            </div>
        </div>
    )
}

export default Footer