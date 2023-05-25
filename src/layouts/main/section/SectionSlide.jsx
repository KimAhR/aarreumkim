import React from 'react';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const SlideComponent = () => {
	// const TOTAL_SLIDES = 3;
	// const [currentSlide, setCurrentSlide] = useState(0);
	// const slideRef = useRef(null);

	// // Next 버튼 클릭 시
	// const NextSlide = () => {
	// 	if (currentSlide >= TOTAL_SLIDES) {
	// 		// 더 이상 넘어갈 슬라이드가 없으면
	// 		setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
	// 		// return;  // 클릭이 작동하지 않습니다.
	// 	} else {
	// 		setCurrentSlide(currentSlide + 1);
	// 	}
	// };
	// // Prev 버튼 클릭 시
	// const PrevSlide = () => {
	// 	if (currentSlide === 0) {
	// 		setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
	// 		// return;  // 클릭이 작동하지 않습니다.
	// 	} else {
	// 		setCurrentSlide(currentSlide - 1);
	// 	}
	// };

	// useEffect(() => {
	// 	slideRef.current.style.transition = 'all 0.5s ease-in-out';
	// 	slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
	// }, [currentSlide]);

	return (
		<Container id="project">
			<Wrap>
				<TitleWrap>
					<Title>
						<h1>
							LEARN
							<br />
							REACT
							<br /> PROJECT
						</h1>

						<h3>
							React 원리 이해 · React의 기본 구조 및 실행 방법 이해 · 컴포넌트 생성 및 라이프 사이클 · SPA(Single Page Application)의 이해 및 구현, 웹 페이지 개선 · 클래스 컴포넌트에서 함수형
							컴포넌트의 비교 및 구현 (React Hooks), 웹 페이지 배포 · Github을 활용한 프로젝트 배포 등을 배웠습니다.
						</h3>
					</Title>
				</TitleWrap>
				<ContentWrap>
					<Content01>
						<a href="https://kimahr.github.io/movie-list/">
							<ImgArea>
								<img src={process.env.PUBLIC_URL + '/img/movielist.jpg'} />
							</ImgArea>
							{/* <TextWrap>
								<p>MOVIELIST</p>
							</TextWrap> */}
							<HoverWrap>
								<h3>MOVIELIST</h3>
								<p>REACT 학습내용 적기</p>
							</HoverWrap>
						</a>
					</Content01>
					<Content02>
						<a href="https://kimahr.github.io/todolist/">
							<ImgArea>
								<img src={process.env.PUBLIC_URL + '/img/todolist.jpg'} />
							</ImgArea>
							{/* <TextWrap>
								<p>TODOLIST</p>
							</TextWrap> */}
							<HoverWrap>
								<h3>TODOLIST</h3>
								<p>REACT 학습내용 적기</p>
							</HoverWrap>
						</a>
					</Content02>
					<Content03>
						<a href="https://kimahr.github.io/todolist/">
							<ImgArea>
								<img src={process.env.PUBLIC_URL + '/img/diary.png'} />
							</ImgArea>
							{/* <TextWrap>
								<p>감정일기</p>
							</TextWrap> */}
							<HoverWrap>
								<h3>감정일기</h3>
								<p>REACT 학습내용 적기</p>
							</HoverWrap>
						</a>
					</Content03>
					<Content04>
						<a href="https://kimahr.github.io/todolist/">
							{/* <ImgArea>
								<img src={process.env.PUBLIC_URL + '/img/movielist.png'} />
							</ImgArea> */}
							{/* <TextWrap>
								<p>PORTFOLIO</p>
							</TextWrap> */}
							<HoverWrap>
								<h3>준비중</h3>
								<p>REACT 학습내용 적기</p>
							</HoverWrap>
						</a>
					</Content04>
				</ContentWrap>
				{/* <Center>
					<Button onClick={PrevSlide}>Prev</Button>
					<Button onClick={NextSlide}>Next</Button>
				</Center> */}
			</Wrap>
		</Container>
	);
};

export default SlideComponent;

const Container = styled.div`
	width: 100%;
	height: 1200px;
	@media ${({ theme }) => theme.device.laptop} {
		height: 1000px;
		margin-top: -300px;
	}
	@media ${({ theme }) => theme.device.tablet} {
		margin-top: -500px;
		height: 900px;
	}
	@media ${({ theme }) => theme.device.mobile} {
		margin-top: -700px;
	}
`;

