module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'color-hex-case': 'lower',
    'comment-empty-line-before': 'never',
    'font-weight-notation': null,
    'function-comma-newline-after': null,
    'function-parentheses-newline-inside': null,
    'function-url-quotes': null,
    'string-quotes': 'single',
    indentation: 2,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'selector-type-no-unknown': null,
    'no-missing-end-of-source-newline': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-element-no-unknown': [
      {
        ignorePseudoElements: ['ng-deep'],
      },
      true,
    ],
    'declaration-colon-newline-after': null,
    'declaration-block-trailing-semicolon': null,
  },
};
