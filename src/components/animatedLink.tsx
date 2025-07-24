import Link from 'next/link'
import React from 'react'

const AnimatedLink = ({ title, href }: { title: string, href: string }) => {
    return (
        <Link
            href={href}
            className="relative inline-block cursor-pointer whitespace-nowrap text-white font-light text-base group "
        >
            {title}
            <span className="absolute left-1/2 right-1/2 bottom-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:left-0 group-hover:right-0" />
        </Link>
    )
}

export default AnimatedLink