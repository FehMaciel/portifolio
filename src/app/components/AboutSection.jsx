"use client"
import React, {useTransition, useState} from "react"
import Image from "next/image"
import TabButton from "./TabButton"

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className='list-none pl-2 grid md:grid-cols-6 gap-4 sm:grid-cols-4 grid-cols-3'>
				<li>
					<img
						src='https://skillicons.dev/icons?i=html&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=css&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=javascript&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=wordpress&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=bootstrap&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=php&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=python&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=mysql&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=flutter&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=git&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=github&theme=light'
						alt=''
					/>
				</li>
				<li>
					<img
						src='https://skillicons.dev/icons?i=vscode&theme=light'
						alt=''
					/>
				</li>
			</ul>
		),
	},
	/* {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Estacio Santo André</li>
        <li> - Analise e Desenvolvimento de Sistemas</li>
        <li>SENAI SCS</li>
        <li> - Microcontrolador Arduino</li>
        <li>UDEMY</li>
        <li> - Desenvolvimento Web Completo</li>
        <li>UDEMY</li>
        <li> - Desenvolvimento Android IOS com Flutter</li>
      </ul>
    )
  }, */
]

const AboutSection = () => {
	const [tab, setTab] = useState("skills")
	const [isPending, startTransition] = useTransition()

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id)
		})
	}
	return (
		<section id='about' className='text-white'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/about.jpeg'
					alt='about'
					width={500}
					height={500}
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
					<h2 className='text-4xl font-bold text-white mb-4'>
						About Me
					</h2>
					<p className='text-base md:text-lg'>
						Sou um desenvolvedor web full stack com uma paixão por
						criar aplicações web interativas e responsivas. Tenho
						experiência em trabalhar com JavaScript, HTML, CSS,
						MySQL, PHP, Wordpress, Flutter e Python. Sou um aprendiz
						rápido e estou sempre em busca de expandir meu
						conhecimento e conjunto de habilidades. Sou colaborativo
						e estou ansioso para trabalhar em equipe na criação de
						aplicações extraordinárias.
					</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills
						</TabButton>
						{/* <TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							Education
						</TabButton> */}
						{/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              Certifications
            </TabButton> */}
					</div>
					<div className='mt-8'>
						{TAB_DATA.find((data) => data.id === tab)?.content}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
