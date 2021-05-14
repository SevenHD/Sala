import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  top: 0;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  font-family: "Trebuchet MS";
  font-size: 12px;
  height: 100px;
  width: 200px;
`;

export const SidebarLink = styled(Link)`
  background: #0e3c5f;
  height: 20px;
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  text-decoration: none;
  transition: 300ms;
  &:hover {
    background: #539629;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  background: #0e3c5f;
  height: 20px;
  padding: 8px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 12px;
  transition: 300ms;
  &:hover {
    background: #539629;
    cursor: pointer;
  }
`;
