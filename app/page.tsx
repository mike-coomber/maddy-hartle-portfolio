"use client";
import { getAllProjects } from "@/api/api";
import { ProjectModel } from "@/data/project-model";
import React, { useState, ReactElement, useContext } from "react";
import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import { ProjectsContext } from "./components/loader";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const LinkContainer = styled.div`
  bottom: 40px;
  width: 100%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
`;

const Divider = styled.div`
  margin-left: 8px;
  font-weight: 100;
  font-size: 63px;
`;

const PictureContainer = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.5s;
`;

const PictureWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  mix-blend-mode: multiply;
`;

export default function Home() {
  const [currentPic, setCurrentPic] = useState(0);
  const projects = useContext(ProjectsContext);

  const imgElements: ReactElement[] = [];
  const linkElements: ReactElement[] = [];

  projects.forEach((item, i) => {
    imgElements.push(
      <PictureContainer visible={currentPic === i + 1}>
        <PictureWrapper src={item.image?.url} />
      </PictureContainer>
    );
    linkElements.push(
      <Link
        key={"Link" + i}
        index={i + 1}
        setCurrentPic={setCurrentPic}
        url={item.id}
        projectName={item.name}
      />
    );
    if (i < projects.length - 1) {
      linkElements.push(<Divider key={"divider-" + item.name}>/</Divider>);
    }
  });

  return (
    <>
      <Header />
      <div style={{ paddingRight: 20, paddingLeft: 20 }}>
        <Wrapper>
          {imgElements}
          <LinkContainer>{linkElements}</LinkContainer>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}

const StyledLink = styled.a`
  cursor: pointer;
  color: black;
  font-style: italic;
  white-space: nowrap;
  text-decoration: none;
  font-size: 46px;
  margin-left: -4px;
  letter-spacing: -2px;

  :hover {
    text-decoration: underline;
  }
`;

interface LinkProps {
  setCurrentPic: (index: number) => void;
  index: number;
  projectName: string;
  url: string;
}

function Link({ setCurrentPic, index, projectName, url }: LinkProps) {
  return (
    <StyledLink
      href={`/projects/${url}`}
      onMouseOver={() => setCurrentPic(index)}
      onMouseLeave={() => setCurrentPic(0)}
    >
      {projectName}
    </StyledLink>
  );
}
