import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const navIcons = [
    { src: "/assets/icons/heart.svg", alt: "heart" },
    { src: "/assets/icons/black-heart.svg", alt: "heart" },
    { src: "/assets/icons/user.svg", alt: "user" },
]

const Navbar = () => {
    return (
        <header className="w-full">
            <nav className='nav'>
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/assets/icons/logo.svg"
                        width={27}
                        height={27}
                        alt="logo"
                    />
                    
                    <p className="nav-logo">
                        Scrape<span className="text-primary">Me</span>
                    </p>

                </Link>

                <div className="flex items-center gap-5">
                    {navIcons.map()}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;