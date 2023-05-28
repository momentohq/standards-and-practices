import * as markdownlint from 'markdownlint';

export const verifySdkHasExampleInclude: markdownlint.Rule = {
  names: ['expected-sdk-example-include'],
  description: 'SDK must have at least one "include" to import example code',
  tags: ['momento-oss'],
  information: new URL(
    'https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator'
  ),
  function: (params, onError) => {
    let foundInclude = false;
    let lastLineNumber = 0;
    for (const token of params.tokens) {
      if (['inline', 'fence'].includes(token.type)) {
        lastLineNumber = token.lineNumber;
        if (token.content.includes('{% include')) {
          foundInclude = true;
        }
      }
    }
    if (!foundInclude) {
      onError({
        lineNumber: lastLineNumber,
        detail:
          "No 'include' found: SDK templates must contain at least one {% include %} statement to inject example code",
      });
    }

    return;
  },
};
