import React from 'react'
import AnimatedLink from '../animatedLink'
import { Button } from '../ui/button'
const links = [
    "Who We Are", "What We Do", "Our Events", "Resource Hub", "Lets Collaborate"
];
const Header = () => {
    return (
        <header className="px-[39px] lg:px-[84px] xl:px-[121px] lg:py-[37px] w-full pt-6 pb-9 bg-primary flex justify-between gap-20  items-center">
            <img src={"/logo.svg"} alt="logo" />
            <img src={"/svgs/menu.svg"} alt="menu" className="lg:hidden block" />
            <div className="hidden lg:flex gap-3 mr-auto ">

                {links.map((link) => (
                    <div className="max-w-[122px]" key={link}>

                        <AnimatedLink title={link} key={link} href="#" />
                    </div>
                ))}

            </div>
            <div className="hidden lg:flex gap-[41px] items-center">
                <Button variant={"outline"} className="w-[112px] rounded-[10px] !text-base !font-normal leading-6  text-white bg-transparent">
                    Subscribe
                </Button>
                <div className="flex gap-4">
                    <img src={"/svgs/linkedin-white.svg"} />
                    <img src={"/svgs/facebook-white.svg"} />
                    <img src={"/svgs/instagram-white.svg"} />
                    <img src={"/svgs/youtube-white.svg"} />
                </div>
            </div>
        </header>
    )
}

export default Header