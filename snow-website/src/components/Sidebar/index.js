import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            O nas
          </SidebarLink>
          <SidebarLink to="Koncerty" onClick={toggle}>
            Koncerty
          </SidebarLink>
          <SidebarLink to="Galeria" onClick={toggle}>
            Galeria
          </SidebarLink>
          <SidebarLink to="Kontakt" onClick={toggle}>
            Kontakt
          </SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
