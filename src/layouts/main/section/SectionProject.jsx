import styled from "styled-components";

function SectionProject() {
  const list = [
    {
      name: "MOVIELIST",
      src: "/img/todolist.png",
      url: "https://kimahr.github.io/movie-list/",
      material: "Recycled",
    },
    {
      name: "TODOLIST",
      src: "/img/todolist.png",
      url: "https://kimahr.github.io/todolist/",
      material: "Recycled",
    },
    {
      name: "PORTFOLIO",
      src: "/img/portfolio.jpg",
      url: "https://github.com/KimAhR/aarreumkim/",
      material: "Recycled",
    },
    {
      name: "DIARY",
      src: "/img/macbook.png",
      url: "https://kimahr.github.io/movielist/",
      material: "Leather",
    },
  ];
  return (
    <Container id="project">
      <TitleWrap>
        <Title>
          <h2>LEARN REACT</h2>
          <h3>
            React 원리 이해 · React의 기본 구조 및 실행 방법 이해 · 컴포넌트 생성 및 라이프 사이클 · SPA(Single Page Application)의 이해 및 구현, 웹 페이지 개선 · 클래스 컴포넌트에서 함수형 컴포넌트의
            비교 및 구현 (React Hooks), 웹 페이지 배포 · Github을 활용한 프로젝트 배포 등을 배웠습니다.
          </h3>
        </Title>
      </TitleWrap>
      <Wrap>
        <ContentWrap>
          <Content01>
            <a href="https://kimahr.github.io/movie-list/">
              {/* <ImgArea>
                <img src={process.env.PUBLIC_URL + "/img/movielist.png"} />
              </ImgArea> */}
              <TextWrap>
                <p>#REACT</p>
              </TextWrap>
              <HoverWrap>
                <p>view</p>
              </HoverWrap>
            </a>
          </Content01>
          <Content02>
            <a href="https://kimahr.github.io/todolist/">
              {/* <ImgArea>
                <img src={process.env.PUBLIC_URL + "/img/todolist.png"} />
              </ImgArea> */}
              <TextWrap>
                <p>#REACT</p>
              </TextWrap>
              <HoverWrap>
                <p>movielist</p>
              </HoverWrap>
            </a>
          </Content02>
          <Content03>
            <a href="https://kimahr.github.io/movie-list/">
              {/* <ImgArea>
                <img src={process.env.PUBLIC_URL + "/img/portfolio.jpg"} />
              </ImgArea> */}
              <TextWrap>
                <p>#REACT</p>
              </TextWrap>
              <HoverWrap>
                <p>movielist</p>
              </HoverWrap>
            </a>
          </Content03>
          <Content04>
            <a href="https://kimahr.github.io/movie-list/">
              {/* <ImgArea>
                <img src={process.env.PUBLIC_URL + "/img/portfolio.jpg"} />
              </ImgArea> */}
              <TextWrap>
                <p>#REACT</p>
              </TextWrap>
              <HoverWrap>
                <p>movielist</p>
              </HoverWrap>
            </a>
          </Content04>
        </ContentWrap>
      </Wrap>
    </Container>
  );
}

export default SectionProject;

const Container = styled.div`
  width: 100%;
  height: 1500px;
  margin-top: 300px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 1800px;
    margin-top: 50px;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  z-index: 2;

  width: 100%;
  max-width: 75%;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.laptop} {
    z-index: 2;
    position: relative;

    width: 100%;
    max-width: 75%;
    margin: 0 auto;
    padding-top: 200px;
    display: flex;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    justify-content: center;
    align-items: center;
  }
  h3 {
    width: 80%;

    font-weight: 500;
    color: #000;
    font-size: 18px;
    line-height: 160%;
    margin-top: 40px;
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;

      font-weight: 500;
      color: #000;
      font-size: 18px;
    }
  }
  h2 {
    width: 50%;

    font-weight: 600;
    color: #000;
    font-size: 4rem;
    margin-top: 20px;
    line-height: 120%;

    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;

      font-weight: 600;
      color: #000;
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      width: 100%;

      font-weight: 700;
      color: #000;
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
  }
`;

const ContentWrap = styled.ul`
  width: 100%;
  max-width: 75%;
  height: 90%;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  li {
    width: 48%;
    height: 600px;
    margin: 10px auto;

    box-sizing: border-box;
    background-color: #222831;
    a {
      position: relative;
      width: 100%;
      height: 100%;
      transition: all 0.1s;

      color: #fff;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
  }
`;

const Content01 = styled.li`
  width: 100%;
  height: 100%;
`;
const Content02 = styled.li`
  width: 100%;
  height: 100%;
`;
const Content03 = styled.li`
  width: 100%;
  height: 100%;
`;
const Content04 = styled.li`
  width: 100%;
  height: 100%;
`;

const ImgArea = styled.div`
  width: 80%;
  height: 50%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  background-color: #000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.p`
  width: 50%;
  height: 20%;
  margin: 20px auto;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 600;
`;

const HoverWrap = styled.div`
  position: absolute;
  top: 0;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: transparent;
  &:hover {
    color: #fff;
    text-align: center;
    background-color: #000;
    font-weight: 600;
  }
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;
