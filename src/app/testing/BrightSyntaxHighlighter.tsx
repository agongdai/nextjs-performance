import React from 'react';
import { Code } from 'bright';

type Props = {
  snippet: string;
  lang: string;
};

Code.theme = 'monokai';

export default function BrightSyntaxHighlighter({ snippet, ...props }: Props) {
  const multiline = snippet.indexOf('\n') > -1;
  return (
    <div className='relative'>
      <Code
        lineNumbers={multiline}
        lang={(props.lang || 'javascript').toLowerCase()}
      >
        {snippet}
      </Code>
    </div>
  );
}
