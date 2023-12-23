import React, {useState} from "react"
import {CodeBracketIcon, EyeIcon} from "@heroicons/react/24/solid"
import Link from "next/link"

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<div className='relative overflow-hidden card-project'>
			<div
				className='h-52 md:h-72 rounded-t-xl relative group overflow-hidden'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div
					className='image-project absolute top-0 left-0 w-full h-full rounded-t-xl'
					style={{
						background: `url(${imgUrl})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: isHovered ? "bottom" : "top",
						transition: "background-position 3s linear",
					}}
				></div>
			</div>
			<div className='text-white  bg-[#181818] py-6 px-4'>
				<h5 className='text-xl font-semibold mb-2'>{title}</h5>
				<p className='text-[#ADB7BE]'>{description}</p>
			</div>
			<div className='w-100 group-links'>
				<div className='flex items-center justify-evenly'>
					{gitUrl !== "" && (
						<Link href={gitUrl} target='_blank' className=''>
							<CodeBracketIcon className='h-10 w-10 m-2 text-[#fff]'></CodeBracketIcon>
						</Link>
					)}
					{previewUrl !== "" && (
						<Link href={previewUrl} target='_blank' className=''>
							<EyeIcon className='h-10 w-10 m-2 text-[#fff]'></EyeIcon>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
