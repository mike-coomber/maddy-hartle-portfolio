"use client";
import React, { useState, useEffect, ReactElement, useContext } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { getProjectById } from "@/api/api";
import { ProjectInterface } from "@/api/interfaces";

const Wrapper = styled.div`
  border-left: 8px solid #000000;
  position: relative;
  z-index: 0;
`;

const Header = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  padding-top: 16px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  text-align: left;
  height: fit-content;
`;

const HomeLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

const ContentWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  z-index: 1;
  position: relative;
`;

const PictureWrapper = styled.img`
  display: flex;
  flex: 2;
  object-position: center;
  mix-blend-mode: multiply;
  width: 100%;
  max-height: 757px;
  object-fit: contain;
`;

const Footer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 18px;
  min-height: 70px;
  max-height: 70px;
  flex-wrap: wrap;
  border-top: 1px solid #000000;
  padding: 18px 80px 18px 30px;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.div`
  display: flex;
  flex: 1;
  max-height: 66px;
  justify-content: flex-end;
`;

const Pagination = styled.div`
  width: fit-content;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const PaginationItem = styled.div<{ selected: boolean }>`
  width: fit-content;
  line-height: 46px;
  font-weight: 100;
  font-size: 46px;
  margin-right: 8px;
  cursor: pointer;
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};

  :hover {
    text-decoration: underline;
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export default async function Page({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<ProjectInterface>();
  const [currentPageIndex, setCurrentPage] = useState(0);
  const [imageElements, setImageElements] = useState<ReactElement[]>([]);
  const [imagesVisisble, setImagesVisisble] = useState(false);

  useEffect(() => {
    getProjectById(params.id).then((newProject) => setProject(newProject));
  }, []);

  useEffect(() => {
    if (project != undefined) {
      const imageElementsTemp: ReactElement[] = [];
      setImagesVisisble(false);
      currentPage.images?.forEach((img, i) => {
        imageElementsTemp.push(
          <PictureWrapper
            key={"work-pic" + i}
            src={img.url}
            onLoad={() => setImagesVisisble(true)}
          />
        );
      });
      setImageElements(imageElementsTemp);
    }
  }, [currentPageIndex]);

  if (project == undefined) {
    return <>Error</>;
  }

  const currentPage = project.pages[currentPageIndex];
  const hasImages = currentPage.images !== undefined;

  return (
    <Wrapper style={{ backgroundColor: currentPage.backgroundColor }}>
      <Header>
        <ItemContainer>
          <Item>
            <HomeLink href="/">maddy hartle</HomeLink>
          </Item>
          <Item>
            client: <br />
            {project.client}
          </Item>
          <Item>
            services: <br />
            {project.services}
          </Item>
        </ItemContainer>
        <Item style={{ textAlign: "right" }}>
          maddy.hartle@gmail.com
          <br />
          +44 7428173081
        </Item>
      </Header>
      <ContentWrapper>
        {hasImages && (
          <>
            <PictureContainer
              style={{ display: imagesVisisble ? "flex" : "none" }}
            >
              {imageElements}
            </PictureContainer>
            <LoaderContainer
              style={{ display: imagesVisisble ? "none" : "flex" }}
            >
              <PulseLoader size={20} color={"black"} />
            </LoaderContainer>
          </>
        )}
        {currentPage.videoUrl && <VideoPlayer url={currentPage.videoUrl} />}
      </ContentWrapper>
      <Footer>
        <Pagination>
          {project.pages.map((_, i) => {
            return (
              <PaginationItem
                selected={currentPageIndex === i}
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </PaginationItem>
            );
          })}
        </Pagination>
        <FooterText>{project.description}</FooterText>
      </Footer>
    </Wrapper>
  );
}

const ClickArea = styled.div`
  z-index: 500;
  position: absolute;
  width: 640px;
  height: 360px;
`;

function VideoPlayer({ url }: { url: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const height = "1200px";
  const width = "1100px";

  return (
    <div>
      <ClickArea onMouseDown={(e) => setIsPlaying(!isPlaying)} />
      <ReactPlayer
        url={url}
        playing={isPlaying}
        onReady={() => setIsReady(true)}
        volume={0.1}
        onClick={() => setIsPlaying(!isPlaying)}
        controls={false}
        width={width}
        height={height}
        style={{ display: isReady ? "flex" : "none" }}
        loop={true}
      />
      {!isReady && (
        <LoaderContainer>
          <PulseLoader size={20} color={"black"} />
        </LoaderContainer>
      )}
    </div>
  );
}
