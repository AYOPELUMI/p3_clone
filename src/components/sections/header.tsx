"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, stagger, useAnimate } from 'framer-motion';
import AnimatedLink from '../animatedLink';
import { Button } from '../ui/button';
import { GiCancel } from 'react-icons/gi';
import { X } from 'lucide-react';

const links = [
    "Who We Are", "What We Do", "Our Events", "Resource Hub", "Lets Collaborate"
];

const socialLinks = [
    { icon: "/svgs/linkedin-white.svg", alt: "LinkedIn" },
    { icon: "/svgs/facebook-white.svg", alt: "Facebook" },
    { icon: "/svgs/instagram-white.svg", alt: "Instagram" },
    { icon: "/svgs/youtube-white.svg", alt: "YouTube" }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [scope, animate] = useAnimate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Animation for menu items
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 }
    };

    const socialVariants = {
        hidden: { scale: 0, opacity: 0 },
        show: { scale: 1, opacity: 1 },
        exit: { scale: 0, opacity: 0 }
    };

    // Prevent body scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Animate the menu items when menu opens
            animate([
                [".menu-item", { y: 0, opacity: 1 }, { delay: stagger(0.1), at: 0.3 }],
                [".social-item", { scale: 1, opacity: 1 }, { delay: stagger(0.1), at: 0.6 }]
            ]);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen, animate]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="px-[39px] lg:px-[84px] xl:px-[121px] lg:py-[37px] w-full pt-6 pb-9 bg-primary flex justify-between gap-20 items-center relative">
            <img src={"/logo.svg"} alt="logo" />

            {/* Mobile menu button */}
            <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="lg:hidden block z-50"
                aria-label="Toggle menu"
            >
                {
                    !isMenuOpen ?
                        <img
                            src={"/svgs/menu.svg"}
                            alt={"Open menu"}
                        /> : <X className='size-10 text-white' />
                }
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex gap-3 mr-auto">
                {links.map((link) => (
                    <div className="w-[122px]" key={link}>
                        <AnimatedLink title={link} key={link} href="#" />
                    </div>
                ))}
            </div>

            <div className="hidden lg:flex gap-[41px] items-center">
                <Button
                    variant={"outline"}
                    className="w-[112px] rounded-[10px] !text-base !font-normal leading-6 text-white bg-transparent"
                >
                    Subscribe
                </Button>
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <img key={social.alt} src={social.icon} alt={social.alt} />
                    ))}
                </div>
            </div>

            {/* Mobile menu with Framer Motion */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={scope}
                        initial={{
                            clipPath: 'circle(0% at 90% 5%)'
                        }}
                        animate={{
                            clipPath: 'circle(120% at 90% 5%)'
                        }}
                        exit={{
                            clipPath: 'circle(0% at 90% 5%)'
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="fixed inset-0 z-40 bg-primary pointer-events-auto"
                    >


                        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 pb-10">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="h-full w-full flex flex-col items-center justify-start gap-6 overflow-y-auto"
                            >
                                {links.map((link) => (
                                    <motion.a
                                        key={link}
                                        variants={itemVariants}
                                        className="menu-item block py-1 text-center text-2xl text-white capitalize transition-opacity duration-300 hover:text-gray-300"
                                        href="#"
                                        onClick={closeMenu}
                                    >
                                        {link}
                                    </motion.a>
                                ))}

                                <motion.div
                                    className="mt-6 flex flex-col items-center gap-6"
                                    variants={containerVariants}
                                >
                                    <motion.div variants={itemVariants}>
                                        <Button
                                            variant={"outline"}
                                            className="w-[112px] rounded-[10px] !text-base !font-normal leading-6 text-white bg-transparent border-white hover:bg-white hover:text-black"
                                        >
                                            Subscribe
                                        </Button>
                                    </motion.div>
                                    <motion.div
                                        className="flex gap-4"
                                        variants={containerVariants}
                                    >
                                        {socialLinks.map((social) => (
                                            <motion.img
                                                key={social.alt}
                                                src={social.icon}
                                                alt={social.alt}
                                                className="social-item hover:opacity-80"
                                                variants={socialVariants}
                                            />
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;