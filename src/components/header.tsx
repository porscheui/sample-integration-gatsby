import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"
import { PHeadline, PGridItem, PGrid, PDivider, PLinkPure } from "@porsche-design-system/components-react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginLeft: `10%`,
      marginRight: `10%`,
    }}
  >
    <div>
      <PGrid>
        <PGridItem size={12}>
          <PHeadline align={"center"}>{siteTitle}</PHeadline>
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className={"divider"}/>
        </PGridItem>
        <PGridItem size={12}>
          <Link to="/collectionPage" className={"removeLinkStyle"}>
            {/*To call props of PLinkPure use the spread operator*/}
            <PLinkPure {...{ icon: "globe" }}>Components Collection</PLinkPure>
          </Link>
          <Link to="/formsPage" className={"removeLinkStyle"}>
            <PLinkPure {...{ icon: "document" }}>Forms</PLinkPure>
          </Link>
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className={"divider"}/>
        </PGridItem>
      </PGrid>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
