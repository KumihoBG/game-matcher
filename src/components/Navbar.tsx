'use client'

import React, { JSX, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '../utils/navlinks';
import Link from 'next/link';
import { SiRepublicofgamers } from "react-icons/si";

type NavLink = {
    path: string;
    name: string;
    icon: JSX.Element;
    isLoggedIn: boolean;
}

const Navbar = () => {
    const pathName = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <div className="p-8 bg-dark text-lg w-full h-8 flex justify-between items-center">
            <div className="w-1/2 flex justify-start items-center">
                <div className='text-primary flex flex-row gap-2 justify-center items-center text-3xl purple-purse-regular'>
                    <SiRepublicofgamers className='text-secondary text-4xl' />
                    GameMatch
                </div>
            </div>
            <div className="w-1/2 gap-4 flex justify-end items-center">
                {navLinks.map((link: NavLink, index: number) => (
                    <div key={index}>
                        {isLoggedIn === link.isLoggedIn && (
                            <Link key={index} href={link.path}>
                                <div
                                    className={`${pathName === link.path
                                        ? 'flex items-center border-b-2 border-primary'
                                        : 'flex items-center hover:text-secondary'}`}>
                                    {link.icon}
                                    <div className="w-fit flex justify-start items-center">
                                        <p>{link.name}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
