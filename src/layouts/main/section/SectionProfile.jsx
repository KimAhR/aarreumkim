import styled from 'styled-components';

function SectionAbout() {
	return (
		<Container id="skills">
			<Wrap>
				<TextLine01>
					<p>HTML</p>
					<p>CSS</p>
					<p>JQUERY</p>
					<p>JAVASCRIPT</p>
				</TextLine01>
				<TextLine02>
					<p>REACT</p>
					<p>GITHUB</p>
					<p>FIGMA</p>
				</TextLine02>
				<TextLine03>
					{/* <h3>EMAIL</h3> */}
					<p>AARREUM0307@GMAIL.COM</p>
				</TextLine03>
				<TextLine04>
					<h3>PHONENUMEBER</h3>
					<p>010.2967.5037</p>
				</TextLine04>
				{/* <TextLine05>
          <p>BUSAN UNIVERSITY OF FOREIGN STUDIES</p>
        </TextLine05> */}
			</Wrap>
		</Container>
	);
}

export default SectionAbout;

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 800px;
`;

const Wrap = styled.div`
	width: 100%;
	height: 100%;
	max-width: 75%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media ${({ theme }) => theme.device.laptop} {
		max-width: 75%;
		margin: 0 auto;
	}
	@media ${({ theme }) => theme.device.tablet} {
		display: none;
	}

	div {
		h3 {
			@media ${({ theme }) => theme.device.laptop} {
				font-size: 2.5rem;
				font-weight: 600;
			}
			@media ${({ theme }) => theme.device.tablet} {
				font-size: 2rem;
				margin: 0 auto;
			}
			@media ${({ theme }) => theme.device.mobile} {
				font-size: 1.25rem;
				margin: 0 auto;
			}
		}
		p {
			@media ${({ theme }) => theme.device.laptop} {
				font-size: 2.5rem;
				font-weight: 600;
			}
			@media ${({ theme }) => theme.device.tablet} {
				font-size: 2rem;
				margin: 0 auto;
			}
			@media ${({ theme }) => theme.device.mobile} {
				font-size: 1.25rem;
				margin: 0 auto;
			}
		}
	}
`;

const TextLine01 = styled.div`
	width: 65%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	font-size: 3rem;
	font-weight: 600;

	h3 {
		font-size: 3rem;
		font-weight: 600;
		&:hover {
			color: #ce5959;
		}
	}
	p {
		font-size: 3rem;
		font-weight: 600;
		&:hover {
			color: #0066ff;
		}
	}
`;

const TextLine02 = styled.div`
	width: 65%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	h3 {
		font-size: 3rem;
		font-weight: 600;
		&:hover {
			color: #ce5959;
		}
	}
	p {
		font-size: 3rem;
		font-weight: 600;
		&:hover {
			color: #0066ff;
		}
	}
`;

const TextLine03 = styled.div`
	width: 65%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	h3 {
		font-size: 3rem;
		font-weight: 600;
		&:hover {
			color: #ce5959;
		}
	}
	p {
		font-size: 3rem;
		font-weight: 600;
		&:hover {
			color: #0066ff;
		}
	}
`;
const TextLine04 = styled.div`
	width: 65%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	h3 {
		font-size: 3rem;
		font-weight: 600;
		&:hover {
			color: #ce5959;
		}
	}
	p {
		font-size: 3rem;
		font-weight: 600;
		&:hover {
			color: #0066ff;
		}
	}
`;
