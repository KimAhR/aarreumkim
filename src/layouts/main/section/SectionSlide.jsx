import React from 'react';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const SlideComponent = () => {
	const TOTAL_SLIDES = 3;
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef(null);

	// Next 버튼 클릭 시
	const NextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES) {
			// 더 이상 넘어갈 슬라이드가 없으면
			setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
			// return;  // 클릭이 작동하지 않습니다.
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};
	// Prev 버튼 클릭 시
	const PrevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
			// return;  // 클릭이 작동하지 않습니다.
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	useEffect(() => {
		slideRef.current.style.transition = 'all 0.5s ease-in-out';
		slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
	}, [currentSlide]);

	return (
		<Container>
			<TitleWrap>
				<Title>
					<h1>
						LEARN
						<br /> REACT PROJECT
					</h1>
				</Title>
			</TitleWrap>
			<Wrap>
				<SliderContainer ref={slideRef}>
					<img src={process.env.PUBLIC_URL + '/img/main_bg01.jpg'} />

					<TextWrap>
						<p>movielist</p>
					</TextWrap>

					<img src={process.env.PUBLIC_URL + '/img/todolist.jpg'} />

					<TextWrap>
						<p>movielist</p>
					</TextWrap>

					<img src={process.env.PUBLIC_URL + '/img/main_bg03.jpg'} />

					<TextWrap>
						<p>movielist</p>
					</TextWrap>

					<img src={process.env.PUBLIC_URL + '/img/main_bg04.jpg'} />

					<TextWrap>
						<p>movielist</p>
					</TextWrap>
				</SliderContainer>
				<Center>
					<Button onClick={PrevSlide}>Prev</Button>
					<Button onClick={NextSlide}>Next</Button>
				</Center>
			</Wrap>
		</Container>
	);
};

export default SlideComponent;

const Container = styled.div`
	width: 100%;
	height: 1200px;
	margin-top: 150px;
`;
const TitleWrap = styled.div`
	z-index: 2;

	width: 100%;
	max-width: 75%;
	margin: 0 auto;

	@media ${({ theme }) => theme.device.laptop} {
		z-index: 2;
		position: relative;

		width: 100%;
		max-width: 80%;
		margin: 0 auto;

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
	}
`;

const Title = styled.div`
	width: 100%;

	@media ${({ theme }) => theme.device.laptop} {
	}

	h1 {
		width: 100%;
		margin-bottom: 50px;
		font-weight: 600;
		color: #000;
		font-size: 4rem;
		text-align: left;
		@media ${({ theme }) => theme.device.tablet} {
			width: 100%;
			font-family: 'Montserrat';
			font-weight: 600;
			color: #000;
			font-size: 50px;
			margin-top: 20px;
			line-height: 120%;
		}
		@media ${({ theme }) => theme.device.mobile} {
			text-align: center;
			width: 100%;
			font-family: 'Montserrat';
			font-weight: 700;
			color: #000;
			font-size: 50px;
			margin-top: 20px;
			line-height: 120%;
		}
	}
`;
const Wrap = styled.div`
	width: 100%;
	max-width: 75%;
	height: 100%;
	margin: 0 auto;
	overflow: hidden;
`;
const Button = styled.div`
	all: unset;
	padding: 1em 2em;
	margin: 2em 2em;
	color: burlywood;
	border-radius: 10px;
	border: 1px solid burlywood;
	cursor: pointer;
	&:hover {
		background-color: burlywood;
		color: #fff;
	}
`;
const SliderContainer = styled.div`
	width: 100%;

	/* margin: 0 auto; */
	height: 700px;
	margin-bottom: 2em;
	display: flex; // 이미지들을 가로로 나열합니다.
	justify-content: space-between;
	img {
		width: 50%;
		height: 100%;
		object-fit: contain;
	}
`;

const TextWrap = styled.div`
	padding: 25%;
	overflow: hidden;
	background-color: red;
	p {
		font-size: 3rem;
	}
`;

const Text = styled.div`
	text-align: center;
	color: burlywood;
	p {
		color: #fff;
		font-size: 20px;
		background-color: burlywood;
		display: inline-block;

		border-radius: 50px;
		padding: 0.5em 1em;
	}
`;
const Center = styled.div`
	text-align: center;
`;
