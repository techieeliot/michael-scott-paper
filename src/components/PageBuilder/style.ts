import styled from "styled-components";
import { Layout } from "antd";

const { Header, Sider } = Layout;

export const BlackHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 5vh;
`;
export const LeftSideBar = styled(Sider)`
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;
  top: 5vh;
  left: 0;
  bottom: 0;
`;

export const RightSideBar = styled(Sider)`
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;
  top: 5vh;
  right: 0;
  bottom: 0;
`;
