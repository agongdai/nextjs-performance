'use client';

import React from 'react';

import JsesSyntaxHighlighter from './JsesSyntaxHighlighter';

export default function ClientWrapper() {
  return (
    <JsesSyntaxHighlighter
      language='javascript'
      snippet={`console.log("react-syntax-highlighter use client");`}
    />
  );
}
