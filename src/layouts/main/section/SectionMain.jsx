import styled from 'styled-components';

function SectionMain() {
	return (
		<Container>
			<Wrap>
				<div>
					<p>KIM AH REUM PORTFOLIO</p>
					<img src={process.env.PUBLIC_URL + '/img/bg.jpg'} alt="img" />
				</div>
			</Wrap>
		</Container>
	);
}

export default SectionMain;

const Container = styled.div`
	width: 100%;
	height: 700px;
	z-index: 1;
	position: relative;
	top: 0;
	display: flex;
	align-items: center;

	color: ${({ theme }) => theme.colors.black_color};
	font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
	margin: 0 auto;

	@media ${({ theme }) => theme.device.laptop} {
		width: 100%;
		height: 600px;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 100%;
		height: 600px;
	}
`;

const Wrap = styled.div`
	width: 100%;
	max-width: 74%;
	margin: 0 auto;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;

	@media ${({ theme }) => theme.device.laptop} {
	}

	div {
		margin: 0 auto;

		p {
			margin: 30px auto;
			font-size: 5rem;
			@media ${({ theme }) => theme.device.laptop} {
				font-size: 3rem;
			}
		}
		img {
			width: 80%;
			height: 80%;
			object-fit: contain;
		}

		font-size: 6rem;
		@media ${({ theme }) => theme.device.laptop} {
			font-weight: 600;
			color: #fff;
			font-size: 5rem;
			transition: all 0.3s;
		}
		@media ${({ theme }) => theme.device.tablet} {
			font-size: 3rem;
			background-color: ${({ theme }) => theme.colors.main_color};
			color: #fff;
			font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
		}
	}
`;
