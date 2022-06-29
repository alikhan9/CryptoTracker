import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

export const Footer = () => {
    return (
        <div className='rounded-div mt-8 pt-8 text-primary'>
            <div className='grid md:grid-cols-2'>
                <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
                    <div>
                        <h2 className='font-bold'>Support</h2>
                        <ul>
                            <li className='text-sm py-2'>Help Center</li>
                            <li className='text-sm py-2'>Contact Us</li>
                            <li className='text-sm py-2'>API Status</li>
                            <li className='text-sm py-2'>Documentation</li>
                        </ul>
                    </div>
                    <div>
                        <h2>info</h2>
                        <ul>
                            <li className='text-sm py-2'>About Us</li>
                            <li className='text-sm py-2'>Careers</li>
                            <li className='text-sm py-2'>Invest</li>
                            <li className='text-sm py-2'>Legal</li>
                        </ul>
                    </div>
                </div>

                <div className='text-right'>
                    <div className='w-full flex justify-end'>
                        <div className='w-full md:w-[300px] py-4 relative'>
                            <div className='flex justify-center md:justify-end py-4 md:pt-0 mt-[-1rem]'>
                                <ThemeToggle />
                            </div>
                            <p className='text-center md:text-right'>Sign up for crypto news</p>
                            <div className='py-4'>
                                <form className='flex'>
                                    <input className='bg-primary text-center  border border-input w-[60%] mr-7 shadow-xl rounded-2xl ' type="email" placeholder="Enter your email" />
                                    <button className='bg-button text-bntText px-4 py-2 w-full shadow-xl rounded-2xl md:w-auto  hover:shadow-2xl'>Sign up</button>
                                </form>
                            </div>
                            <div className='flex py-4 justify-between text-accent'>
                                <AiOutlineInstagram />
                                <FaTiktok />
                                <FaTwitter />
                                <FaFacebook />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center py-4'>Powered by Coin Gecko</p>
        </div>
    )
}
