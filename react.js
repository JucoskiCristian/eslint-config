module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		  },
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'prettier/prettier': ["error", {
			'printWidth': 80,
			'tabWidth': 2,
			'singleQuote': true,
			'trailingComma': 'all',
			'arrowParens': 'always',
			'semi': false,
			'endOfLine': 'auto',
		  }],
		  'react/react-in-jsx-scope': 'off',
		  'react/prop-types': 'off',
	},

	'settings': {
		'react': {
		  'version': 'detect',
		},
		'import/parsers': {
		  [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
		},
	  }
}
