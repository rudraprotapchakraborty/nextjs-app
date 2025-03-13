"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {

    const router = useRouter()
    const isLoggedIn = true;
    const handleNavigation = () => {
        if(isLoggedIn){
            router.push("/about/address")
        }else{
            router.push("/")
        }
    }

    return (
        <div>
            <p className='text-3xl font-bold'>About</p>
            <Link href={'/about/address'}>Address Page by link</Link>
            <br></br>
            <button className='border' type='button' onClick={handleNavigation}>Address Page by router push</button>
        </div>
    );
};

export default page;