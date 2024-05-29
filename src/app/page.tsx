
'use client';

import Link from 'next/link'

function WrenchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-[90vh] items-center justify-center px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="flex items-center justify-center">
          <WrenchIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Keep Your Vehicle Running Smoothly
        </h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          DIY Service Log makes it easy to keep track of your car's service records.
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/login"
        >
          Get Started
        </Link>
      </div>
    </main>
  )
}

