import React from 'react';
import {
  Header,
  Aside,
  ContentContainer,
  MainContainer,
  Footer,
} from '../export';

export function ShopPage() {
  return (
    <>
      <Header />
      <main style={{ marginBottom: '50px' }}>
        <MainContainer>
          <Aside />
          <ContentContainer />
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}
