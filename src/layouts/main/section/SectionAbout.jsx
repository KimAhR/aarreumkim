import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

function SectionAbout() {
	const data = [
		{
			id: 0,
			title: 'sociable',
			content: 'sociable',
			contents: '사교적인',
			dots: '',
		},
		{
			id: 1,
			title: 'enterprising',
			content: 'enterprising',
			contents: '진취력있는',
			dots: '',
		},
		{
			id: 2,
			title: 'shrewd',
			content: 'shrewd',
			contents: 'catch on fast',
			dots: '',
		},
		{
			id: 3,
			title: 'sociable',
			content: 'sociable',
			contents: '사교적인',
			dots: '',
		},
		{
			id: 4,
			title: 'considerate',
			content: 'considerate',
			contents: '배려하는',
			dots: '',
		},
		{
			id: 5,
			title: 'hardworking',
			content: 'hardworking',
			contents: '성실한',
			dots: '',
		},
		{
			id: 6,
			title: 'figma',
			content: 'figma',
			contents: '김아름',
			dots: '',
		},
		{
			id: 7,
			title: 'responsibility',
			content: 'responsibility',
			contents: '책임감',
			dots: '',
		},
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
		timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1)), delay);

		return () => {
			resetTimeout();
		};
	});
	return (
		<Container id="profile">
			<TitleWrap>
				<Title>
					{/* <h4>02</h4> */}
					<h2>
						KIM
						<br />
						AHREUM
					</h2>
				</Title>
			</TitleWrap>
			<Wrap>
				<IMG>
					<img src={process.env.PUBLIC_URL + '/img/kim_img02.jpg'} alt="증명사진" />
				</IMG>
				<TextWrap>
					<Txt>
						<h3>PROFILE</h3>
						<ContentWrap>
							<h4>김아름</h4>
							<Content> 프론트엔드 웹 개발자 양성 과정 - HTML5, CSS3, 자바스크립트(Java Script), 제이쿼리(JQuery), 리액트(React)</Content>
						</ContentWrap>
					</Txt>
					<Txt>
						<h3>CAREER</h3>
						<ContentWrap>
							<h4>2023.01.09 - 2023.02.28</h4>
							<Content> 프론트엔드 웹 개발자 양성 과정 - HTML5, CSS3, 자바스크립트(Java Script), 제이쿼리(JQuery), 리액트(React)</Content>
						</ContentWrap>
					</Txt>
					<Txt>
						<h3>EDUCATION</h3>
						<ContentWrap>
							<h4>2023.01.09 - 2023.02.28</h4>
							<Content> 프론트엔드 웹 개발자 양성 과정 - HTML5, CSS3, 자바스크립트(Java Script), 제이쿼리(JQuery), 리액트(React)</Content>
						</ContentWrap>
						<ContentWrap>
							<h4>2021.09.07 - 2022.01.25</h4>
							<Content> (디지털디자인)UI/UX 반응형 웹디자인 & 웹퍼블리셔B 수료</Content>
						</ContentWrap>
						<ContentWrap>
							<h4>2008.03.03 - 2014.08.14 </h4>
							<Content>부산외국어대학교 한국어문학부 졸업 /부전공: 일본어문학</Content>
						</ContentWrap>
					</Txt>
				</TextWrap>
			</Wrap>
		</Container>
	);
}

export default SectionAbout;

const Container = styled.div`
	width: 100%;
	height: 1000px;
`;
const TitleWrap = styled.div`
	z-index: 2;

	width: 100%;
	max-width: 75%;
	margin: 10px auto;
	padding-top: 100px;
	display: flex;
	justify-content: space-between;

	@media ${({ theme }) => theme.device.laptop} {
		z-index: 2;
		position: relative;

		width: 100%;
		max-width: 80%;
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
		width: 60%;

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

const IMG = styled.div`
	width: 85%;
	height: 85%;
	img {
		width: 100%;
		height: 100%;

		object-fit: cover;
	}
`;

const Wrap = styled.div`
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	height: 70%;
	max-width: 75%;
	margin: 0 auto;

	color: ${({ theme }) => theme.colors.black_color};
	@media ${({ theme }) => theme.device.mobile} {
		margin: 200px auto;
		height: 400px;
	}
`;

const TextWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	margin-right: 10px;
	@media ${({ theme }) => theme.device.mobile} {
		justify-content: space-between;
	}
`;

const Txt = styled.div`
	width: 40%;
	margin: 0 auto;
	z-index: 2;
	&:last-child {
		width: 90%;
		margin: 0 auto;
	}
	color: ${({ theme }) => theme.colors.white_color};
	h2 {
		width: 60%;

		font-weight: 600;
		color: #000;
		font-size: 4rem;
		margin-top: 20px;
		line-height: 120%;
		@media ${({ theme }) => theme.device.mobile} {
			text-align: center;
			margin: 0 auto;
			font-size: 2rem;
		}
	}
	h3 {
		text-align: left;
		font-weight: 600;
		font-size: 1.25rem;
		margin-bottom: 10px;
		color: #000;
		&::before {
			content: '';
			display: block;
			width: 100%;
			height: 1px;
			background: ${({ theme }) => theme.colors.black_color};
			margin: 10px auto;
		}
	}
`;

const ContentWrap = styled.div`
	display: flex;
	flex-direction: column;

	line-height: 160%;

	h4 {
		width: 100%;
		font-size: 1rem;
		text-align: left;
		color: ${({ theme }) => theme.colors.black_color};
	}
`;

const Content = styled.div`
	/* position: absolute;
  top: 10%;
  left: 30%; */
	width: 100%;
	font-size: 0.8rem;
	text-align: left;

	color: ${({ theme }) => theme.colors.black_color};
`;
