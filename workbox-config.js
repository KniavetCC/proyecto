module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,jpg,png,gif,js,json,properties,xml,txt}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};