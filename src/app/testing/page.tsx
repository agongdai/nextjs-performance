import React from 'react';

import BrightSyntaxHighlighter from './BrightSyntaxHighlighter';

export default function ReactSyntaxHighlighterPage() {
  return <BrightSyntaxHighlighter lang='js' snippet={`console.log('bright syntax highlighter');`} />;
}
