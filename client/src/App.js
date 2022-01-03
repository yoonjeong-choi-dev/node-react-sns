import React from 'react';
import styled from 'styled-components';
import ComponentTestContainertainer from './CompentTestContainer'
import { IMAGE_ENDPOINT } from './config.dev';
import UserInfo from './page/UserInfo'

const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  text-align: center;
  min-width: 900px;
  width: 60%;
`;

function App() {
  //console.log(process.env);

  return (
    <DefaultLayout>
      <Container>
        <ComponentTestContainertainer>
          <h1>Skeleton Code</h1>
          <img src={`${IMAGE_ENDPOINT}/react.png`} alt='react-image' />
        </ComponentTestContainertainer>
        <UserInfo/>
      </Container>
    </DefaultLayout>

  );
}

export default App;
