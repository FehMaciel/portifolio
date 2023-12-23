"use client"
import React from "react"
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"
import emailJs from "@emailjs/browser"

const EmailSection = () => {
	const [name, setName] = React.useState("")
	const [email, setEmail] = React.useState("")
	const [subject, setSubject] = React.useState("")
	const [message, setMessage] = React.useState("")
	const [isSnackbarVisible, setSnackbarVisible] = React.useState(false)
	const [progress, setProgress] = React.useState(0)

	function sendEmail(e) {
		e.preventDefault()
		// alert("Send email")
		console.log(name, email, subject, message)

		const tempalteParams = {
			from_name: name,
			message: message,
			email: email,
			subject: subject,
		}
		if (name === "" || email === "" || subject === "" || message === "") {
			alert("Preencha todos os campos")
			return
		}

		emailJs
			.send(
				"service_g6j8j6x",
				"template_3pin3jj",
				tempalteParams,
				"Ly7nhx7dxK7enxf-m"
			)
			.then(
				(response) => {
					// alert("Email sent!")
					console.log("Email Enviado", response.status, response.text)
					setEmail("")
					setMessage("")
					setName("")
					setSubject("")
					exibirSnack()
				},
				(err) => {
					alert("Email not sent!")
					console.log("Email not sent", err)
				}
			)
	}

	function exibirSnack() {
		setSnackbarVisible(true)
		;-(
			// Inicia um temporizador de 5 segundos para ocultar a snackbar
			setTimeout(() => {
				setSnackbarVisible(false)
			}, 5000)
		)

		// Inicia um temporizador para a barra de progresso
		let progress = 0
		const interval = 100 // Intervalo de atualização da barra
		const totalDuration = 5000 // 5 segundos

		const progressTimer = setInterval(() => {
			progress += (interval / totalDuration) * 100
			setProgress(progress)

			if (progress >= 100) {
				clearInterval(progressTimer)
			}
		}, interval)
	}

	return (
		<section
			id='contato'
			className='grid md:grid-cols-2 my-2 md:my-12 py-24 gap-4 relative'
		>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 transform -translate-x-1/2 -translate-y-1/2'></div>
			<div className='z-10'>
				<h4 className='text-xl font-bold text-white my-2'>
					{" "}
					Precisando de Desenvolvimento Web, uma arte, ou uma
					automação ?
				</h4>
				<p className='text-[#ADB7BE] mb-4 max-w-md '>
					{""}
					Como desenvolvedor web, tenho expertise na criação de
					websites e sistemas. Qualquer orçamento enviado abaixo será
					avaliado por mim pessoalmente. Isso permitirá que você
					receba uma proposta sob medida que atenda às suas
					necessidades.
				</p>
				<h4 className='text-xl font-bold text-white my-2'>
					Como Solicitar um Orçamento?
				</h4>
				<h6>Precisa de um Website ou Sistema?</h6>
				<p className='text-[#ADB7BE] mb-4 max-w-md '>
					Descreva detalhadamente o que você deseja desenvolver. Se
					for um website, mencione o tipo de site (por exemplo,
					institucional, e-commerce, blog) e as funcionalidades que
					você precisa.
				</p>
				<h6>
					Quais funcionalidades deseja para o seu site ou sistema?
				</h6>

				<p>
					Descreva a visão do seu projeto e quais funcionalidades você
					imagina serem necessárias. Por exemplo, você pode dizer:
					“Quero um site para minha empresa que inclua um catálogo de
					produtos, formulário de contato e integração com redes
					sociais”.
				</p>
				<div className='socials flex flex-row gap-2'>
					<Link href='https://github.com/fehMaciel'>
						<Image
							src={GithubIcon}
							alt='github'
							width={50}
							height={50}
							className='cursor-pointer '
						></Image>
					</Link>
					<Link href='https://www.linkedin.com/in/felippe-maciel'>
						<Image
							src={LinkedinIcon}
							alt='linkedin'
							width={50}
							height={50}
							className='cursor-pointer '
						></Image>
					</Link>
				</div>
			</div>
			<div className='z-10'>
				<form className='flex flex-col z-10' onSubmit={sendEmail}>
					<div className='mb-6'>
						<label
							htmlFor='name'
							type='name'
							className='text-white block mb-2 text-sm font-medium'
						>
							Your name
						</label>
						<input
							type='text'
							id='name'
							className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
							placeholder='name'
							onChange={(e) => setName(e.target.value)}
							value={name}
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='email'
							type='email'
							className='text-white block mb-2 text-sm font-medium'
						>
							Your email
						</label>
						<input
							type='email'
							id='email'
							className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
							placeholder='email@example.com'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='subject'
							className='text-white block mb-2 text-sm font-medium'
						>
							Subject
						</label>
						<input
							type='text'
							id='subject'
							className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
							placeholder='just saying hi'
							onChange={(e) => setSubject(e.target.value)}
							value={subject}
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='message'
							className='text-white block mb-2 text-sm font-medium'
						>
							Your message
						</label>
						<textarea
							id='message'
							rows='4'
							onChange={(e) => setMessage(e.target.value)}
							className='block p-2.5 w-full text-sm text-white bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500'
							placeholder='Leave a comment...'
							value={message}
						></textarea>
					</div>
					<button
						type='submit'
						className='text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
						style={{
							boxShadow: "0px 0px 10px rgba(168, 85, 247, 0.3)",
						}}
						onClick={sendEmail}
					>
						Send Message
					</button>

					{isSnackbarVisible && (
						<div className='bg-[#22c55e17] text-white px-4 py-2 fixed bottom-4 right-4 rounded shadow'>
							{/* Barra de progresso condicional */}
							{progress > 0 && progress < 100 && (
								<div
									className='bg-[#22c55e] h-10 absolute top-0 left-0'
									style={{width: `${progress}%`}}
								></div>
							)}
							<span className='relative'>
								Enviado com sucesso!
							</span>
						</div>
					)}
				</form>
			</div>
		</section>
	)
}

export default EmailSection
