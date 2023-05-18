import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

function SectionProject() {
  const list = [
    { id: 0, name: "MOVIELIST", image: "/img/movielist.png", url: "https://kimahr.github.io/movie-list/", material: "Recycled" },
    { id: 1, name: "TODOLIST", image: "/img/todolist.png", url: "https://kimahr.github.io/todolist/", material: "Recycled" },
    { id: 2, name: "PORTFOLIO", image: "/img/portfolio.jpg", url: "https://github.com/KimAhR/aarreumkim/", material: "Recycled" },
    { id: 3, name: "DIARY", image: "/img/portfolio.jpg", url: "https://kimahr.github.io/movielist/", material: "Leather" },
  ];

  const delay = 2500;
  const [index, setIndex] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === list.length - 1 ? 0 : prevIndex + 1)), delay);

    return () => {
      resetTimeout();
    };
  });
  return (
    <Container id="project">
      <TitleWrap>
        <Title>
          <h4>03</h4>
          <h2>LEARN REACT PROJECT</h2>
        </Title>
      </TitleWrap>
      <Wrap>
        <ContentWrap>
          {list
            .filter((content) => index === content.id)
            .map((content) => (
              <li>
                <a href={content.url}>
                  <ImgArea
                    key={content.id}
                    className={index === content.id ? ImgArea.active : null}
                    onClick={() => setIndex(content.id)}
                    style={{ transform: `translate3d(${index}%)`, transition: "all 3s" }}
                  >
                    <img src={process.env.PUBLIC_URL + content.image} />
                  </ImgArea>
                  <HoverWrap>
                    <p>{content.name}</p>
                  </HoverWrap>
                </a>
              </li>
            ))}
          {/* <Content02>
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
          </Content04> */}
        </ContentWrap>
      </Wrap>
    </Container>
  );
}

export default SectionProject;

const Container = styled.div`
  width: 100%;
  height: 800px;
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
  width: 100%;
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
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  li {
    width: 100%;
    height: 500px;
    margin: 10px auto;

    box-sizing: border-box;
    background-color: #222831;

    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
    a {
      position: relative;
      width: 100%;
      height: 100%;
      transition: all 0.1s;
      color: #fff;
      display: flex;
      justify-content: space-between;
    }
  }
`;

// const Content01 = styled.li`
//   width: 100%;
//   height: 100%;
//   color: #fff;
// `;
// const Content02 = styled.li`
//   width: 100%;
//   height: 100%;
// `;
// const Content03 = styled.li`
//   width: 100%;
//   height: 100%;
// `;
// const Content04 = styled.li`
//   width: 100%;
//   height: 100%;
// `;

const ImgArea = styled.div`
  width: 80%;
  height: 100%;

  background-color: #ddd;
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

const TextWrap = styled.div`
  display: flex;
  justify-content: right;
  width: 50%;
  height: 100%;
`;

const HoverWrap = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #000;
  p {
    color: transparent;
    &:hover {
      color: #fff;
      text-align: center;
      background: #000;
      font-weight: 600;
      opacity: 0.8;
    }
  }
`;
