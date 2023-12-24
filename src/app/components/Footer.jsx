import React from "react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
	return (
		<footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white flex justify-center'>
			<div className='container p-12 flex justify-between flex-col items-center  md:flex-row w-[95%]'>
				<span className='m-10 md:m-0'>
					<Link
						href={"/"}
						className='text-2xl  md:text-5xl text-white font-semibold'
					>
						<Image
							src='/images/LogoAbertoCor.png'
							alt='logo'
							className=''
							width={150}
							height={150}
						/>
					</Link>
				</span>
				<p className='text-slate-600 '>
					© 2023 Felippe Maciel. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
