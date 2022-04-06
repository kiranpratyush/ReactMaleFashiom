import React from 'react';
import { Header } from '../export';
import { Aside } from '../export';
import { ContentContainer } from '../export';
import { MainContainer } from '../export';
import { Footer } from '../export';
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
