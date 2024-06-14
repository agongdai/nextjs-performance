'use client';

import React from 'react';
import { Light as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import less from 'react-syntax-highlighter/dist/esm/languages/hljs/less';
import nginx from 'react-syntax-highlighter/dist/esm/languages/hljs/nginx';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import shadesOfPurple from 'react-syntax-highlighter/dist/esm/styles/hljs/shades-of-purple';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('less', less);
SyntaxHighlighter.registerLanguage('nginx', nginx);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('xml', xml);

type Props = Omit<SyntaxHighlighterProps, 'children'> & {
  snippet: string;
};

export default function JsesSyntaxHighlighter({ snippet, ...props }: Props) {
  const multiline = snippet.indexOf('\n') > -1;
  return (
    <div className='relative'>
      <SyntaxHighlighter
        language={(props.language || 'javascript').toLowerCase()}
        style={shadesOfPurple}
        showLineNumbers={multiline}
        wrapLines
      >
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
}
