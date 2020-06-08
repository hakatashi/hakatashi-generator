module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@hakatashi',
	],
	plugins: [
		'prettier',
	],
	// add your custom rules here
	rules: {
		'import/no-unresolved': 'off',
	},
};
