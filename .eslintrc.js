
module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  },
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'jsx': true,
    'useJSXTextNode': true,
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import'
  ],
  'rules': {
    'no-console': 'warn',
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-in-parens': [
      'error',
      'always'
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'indent': [
      'error',
      2
    ],
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: {
            after: false
          },
          for: {
            after: false
          },
          while: {
            after: false
          }
        }
      }
    ],
    'no-useless-concat': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    'react/jsx-filename-extension': [ 'warn', { extensions: [ '.tsx', '.ts' ] } ],
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/named': 'error',
    'no-param-reassign': 'error',
    'no-use-before-define': 'warn',
    'class-methods-use-this': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        name: 'react-redux',
        importNames: [
          'useSelector',
          'useDispatch'
        ],
        message: 'Use typed hooks `useAppDispatch` and `useAppSelector` from redux store component instead.'
      }
    ]
  },
  ignorePatterns: [
    'src/**/*.css',
    'src/**/*.scss',
    'src/**/*.mdx'
  ]
}
  