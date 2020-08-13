import { Link } from 'gatsby';
import * as PropTypes from 'prop-types';
import React from 'react';
import { PHeadline, PGridItem, PGrid, PDivider, PLinkPure } from '@porsche-design-system/components-react';
import SEO from './seo';

const Header = ({ siteTitle }): JSX.Element => (
  <>
    <SEO title={siteTitle} />
    <PGrid>
      <PGridItem size={12}>
        <PHeadline align="center" variant="headline-2">
          {siteTitle}
        </PHeadline>
      </PGridItem>
      <PGridItem size={12}>
        <PDivider className="divider" />
      </PGridItem>
      <PGridItem size={12}>
        <Link to="/collection" className="removeLinkStyle">
          <PLinkPure>Components Collection</PLinkPure>
        </Link>
        <Link to="/forms" className="removeLinkStyle">
          <PLinkPure>Forms</PLinkPure>
        </Link>
        <Link to="/utilities" className="removeLinkStyle">
          <PLinkPure>Utilities</PLinkPure>
        </Link>
        <Link to="/phn-header" className="removeLinkStyle">
          <PLinkPure>Phn Header</PLinkPure>
        </Link>
      </PGridItem>
      <PGridItem size={12}>
        <PDivider className="divider" />
      </PGridItem>
    </PGrid>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
