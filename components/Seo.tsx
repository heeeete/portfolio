import { Head } from "next/document";

export default function Seo() {
	const schema = {
		"@context": "http://schema.org",
		"@type": "Person",
		name: "박희태",
		givenName: "희태",
		familyName: "박",
		email: "mkoiui98@gmail.com",
		telephone: "+821029949783",
		jobTitle: "Front-end Developer",
		gender: "Male",
		birthDate: "1990-01-01",
		nationality: {
			"@type": "Country",
			name: "South Korea",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "서울",
			addressCountry: "KR",
		},
		url: "https://heeeete.github.io/portfolio/",
		memberOf: {
			"@type": "Organization",
			name: "개발자 커뮤니티",
		},
		alumniOf: {
			"@type": "EducationalOrganization",
			name: "42서울",
		},
		worksFor: {
			"@type": "Organization",
			name: "Freelance",
		},
		hasOccupation: {
			"@type": "Occupation",
			name: "웹 개발자",
		},
		knowsAbout: ["JavaScript", "React", "React Native", "Next.js", "WebSocket"],
		knowsLanguage: ["Korean", "English"],
		hasCredential: {
			"@type": "EducationalOccupationalCredential",
			credentialCategory: "Professional",
			competencyRequired: ["JavaScript", "React"],
		},
	};

	return (
		<Head>
			<title>{"박희태 포트폴리오"}</title>
			<link
				rel="shortcut icon"
				type="image/x-icon"
				href="https://heeeete.github.io/portfolio/favicon.ico"
			></link>
			<meta name="title" content="박희태 포트폴리오" />
			<meta
				name="description"
				content="Frontend Developer 박희태의 포트폴리오입니다."
			/>
			<meta
				name="keywords"
				content="박희태, huipark, PARK HUITAE, 프론트엔드 개발자, Frontend Developer, JavaScript, React, Next.js, 웹 개발자, 포트폴리오"
			/>
			<meta name="author" content="박희태" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="박희태 포트폴리오" />
			<meta
				property="og:description"
				content="Frontend Developer 박희태의 포트폴리오입니다."
			/>
			<meta property="og:url" content="https://heeeete.github.io/portfolio/" />
			<meta
				property="og:image"
				content="https://heeeete.github.io/portfolio/me.png"
			/>
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="박희태 포트폴리오" />
			<meta
				name="twitter:description"
				content="Frontend Developer 박희태의 포트폴리오입니다."
			/>
			<meta name="twitter:url" content="https://heeeete.github.io/portfolio/" />
			<meta
				name="twitter:image"
				content="https://heeeete.github.io/portfolio/me.png"
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
		</Head>
	);
}
