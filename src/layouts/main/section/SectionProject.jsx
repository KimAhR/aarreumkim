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
          <h4>03</h4>
          <h2>LEARN REACT</h2>
        </Title>
      </TitleWrap>
      <Wrap>
        <ContentWrap>
          <Content01>
            <a href="https://kimahr.github.io/movie-list/">
              <ImgArea>
                <img src={process.env.PUBLIC_URL + "/img/movielist.png"} />
              </ImgArea>
              <TextWrap>
                <p>movielist</p>
              </TextWrap>
            </a>
          </Content01>
          <Content02>
            <a href="https://kimahr.github.io/movie-list/">
              <ImgArea>
                <img src={process.env.PUBLIC_URL + "/img/todolist.png"} />
              </ImgArea>
              <TextWrap>
                <p>movielist</p>
              </TextWrap>
            </a>
          </Content02>
          <Content03>
            <a href="https://kimahr.github.io/movie-list/">
              <ImgArea>
                <img src={process.env.PUBLIC_URL + "/img/portfolio.jpg"} />
              </ImgArea>
              <TextWrap>
                <p>movielist</p>
              </TextWrap>
            </a>
          </Content03>
          <Content04>
            <a href="https://kimahr.github.io/movie-list/">
              <ImgArea>
                <img src={process.env.PUBLIC_URL + "/img/portfolio.jpg"} />
              </ImgArea>
              <TextWrap>
                <p>movielist</p>
              </TextWrap>
            </a>
          </Content04>
        </ContentWrap>
        <p>
          {" "}
          React 원리 이해 · React의 기본 구조 및 실행 방법 이해 · 컴포넌트 생성 및 라이프 사이클 · SPA(Single Page Application)의 이해 및 구현, 웹 페이지 개선 · 클래스 컴포넌트에서 함수형 컴포넌트의
          비교 및 구현 (React Hooks), 웹 페이지 배포 · Github을 활용한 프로젝트 배포 등을 배웠습니다.
        </p>
      </Wrap>
    </Container>
  );
}

export default SectionProject;

const Container = styled.div`
  width: 100%;
  height: 900px;
  margin-top: 200px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 1500px;
    margin-top: -100px;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 75%;
  height: 100%;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
`;

const Title = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: -80px;
  @media ${({ theme }) => theme.device.laptop} {
    margin-top: -150px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  h4 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.main_color};
    font-size: 20px;
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;

      font-weight: 500;
      color: ${({ theme }) => theme.colors.main_color};
      font-size: 18px;
    }
  }
  h2 {
    width: 100%;

    font-weight: 600;
    color: ${({ theme }) => theme.colors.main_color};
    font-size: 60px;
    margin-top: 20px;
    line-height: 120%;

    @media ${({ theme }) => theme.device.tablet} {
      width: 70%;

      font-weight: 600;
      color: ${({ theme }) => theme.colors.main_color};
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      width: 100%;

      font-weight: 700;
      color: ${({ theme }) => theme.colors.main_color};
      font-size: 50px;
      margin-top: 20px;
      line-height: 120%;
    }
  }
`;

const ContentWrap = styled.ul`
  width: 100%;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;

  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  li {
    width: 24%;
    height: 470px;
    margin: 10px auto;

    box-sizing: border-box;
    background-color: #393e46;
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
    a {
      position: relative;
      width: 100%;
      height: 100%;
      transition: all 0.1s;

      color: #000;
    }
  }
`;

const Content01 = styled.li`
  width: 100%;
  height: 100%;
  background-color: #4c4c6d;
`;
const Content02 = styled.li`
  width: 100%;
  height: 100%;
  background-color: #1b9c85;
`;
const Content03 = styled.li`
  width: 100%;
  height: 100%;
  background-color: #4c4c6d;
`;
const Content04 = styled.li`
  width: 100%;
  height: 100%;
  background-color: #1b9c85;
`;

const ImgArea = styled.div`
  width: 90%;
  height: 50%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
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
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: transparent;
  &:hover {
    color: #fff;
    text-align: center;
    background: #000;
    font-weight: 600;
    opacity: 0.8;
  }
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: right;
  width: 50%;
  height: 100%;
`;
