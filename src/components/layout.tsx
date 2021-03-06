/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';
import {PorscheDesignSystemProvider} from '@porsche-design-system/components-react';

const Layout = ({ children }): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <PorscheDesignSystemProvider>
      <div className="pageLayout">
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </div>
    </PorscheDesignSystemProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
