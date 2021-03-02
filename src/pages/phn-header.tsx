import React from 'react';
import Layout from '../components/layout';
import { PButton, PLinkPure, PIcon } from '@porsche-design-system/components-react';
import { applyPolyfills, defineCustomElements as definePorscheNavigation } from '@porschehn/navigation/loader';

applyPolyfills().then(() => {
  if (typeof window !== 'undefined') {
    definePorscheNavigation(window);
  }
});

const PhnHeaderPage = (): JSX.Element => (
  <Layout>
    <phn-header env="preview" style={{ position: 'absolute', left: 0, right: 0 }} />

    <div style={{ paddingTop: 150 }}>
      <div>
        <PButton>Some PButton</PButton>
      </div>
      <div>
        <PLinkPure>Some PLinkPure</PLinkPure>
      </div>
      <div>
        <PIcon name="configurate" />
        <PIcon name="compare" />
        <PIcon name="search" />
      </div>
    </div>
  </Layout>
);

export default PhnHeaderPage;
