import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiSearch, FiExternalLink } from 'react-icons/fi';
import { palette } from 'lib/styles/palette';
import { NavLink } from 'react-router-dom';

export default function SideNavbar() {
  const [isToggled, setToggle] = useState(false);

  const toggleSideMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Navbar>
      <ToggleButton onClick={toggleSideMenu}>
        <FiMenu />
      </ToggleButton>
      {!isToggled && (
        <Menu>
          <NavLink to="/">
            <h1>Watchlists</h1>
          </NavLink>
          <nav>
            <ul>
              <li>
                <Move to="search">
                  <FiSearch /> Search
                </Move>
              </li>
              <li>
                <Move to="like">
                  <FiExternalLink /> Like{' '}
                </Move>
              </li>
            </ul>
          </nav>
        </Menu>
      )}
    </Navbar>
  );
}

const Navbar = styled.aside`
  display: flex;
  flex-direction: column;
  background: ${palette.backgroundColorSide};
  height: auto;
`;

const ToggleButton = styled.button`
  color: ${palette.hilightColor};
  font-size: 1.5rem;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
`;

const Menu = styled.section`
  padding: 40px 32px;
  position: sticky;
  top: 30px;
  display: ${({ isToggled }) => (isToggled ? 'none' : 'block')};

  & li {
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    background: ${palette.tabColorSide};
    margin-bottom: 20px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & h1 {
    color: ${palette.hilightColor};
    font-size: 2rem;
    margin-bottom: 20px;
  }
  & nav,
  & a {
    color: ${palette.textColorSide};
  }
  & hr {
    margin-bottom: 20px;
  }
`;

const Move = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
