import * as markdownlint from 'markdownlint';
import {arrayEquals} from '../collections';
import {MarkdownItToken, RuleOnError} from 'markdownlint';

const ossHeaderTag = 'ossHeader';
const ossFooterTag = 'ossFooter';

/**
 * This rule enforces that a Momento OSS README template must begin with our OSS header, via
 * a variable tag: {{ ossHeader }}, and end with or OSS footer, {{ ossFooter }}
 */
export const mustIncludeOssHeaders: markdownlint.Rule = {
  names: ['must-include-oss-headers'],
  description: 'Template must begin with OSS Header and end with OSS Footer',
  tags: ['momento-oss'],
  information: new URL(
    'https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator'
  ),
  function: (params, onError) => {
    const firstThreeTokens = params.tokens.slice(0, 3);
    verifyTokens(
      firstThreeTokens,
      ossHeaderTag,
      onError,
      'Expected template file to begin with',
      firstThreeTokens[0].lineNumber
    );

    const lastThreeTokens = params.tokens.slice(-3);
    verifyTokens(
      lastThreeTokens,
      ossFooterTag,
      onError,
      'Expected template file to end with',
      lastThreeTokens[0].lineNumber
    );
  },
};

function verifyTokens(
  tokens: Array<MarkdownItToken>,
  expectedTag: string,
  onError: RuleOnError,
  errorMessagePrefix: string,
  lineNumber: number
): void {
  if (tokens.length !== 3) {
    onError({
      lineNumber: lineNumber,
      detail: 'Template is possibly empty?',
    });
    return;
  }
  const tokenTypes = tokens.map(t => t.type);

  if (
    !arrayEquals(['paragraph_open', 'inline', 'paragraph_close'], tokenTypes)
  ) {
    console.error(`Found token types: ${JSON.stringify(tokenTypes)}`);
    onError({
      lineNumber: tokens[0].lineNumber,
      detail: `${errorMessagePrefix} {{ ${expectedTag} }}, on a line by itself.`,
    });
    return;
  }

  const inlineToken = tokens[1];
  if (inlineToken.content !== `{{ ${expectedTag} }}`) {
    console.error(`Template line: '${inlineToken.content}'`);
    onError({
      lineNumber: tokens[0].lineNumber,
      detail: `${errorMessagePrefix} {{ ${expectedTag} }}, on a line by itself.`,
    });
    return;
  }
}
