"use client"
import React, {useState} from "react"
import ProjectCard from "./ProjectCard"
import {ProjectTag} from "./ProjectTag"

const projectsData = [
	{
		id: 1,
		title: "React Portfolio Website",
		description: "Project 1 description",
		image: "/images/projects/project-01.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "Ecommerce Website",
		description: "Website ecommerce Arquiteto Bruno Maciel",
		image: "/images/projects/project-02.png",
		tag: ["All", "Web"],
		gitUrl: "",
		previewUrl: "https://arqbrunomaciel.com.br/home/",
	},
]

const ProjectsSection = () => {
	const [tag, setTag] = useState("All")
	const handleTagChange = (newTag) => {
		setTag(newTag)
	}
	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	)
	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
				My Projects
			</h2>
			<div className='text-white flex sm:flex-row  justify-center items-center gap-2 py-6 flex-col'>
				<ProjectTag
					onClick={handleTagChange}
					name='All'
					isSelected={tag === "All"}
				></ProjectTag>

				{/* <ProjectTag 
			onClick={handleTagChange} 
			name="Web" 
			isSelected={tag === "Web"} 
			></ProjectTag>

			<ProjectTag 
			onClick={handleTagChange} 
			name="Mobile" 
			isSelected={tag === "Mobile"} 
			></ProjectTag>

			<ProjectTag 
			onClick={handleTagChange} 
			name="Power BI" 
			isSelected={tag === "Power BI"} 
			></ProjectTag>

			<ProjectTag 
			onClick={handleTagChange} 
			name="AI" 
			isSelected={tag === "AI"} 
			></ProjectTag> */}
			</div>
			<div className='grid md:grid-cols-3 gap-8 md:gap-12'>
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						tags={project.tag}
						gitUrl={project.gitUrl || ""}
						previewUrl={project.previewUrl || ""}
					/>
				))}
			</div>
		</section>
	)
}

export default ProjectsSection
