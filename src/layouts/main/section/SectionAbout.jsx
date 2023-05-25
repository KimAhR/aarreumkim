import styled from 'styled-components';

function SectionAbout() {
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
					<h3>KIM AHREUM</h3>
				</Title>
			</TitleWrap>
			<Wrap>
				<IMG>
					<img src={process.env.PUBLIC_URL + '/img/kim_img02.jpg'} alt="사진" />
				</IMG>
				<TextWrap>
					<Txt>
						<h3>PROFILE</h3>
						<ContentWrap>
							<h4>김아름(1989.03.07)</h4>
							<Content> 서울 마포구 거주 (본가:부산)</Content>
							<h4>E-MAIL</h4>
							<Content>aarreum0307@gmail.com</Content>
							<h4>PHONE NUMBER</h4>
							<Content>010.2967.5037</Content>
						</ContentWrap>
					</Txt>
					<Txt>
						<h3>CAREER</h3>
						<ContentWrap>
							<h4>2019.07 - 2021.08</h4>
							<Content>(주)단비 빅데이터팀 / 빅데이터 시각화</Content>
							<Content>Tableau, MSTR, POWER BI을 사용 대시보드 기획 및 대시보드 개발, 구축 및 관리/운영 등을 하였습니다.</Content>
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
						<ContentWrap>
							<h4>2005.03 - 2008.02 </h4>
							<Content>부산 혜화여자고등학교 졸업 / 문과</Content>
							<h4>SKILLS : HTML, CSS, JQUERY, JAVASCRIPT, REACT , GITHUB, FIGMA, XD</h4>
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
	height: 1400px;
	@media ${({ theme }) => theme.device.laptop} {
	}
	@media ${({ theme }) => theme.device.mobile} {
		height: 1200px;
	}
`;
const TitleWrap = styled.div`
	z-index: 2;

	width: 100%;
	max-width: 75%;
	margin: 10px auto;
	padding-top: 150px;
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
		max-width: 75%;
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

	h2 {
		width: 100%;
		max-width: 75%;
		text-align: left;
		font-weight: 600;
		color: #000;
		font-size: 4rem;
		margin-top: 20px;
		line-height: 120%;
		@media ${({ theme }) => theme.device.tablet} {
			display: none;
		}
	}
	h3 {
		display: none;
		@media ${({ theme }) => theme.device.tablet} {
			display: block;
			font-weight: 600;
			color: #000;
			font-size: 2.25rem;
		}
	}
`;

const IMG = styled.div`
	width: 85%;
	height: 85%;
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 2.5rem;
		font-weight: 600;
	}
	@media ${({ theme }) => theme.device.tablet} {
		display: none;
	}
	@media ${({ theme }) => theme.device.mobile} {
	}
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
	height: 60%;
	max-width: 75%;
	margin: 0 auto;

	color: ${({ theme }) => theme.colors.black_color};
	@media ${({ theme }) => theme.device.laptop} {
	}
	@media ${({ theme }) => theme.device.mobile} {
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
	@media ${({ theme }) => theme.device.tablet} {
	}
	@media ${({ theme }) => theme.device.mobile} {
		justify-content: space-between;
	}
`;

const Txt = styled.div`
	width: 40%;
	margin: 0 auto;
	z-index: 2;
	@media ${({ theme }) => theme.device.tablet} {
		width: 50%;
	}
	@media ${({ theme }) => theme.device.mobile} {
		justify-content: space-between;
	}
	&:last-child {
		width: 90%;
		margin: 0 auto;
		@media ${({ theme }) => theme.device.tablet} {
			width: 100%;
		}
		@media ${({ theme }) => theme.device.mobile} {
		}
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
