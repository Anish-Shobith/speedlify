module.exports = {
	name: "https://learn-inn.vercel.app/", // optional, falls back to object key
	description: "Official website of Learn-Inn",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours,
        freshChrome: "site",
	},
	urls: [
		"https://www.learn-inn.vercel.app/",
		"https://www.learn-inn.vercel.app/mental-health/anxiety",
		"https://www.learn-inn.vercel.app/mental-health/depression",
		"https://www.learn-inn.vercel.app/mental-health/stress",
        "https://www.learn-inn.vercel.app/essentials/creative-thinking",
        "https://www.learn-inn.vercel.app/essentials/collab"
	]
};