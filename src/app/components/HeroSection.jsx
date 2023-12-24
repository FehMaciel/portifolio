"use client"
import React from "react"
import Image from "next/image"
import {TypeAnimation} from "react-type-animation"

const HeroSection = () => {
	const handleClick = () => {
		window.open("https://ig.me/m/felippedeveloper", "_blank")
	}

	const handleClickCv = () => {
		window.open("https://linkedin.com/in/felippemaciel", "_blank")
	}
	return (
		<section>
			<div className='grid grid-cols-1 sm:grid-cols-12 min-h-[calc(100vh-150px)] p-10'>
				{/* <div class='stars'>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
					<div class='star'></div>
				</div> */}
				<div className='col-span-7 flex flex-col justify-center text-center sm:text-left'>
					<h1 className='text-white mb-4 text-4xl sm:text-3xl lg:text-5xl font-extrabold'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
							{" "}
							Olá, Eu Sou {""}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								"Felippe",
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								"Web Developer",
								1000,
								"Mobile Developer",
								1000,
								"UI/UX Designer",
								1000,
								"Bot Developer",
								1000,
							]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className='tetx-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
						Desenvolvedor web e Android com experiência em UI/UX.
						Crio interfaces e experiências do usuário atraentes,
						funcionais e fáceis de usar.
					</p>
					<div>
						<button
							className='
                                px-6 py-3 w-full sm:w-fit rounded-full 
                                mr-4 bg-gradient-to-br from-blue-500 
                                via-primary to-secondary hover:bg-gradient-to-br
                                hover:from-transparent hover:via-transparent
                                hover:to-transparent hover:border-[2px] hover:border-primary
                                text-white'
							onClick={handleClick}
						>
							Entre em Contato
						</button>
						<button
							onClick={handleClickCv}
							className='px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary to-secondary mr-4 bg-transparent hover:bg-transparent text-white  mt-3'
						>
							<span className='block bg-[#121212] hover:bg-primary rounded-full px-5 py-2'>
								Open CV
							</span>
						</button>
					</div>
				</div>

				<div className='col-span-5 place-self-center mt-10 lg:mt-0'>
					<div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative shadow-[0_0_50px_0_#03afe875]'>
						<Image
							src='/images/avatar.png'
							alt='Avatar'
							width={300}
							height={300}
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
