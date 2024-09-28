'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { auth } from '../(route)/lib/Firebase'; // Adjust the path as needed
import { onAuthStateChanged } from 'firebase/auth';

function Header() {
    const [user, setUser] = useState(null);

    const HeaderMenu = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Appointment", path: "/appointment" },
        { id: 3, name: "Education", path: "/education" },
    ];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <div className='flex justify-between px-4 items-center shadow-sm'>
            <div className='flex gap-20 items-center p-6'>
                <Image src='/logo.svg' alt='logo' 
                    width={140} 
                    height={40} 
                    priority />

                <ul className='md:flex hidden gap-10'>
                    {HeaderMenu.map((item) => (
                        <li key={item.id}
                            className='hover:text-primary cursor-pointer hover:scale-105 
                            transition-all ease-in-out text-xl'>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {user ? (
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            ) : (
                <Button>
                    <Link href="/Login">
                        Get Started
                    </Link>
                </Button>
            )}
        </div>
    );
}

export default Header;
