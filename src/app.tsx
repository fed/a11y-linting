import React from 'react';
import { styled } from '@compiled/react';
import { Lozenge } from './lozenge';

const Button = styled.span`
  border-radius: 3px;
  background: palevioletred;
  color: white;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 200px;
  font-family: sans-serif;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  display: block;
`;

export function App() {
  return (
    <Container>
      <Lozenge primary>Hello!</Lozenge>
      <Lozenge>Hello!</Lozenge>
      <Button onClick={() => {}}>Normal Button</Button>
      <Image src="https://github.com/fed.png" />
    </Container>
  );
}
