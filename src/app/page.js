import Image from "next/image"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<div className='key-words fixed opacity-0'>
				<h1>Felippe Maciel Developer</h1>
				<h1>Felippe Maciel</h1>
				<h1>Web Developer</h1>
				<h1>Android Developer</h1>
				<h1>UI Developer</h1>
				<h1>UX Developer</h1>
				<h1>Full Stack Developer</h1>
				<h1>Flutter Developer</h1>
				<h1>Python Developer</h1>
				<h1>JavaScript Developer</h1>
				<h1>React Developer</h1>
				<h1>Node Developer</h1>
				<h1>PHP Developer</h1>
				<h1>C# Developer</h1>
				<h1>PHP Developer</h1>
				<h1>Criação de site</h1>
				<h1>Criação de aplicativos</h1>
				<h1>Criar Site</h1>
				<h1>Criar Aplicativo</h1>
			</div>
			<Navbar />
			<div className='container mx-auto w-[100%] bg-[#121212] px-10 mt-[150px] relative z-10'>
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	)
}
