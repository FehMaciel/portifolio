import Script from "next/script"

export const metadata = {
	title: "Felippe Maciel Developer",
	description: "Felippe Maciel Developer Portfolio Site",
}

function MyApp({Component, pageProps}) {
	return (
		<>
			<head>
				<Script
					strategy='afterInteractive'
					src='https://www.googletagmanager.com/gtag/js?id=G-WC7N8PZJ1G'
				/>
				<Script strategy='afterInteractive'>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-WC7N8PZJ1G');
					`}
				</Script>
			</head>

			<html lang='pt-br'>
				<body>
					<Component {...pageProps} />
				</body>
			</html>
		</>
	)
}

export default MyApp
