import styled from "styled-components";
import img from "../assets/logo_kinevita_negro.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarContainer = styled.header`
  width: 100%;
  height: 70px;
  top: 0;
  position:sticky;
  z-index: 99;
  background-color: #ffff;
`;

const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 1rem;
`;

const StyledImg = styled.img`
  width: 130px;
`;

const Menu = styled.ul`
  height: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media screen and (max-width: 968px) {
    width: 100%;
    height: 80vh;
    position: absolute;
    top: 70px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #ffff;
  }
`;

const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  @media screen and (max-width: 968px) {
    width: 100%;
    height: 80px;
  }
`;

const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    transition: 0.4s ease-in;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 968px) {
    display: flex;
    font-size: 2rem;
    color: black;
    padding-right: 1rem;
  }
`;

const StyledBarsIcon = styled(FaBars)`
  font-size: 1.5rem;
`;

const StyledTimesIcon = styled(FaTimes)`
  font-size: 1.5rem;
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <LogoContainer>
            <Link to="/">
              <StyledImg onClick={() => setClick(false)} src={img} />
            </Link>
          </LogoContainer>
          <MobileIcon onClick={() => setClick(!click)}>
            {click ? <StyledTimesIcon /> : <StyledBarsIcon />}
          </MobileIcon>
          <Menu click={+click}>
            <MenuItem>
              <MenuItemLink to="/" onClick={() => setClick(!click)}>
                Home
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/servicios" onClick={() => setClick(!click)}>
                Servicios
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/tarifas" onClick={() => setClick(!click)}>
                Tarifas
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/contacto" onClick={() => setClick(!click)}>
                Contacto
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export { Navbar };
