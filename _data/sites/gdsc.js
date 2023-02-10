module.exports = {
	name: "gdsc-website-v2.vercel.app", // optional, falls back to object key
	description: "Official website of GDSC SJEC",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours,
        freshChrome: "site",
	},
	urls: [
		"https://www.gdsc-website-v2.vercel.app/",
		"https://www.gdsc-website-v2.vercel.app/events",
		"https://www.gdsc-website-v2.vercel.app/projects",
		"https://www.gdsc-website-v2.vercel.app/team",
        "https://www.gdsc-website-v2.vercel.app/faq"
	]
};