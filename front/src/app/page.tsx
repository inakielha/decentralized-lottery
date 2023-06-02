'use client';

import Header from "./components/Header";
import {MoralisProvider} from "react-moralis";

export default function Home() {
  return (
    <main>
      <MoralisProvider initializeOnMount={false}>
        <Header />
      </MoralisProvider>
    </main>
  );
}
