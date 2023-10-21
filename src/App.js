import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;


export default function App() {
  return (
    <Container>
      <Heading>Hello World</Heading>
      <UploadButton>Upload to S3</UploadButton>
    </Container>
  );
}
