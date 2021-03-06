import React from 'react';
import { PGrid, PGridItem, PText } from '@porsche-design-system/components-react';
import Layout from '../components/layout';

const IndexPage = (): JSX.Element => (
  <Layout>
    <PGrid>
      <PGridItem size={12}>
        <PText>
          Welcome to our Porsche Design System example site with Gatsby. Click one of the Links above to see different
          examples of all Components we provide
        </PText>
      </PGridItem>
    </PGrid>
  </Layout>
);

export default IndexPage;
