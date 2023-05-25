import styled from 'styled-components';

function SectionProject() {
	const list = [
		{
			name: 'MOVIELIST',
			src: '/img/todolist.png',
			url: 'https://kimahr.github.io/movie-list/',
			material: 'Recycled',
		},
		{
			name: 'TODOLIST',
			src: '/img/todolist.png',
			url: 'https://kimahr.github.io/todolist/',
			material: 'Recycled',
		},
		{
			name: 'PORTFOLIO',
			src: '/img/portfolio.jpg',
			url: 'https://github.com/KimAhR/aarreumkim/',
			material: 'Recycled',
		},
		{
			name: 'DIARY',
			src: '/img/macbook.png',
			url: 'https://kimahr.github.io/movielist/',
			material: 'Leather',
		},
	];
	return (
		<Container id="project">
			<Wrap>
				{/* <TitleWrap>
					<Title>
						<h2>
							LEARN <br />
							REACT <br />
							PROJECT
						</h2>
						<h3>
							React 원리 이해 · React의 기본 구조 및 실행 방법 이해 · 컴포넌트 생성 및 라이프 사이클 · SPA(Single Page Application)의 이해 및 구현, 웹 페이지 개선 · 클래스 컴포넌트에서 함수형
							컴포넌트의 비교 및 구현 (React Hooks), 웹 페이지 배포 · Github을 활용한 프로젝트 배포 등을 배웠습니다.
						</h3>
					</Title>
				</TitleWrap> */}
				<ListWrap>
					<ContentWrap>
						<Content01>
							<HoverWrap>
								<h3>movielist</h3>
								<span>view</span>
							</HoverWrap>

							<a href="https://kimahr.github.io/todolist/">
								<ImgArea>
									<img src={process.env.PUBLIC_URL + '/img/movielist.png'} />
								</ImgArea>
								<TextWrap>
									<p>#REACT</p>
								</TextWrap>
							</a>
						</Content01>
						<Content02>
							<HoverWrap>
								<h3>movielist</h3>
								<span>view</span>
							</HoverWrap>
							<a href="https://kimahr.github.io/todolist/">
								<ImgArea>
									<img src={process.env.PUBLIC_URL + '/img/movielist.png'} />
								</ImgArea>
								<TextWrap>
									<p>#REACT</p>
								</TextWrap>
							</a>
						</Content02>
						<Content03>
							<HoverWrap>
								<h3>movielist</h3>
								<span>view</span>
							</HoverWrap>
							<a href="https://kimahr.github.io/todolist/">
								<ImgArea>
									<img src={process.env.PUBLIC_URL + '/img/movielist.png'} />
								</ImgArea>
								<TextWrap>
									<p>#REACT</p>
								</TextWrap>
							</a>
						</Content03>
						<Content04>
							<HoverWrap>
								<h3>movielist</h3>
								<span>view</span>
							</HoverWrap>
							<a href="https://kimahr.github.io/todolist/">
								<ImgArea>
									<img src={process.env.PUBLIC_URL + '/img/movielist.png'} />
								</ImgArea>
								<TextWrap>
									<p>#REACT</p>
								</TextWrap>
							</a>
						</Content04>
					</ContentWrap>
				</ListWrap>
			</Wrap>
		</Container>
	);
}

export default SectionProject;

const Container = styled.div`
	width: 100%;
	height: 1600px;

	margin-top: 100px;
	display: flex;
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
	max-width: 75%;
	margin: 0 auto;
	display: flex;
`;

const TitleWrap = styled.div`
	z-index: 2;

	width: 100%;
	max-width: 30%;
	margin: 0 auto;
	padding-top: 100px;

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
	width: 5%;
	display: flex;
	flex-direction: column;
	writing-mode: vertical-lr;
	text-orientation: upright;
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
		font-size: 1.25rem;
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
		font-size: 60px;
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

const ListWrap = styled.div`
	position: relative;
	width: 70%;
	height: 100%;

	margin: 0 auto;
`;

const ContentWrap = styled.ul`
	width: 100%;

	height: 80%;
	padding-top: 100px;
	/* margin: 0 auto; */
	display: flex;
	flex-wrap: wrap;
	/* justify-content: flex-start; */
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}

	li {
		width: 50%;
		height: 600px;
		position: relative;
		/* background-color: ${({ theme }) => theme.colors.black_color}; */
		border: 2px solid#fff;
		&:hover {
			h3 {
				display: none;
			}
			span {
				font-size: 3rem;
				color: #fff;
			}
		}
		/* h3 {
			position: absolute;
			width: 50%;
			height: 50%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			color: transparent;
			font-size: 3rem;
		}
		&:hover {
			h3 {
				color: #fff;
			}
		} */

		a {
			position: relative;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
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
	background-color: #d6cda4;
`;
const Content02 = styled.li`
	width: 100%;
	height: 100%;
	background-color: #1c6758;
`;
const Content03 = styled.li`
	width: 100%;
	height: 100%;
	background-color: #3d8361;
`;
const Content04 = styled.li`
	width: 100%;
	height: 100%;
	background-color: #eef2e6;
`;

const ImgArea = styled.div`
	position: relative;
	width: 100%;
	height: 70%;
	display: flex;
	margin: 0 auto;

	img {
		width: 100%;
		height: 100%;
		opacity: 0;
		object-fit: cover;
	}
`;

// const Text = styled.p`
// 	width: 50%;
// 	height: 20%;
// 	margin: 20px auto;
// 	font-size: 1.25rem;
// 	color: #000;
// 	font-weight: 600;
// `;

const HoverWrap = styled.div`
	position: absolute;
	width: 50%;
	height: 50%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	h3 {
		color: #fff;
		font-size: 3rem;
	}
	span {
		color: transparent;
	}
`;

const TextWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 30%;
	background-color: ${({ theme }) => theme.colors.black_color};

	opacity: 0.5;
	p {
		color: #fff;
	}
`;
