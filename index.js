module.exports = {
	extends: 'eslint:recommended',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 8,
		ecmaFeatures: {
			impliedStrict: true,
			experimentalObjectRestSpread: true,
		},
		sourceType: 'module',
	},
	rules: {
		'block-scoped-var': 'error',
		'comma-dangle': [
			'warn',
			'always-multiline'
		],
		'consistent-return': 'error',
		'curly': [
			'warn',
			'all'
		],
		'dot-location': [
			'warn',
			'property'
		],
		'eqeqeq': [
			'error',
			'smart'
		],
		'guard-for-in': 'warn',
		'indent': [
			'warn',
			'tab'
		],
		'no-alert': 'off',
		'no-case-declarations': 'error',
		'no-console': 'off',
		'no-debugger': 'warn',
		'no-else-return': 'error',
		'no-empty-function': 'warn',
		'no-extra-bind': 'error',
		'no-fallthrough': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'warn',
		'no-multi-str': 'error',
		'no-native-reassign': 'error',
		'no-new': 'warn',
		'no-param-reassign': 'error',
		'no-redeclare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unused-vars': 'error',
		'no-undef': 'error',
		'no-use-before-define': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-warning-comments': 'warn',
		'no-with': 'error',
		'radix': 'error',
		'semi': [
			'warn',
			'always'
		],
		'yoda': 'error',
	},
};
