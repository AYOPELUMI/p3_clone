import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Link from 'next/link'

const Footer = () => {
    const footerLinks = [
        {
            title: "Who We Are",
            links: [
                { text: "About Us", href: "#" },
                { text: "Business Referral Network", href: "#" },
                { text: "University Partnership", href: "#" },
                { text: "The 54th Pitch", href: "#" }
            ]
        },
        {
            title: "What We Do",
            links: [
                { text: "Business Strategy", href: "#" },
                { text: "Market Entry", href: "#" },
                { text: "Business Research", href: "#" },
                { text: "Sales", href: "#" },
                { text: "Marketing", href: "#" },
                { text: "Business Audit", href: "#" }
            ]
        }
    ]

    const quickLinks = [
        { text: "Who We Are", href: "#" },
        { text: "What We Do", href: "#" },
        { text: "Our Events", href: "#" },
        { text: "Resource Hub", href: "#" },
        { text: "Let's Collaborate", href: "#" }
    ]

    const socialIcons = [
        { src: "/svgs/linkedin.svg", alt: "LinkedIn" },
        { src: "/svgs/facebook.svg", alt: "Facebook" },
        { src: "/svgs/instagram.svg", alt: "Instagram" },
        { src: "/svgs/youtube.svg", alt: "YouTube" }
    ]

    return (
        <div className="p-[31px] pt-[66px] lg:mt-4 lg:pt-7 bg-primary text-white">
            <div className="grid grid-cols-2 lg:grid-cols-6 mb-[26px]">
                {/* Logo and Description */}
                <div className="flex flex-col mb-6 pt-0.5 lg:pt-3">
                    <img src={"/logo.svg"} className="w-[100px] h-auto" alt="P23 Africa Logo" />
                    <p className="text-base font-light leading-6 mt-[13px] lg:mt-8">
                        P23 Africa LTD is registered in the United Kingdom.
                        Company No: 15246700
                    </p>
                </div>

                {/* Quick Links (Mobile) */}
                <div className="grid items-center justify-center font-normal gap-[9px] lg:hidden tracking-[0.5px]">
                    <span className="text-base leading-[18px] mb-[31px]">Quick Links</span>
                    {quickLinks.map((link, index) => (
                        <Link key={index} href={link.href} className="text-base leading-[18px]">
                            {link.text}
                        </Link>
                    ))}
                </div>

                {/* Footer Links (Desktop) */}
                {footerLinks.map((section, index) => (
                    <div key={index} className="hidden lg:grid h-fit justify-center font-normal gap-[5px] tracking-[0.5px]">
                        <span className="text-xl leading-6">{section.title}</span>
                        {section.links.map((link, linkIndex) => (
                            <Link key={linkIndex} href={link.href} className="text-base leading-6">
                                {link.text}
                            </Link>
                        ))}
                    </div>
                ))}

                {/* Social Links (Desktop) */}
                <div className="hidden lg:block">
                    <p className="text-xl leading-7 font-light mb-[17px]">Contact us</p>
                    <div className="flex gap-4">
                        {socialIcons.map((icon, index) => (
                            <img key={index} src={icon.src} alt={icon.alt} />
                        ))}
                    </div>
                </div>

                {/* Newsletter (Desktop) */}
                <div className="mb-[29px] lg:block hidden col-span-2">
                    <p className="text-2xl leading-6 font-light mb-[15px] tracking-[0.5px]">Subscribe to get updates</p>
                    <div className="flex flex-col overflow-hidden gap-5">
                        <Input
                            placeholder="Enter your email"
                            className="max-w-[332px] !rounded-[10px] !bg-transparent focus-visible:ring-[#CCED60] focus-visible:ring-[1px] !border-[#CCED60]"
                        />
                        <Button
                            variant="default"
                            className="bg-[#CCED60] w-[169px] text-primary rounded-[10px] !text-base !leading-6 !font-normal !tracking-[0.5px]"
                        >
                            Subscribe
                            <ArrowRight className="font-bold ml-6" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Newsletter (Mobile) */}
            <div className="mb-[29px] lg:hidden">
                <p className="text-xl leading-7 font-light mb-6">Subscribe to get updates</p>
                <div className="flex rounded-[8px] overflow-hidden items-stretch max-w-[238px]">
                    <Input
                        placeholder="Enter your email"
                        className="rounded-none border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                        size="lg"
                        variant="default"
                        className="bg-[#CCED60] text-primary rounded-none"
                    >
                        <ArrowRight />
                    </Button>
                </div>
            </div>

            {/* Social Links (Mobile) */}
            <div className="lg:hidden">
                <p className="text-xl leading-7 font-light mb-[17px]">Contact us</p>
                <div className="flex gap-4">
                    {socialIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} />
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <div className="w-fit ml-auto">
                <span className="text-base text-white font-georgia w-fit mr-[5px] lg:mr-[120px] mt-[50px] lg:mt-[72px] inline-flex gap-1 tracking-[0.08em]">
                    ©P23 Africa 2025
                    <span className="hidden lg:flex">
                        • Privacy Policy • Terms & Conditions
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Footer