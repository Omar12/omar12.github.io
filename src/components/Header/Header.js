import React from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper, HeaderContainer, HeaderInner, SiteTitle, Navigation } from './styled';

const Header = ({ title, navigation }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderInner>
        <SiteTitle to="/">{title}</SiteTitle>
        {navigation && <Navigation>{navigation}</Navigation>}
      </HeaderInner>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  /** Title for the site */
  title: PropTypes.string,
  /** Array of navigation items */
  navigation: PropTypes.arrayOf(PropTypes.node),
};

Header.defaultProps = {
  title     : null,
  navigation: null,
};

export { Header };
