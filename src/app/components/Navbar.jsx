"use client"
import Link from "next/link"
import React, {useState} from "react"
import Image from "next/image"
import NavLink from "./NavLink"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

const navLinks = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contato",
	},
]

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)
	return (
		<nav className='fixed bg-[#12121290] backdrop-blur-xl w-full z-[100] min-h-[120px] flex justify-between items-center flex-col'>
			<div className='flex flex-wrap items-center justify-between mx-auto w-[95%] py-5 px-10'>
				<Link
					href={"/"}
					className='text-2xl  md:text-5xl text-white font-semibold'
				>
					<Image
						src='/images/LogoAbertoCor.png'
						alt='logo'
						className='logo'
						width={220}
						height={150}
					/>
				</Link>
				<div className='mobile-menu block md:hidden'>
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className='flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:border-white'
						>
							<Bars3Icon className='h-5 w-5'></Bars3Icon>
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className='flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:border-white'
						>
							<XMarkIcon className='h-5 w-5'></XMarkIcon>
						</button>
					)}
				</div>
				<div className='menu hidden md:block md:w-auto' id='navbar'>
					<ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 my-0'>
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink
									href={link.path}
									title={link.title}
								></NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen && (
				<div className='p-8'>
					<ul className='text-center'>
						{navLinks.map((link, index) => (
							<li className='p-2' key={index}>
								<a href={link.path}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	)
}

export default Navbar