const Wrap = styled.div`
	width: 100%;
	max-width: 75%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	&::before {
		display: block;
		content: '';
		width: 1px;
		height: 85%;
		background-color: ${({ theme }) => theme.colors.black_color};
	}

	@media ${({ theme }) => theme.device.laptop} {
		flex-direction: column;
		&::before {
			display: none;
			content: '';
			width: 100%;
			height: 1px;
			background-color: ${({ theme }) => theme.colors.black_color};
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		&::before {
			display: block;
			content: '';
			width: 100%;
			height: 1px;
			background-color: ${({ theme }) => theme.colors.black_color};
		}
	}
`;
const TitleWrap = styled.div`
	width: 100%;
	height: 100%;
	max-width: 30%;
	margin: 0 auto;

	/* background-color: #47a992; */
	@media ${({ theme }) => theme.device.laptop} {
		width: 100%;

		max-width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media ${({ theme }) => theme.device.tablet} {
	}
	@media ${({ theme }) => theme.device.mobile} {
		display: flex;
	}
`;

const Title = styled.div`
	width: 80%;

	margin: 0 auto;
	@media ${({ theme }) => theme.device.laptop} {
		display: flex;
		justify-content: space-around;

		width: 100%;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 100%;

		display: flex;
		margin-bottom: 100px;
	}
	@media ${({ theme }) => theme.device.tablet} {
	}

	h1 {
		width: 100%;
		/* writing-mode: vertical-lr;
		text-orientation: upright; */
		font-weight: 600;
		color: ${({ theme }) => theme.colors.black_color};
		font-size: 3.5rem;
		text-align: left;
		line-height: 200%;
		@media ${({ theme }) => theme.device.laptop} {
			line-height: 160%;
		}
		@media ${({ theme }) => theme.device.tablet} {
			font-size: 3rem;
		}
		@media ${({ theme }) => theme.device.mobile} {
			width: 50%;
			font-size: 1.25rem;
		}
	}
	h3 {
		width: 80%;
		font-weight: 500;
		color: #000;
		font-size: 1.25rem;
		line-height: 160%;
		margin-top: 40px;
		@media ${({ theme }) => theme.device.laptop} {
			width: 100%;
		}
		@media ${({ theme }) => theme.device.tablet} {
			margin: 0;
			font-size: 1rem;
		}
		@media ${({ theme }) => theme.device.tablet} {
		}
	}
`;

const ContentWrap = styled.ul`
	width: 80%;

	/* margin: 0 auto; */
	height: 500px;

	display: flex;
	flex-wrap: wrap;
	@media ${({ theme }) => theme.device.laptop} {
		width: 100%;
		height: 400px;
		margin-top: -150px;
	}
	@media ${({ theme }) => theme.device.laptop} {
		/* width: 100%;
		height: 400px; */
	}

	li {
		position: relative;
		width: 50%;
		height: 100%;
		/* background-color: #1c6758; */
		border: 1px solid #fff;
		@media ${({ theme }) => theme.device.mobile} {
			width: 100%;
			height: 50%;
		}

		a {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			color: #000;
			transition: all 0.1s;
			&:hover {
				transition: all 0.3s;
				div {
					&:last-child {
						display: flex;
						flex-direction: column;
						align-items: center;

						justify-content: space-around;
					}
				}
			}
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
	background-color: #47a992;
`;

const ImgArea = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	margin: 0 auto;

	img {
		width: 100%;
		height: 100%;
		/* opacity: 0.5; */
		object-fit: cover;
	}
`;

// const TextWrap = styled.div`
// 	width: 50%;
// 	height: 100%;
// 	background-color: red;
// `;

// const Text = styled.div`
// 	text-align: center;
// 	color: burlywood;
// 	p {
// 		color: #fff;
// 		font-size: 20px;
// 		background-color: burlywood;
// 		display: inline-block;

// 		border-radius: 50px;
// 		padding: 0.5em 1em;
// 	}
// `;

const HoverWrap = styled.div`
	/* position: absolute;
	width: 50%;
	height: 50%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center; */
	position: absolute;

	display: none;

	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.black_color};
	opacity: 0.8;

	h3 {
		color: #fff;
		font-size: 3rem;
		display: flex;
		justify-content: center;
	}
	p {
		display: flex;
		justify-content: center;
		font-size: 1.25rem;
		color: #fff;
		font-weight: 600;
	}
`;

const TextWrap = styled.div`
	position: absolute;

	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 30%;
	background-color: ${({ theme }) => theme.colors.white_color};
	opacity: 0.5;

	p {
		color: ${({ theme }) => theme.colors.black_color};
		font-weight: 600;
	}
`;
