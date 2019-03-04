import styled from 'styled-components';
import { darken } from 'polished';

import { COLOR } from '../../constants';

export const HeaderWrapper = styled.div`
  background-color: ${COLOR.THEME_COLOR};
  border-bottom   : 0.2rem solid ${darken(0.2, COLOR.THEME_COLOR)};
`;

export const HeaderContainer = styled.div`
  margin        : 0 auto;
  max-width     : 960px;
  padding       : .75rem;
  padding-bottom: .5rem;
`

export const HeaderInner = styled.div`
  display  : flex;
  flex-flow: nowrap row;
`;

export const SiteTitle = styled.h1`
  margin   : 0;
  color    : ${COLOR.WHITE};
  font-size: 1.4rem;
`;

export const Navigation = styled.div`
  margin-left: auto;
  display    : flex;
  flex-flow  : nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color      : ${COLOR.WHITE};
    cursor     : pointer;

    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.WHITE)};
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`;
