'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import pb from "@/lib/pocketbase";

const Header: React.FC = () => {
    const router = useRouter();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        // Check authentication state when the component mounts
        setIsAuthenticated(pb.authStore.isValid);
        
        // Update state on auth change
        pb.authStore.onChange(() => {
        setIsAuthenticated(pb.authStore.isValid);
        });
    }, []);

    const handleLogout = () => {
        pb.authStore.clear();
        router.push('/'); // Redirect to login page after logout
      };


  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <span className="ml-2 font-medium">DIY Service Log</span>
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 ml-4"
            href="/vehicles"
          >
            Vehicles
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 ml-4"
            href="/profile"
          >
            Profile
          </Link>
        </div>
        <nav className="flex items-center gap-4">
        {isAuthenticated ? (
            <button
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            onClick={handleLogout}
        >
            Logout
        </button>
        ) : (
            <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href='/login'
        >
            Login
        </Link>
        )}
        </nav>
      </div>
    </header>
  );
}

export default Header;