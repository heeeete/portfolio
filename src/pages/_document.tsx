import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
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
		<Html lang="en">
			<Head />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<meta name="description" content="frontEnd portfolio" />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
