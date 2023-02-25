import React from 'react';

import styled from 'styled-components';

export const Quote = ({ by, source, children }) => {
  return (

    <Wrapper>
      <QuoteContent>
        {children}
      </QuoteContent>
      <figcaption>
        <Author>
          <SourceLink href={source}>
            {by}
          </SourceLink>
        </Author>
      </figcaption>
    </Wrapper>

  );
};

const Wrapper = styled.div`
position:absolute;
top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
margin:auto;
max-width:350px;
height: 100px;

`;
const QuoteContent = styled.div`
  margin: 0;
  background: hsl(0deg 0% 90%);
  padding: 16px 20px;
  border-radius: 8px;
  font-style: italic;

  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }
`;

const Author = styled.div`
 font-style: italic;
  display: block;
  text-align: right;
  margin-top: 8px;
`;

const SourceLink = styled.a`
  text-decoration: none;
  color: hsl(0deg 0% 35%);

  &::before {
    content: '—';
  }
`;

