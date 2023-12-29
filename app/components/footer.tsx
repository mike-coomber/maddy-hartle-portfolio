import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  padding: 16px 0 16px 0;
  border-top: 1px solid black;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const Col = styled.div`
  flex: 1;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;

  :hover {
    text-decoration: underline;
  }
`;

export default function Footer({ color }: { color?: string }) {
  return (
    <Wrapper style={{ backgroundColor: color }}>
      <Col>
        <Link href={"https://www.instagram.com/a.blether/"}>Instagram</Link>
      </Col>
      <Col>
        <Link href={"https://www.linkedin.com/in/maddyhartle/"}>LinkedIn</Link>
      </Col>
    </Wrapper>
  );
}
