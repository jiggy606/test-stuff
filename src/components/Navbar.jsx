import React, { useState } from 'react'

import { GrLanguage } from 'react-icons/gr'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItem = [
        {link: "Overview", path: "overview"},
        {link: "Feature", path: "feature"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"},
    ]

  return (
    <div>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className=' text-lg container mx-auto flex justify-between items-center font-semibold'>
                <div className=' flex space-x-14 items-center'>
                    <a href='/' className='text-2xl font-semibold flex space-x-3 items-center text-primary'>
                        <span>XYZ</span>
                    </a>

                    <ul className=' md:flex space-x-12 hidden'>
                        {
                            navItem.map(({link, path}) => <a key={link} href={path} className=' block hover:text-gray-400'>{link}</a>)
                        }
                    </ul>
                </div>

                <div className=' space-x-12 hidden items-center md:flex'>
                    <a href='/' className=' hidden lg:flex items-center'> <GrLanguage className=' mr-2'/><span>Language</span></a>
                    <button className=' bg-secondary px-4 py-2 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign Up</button>
                </div>

                <div className=' md:hidden'>
                    <button onClick={toggleMenu} className=' text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ?  (<FaXmark className=' w-6 h-6 text-primary' />) : (<FaBars className=' w-6 h-6 text-primary' />)
                        }
                    </button>
                </div>
            </div>
        </nav>

        <div className={`space-y-4 px-5 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0" : "hidden"}`}>
            {
                navItem.map(({link, path}) => <a key={link} href={path} className=' block hover:text-gray-400'>{link}</a>)
            }
        </div>
    </div>
  );
}

export default Navbar