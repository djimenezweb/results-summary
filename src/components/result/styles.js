import styled from 'styled-components';

const StyledCard = styled.article`
	padding: 1.5rem 3.6rem 2.5rem;
	display: flex;
	flex-direction: column;
	background-color: #2f2ce9;
	align-items: center;
	background-image: linear-gradient(#7755ff, #2f2ce9);
	border-bottom-left-radius: 2rem;
	border-bottom-right-radius: 2rem;
	@media screen and (min-width: 640px) {
		padding: 2.75rem 3.375rem;
		border-radius: 2rem;

		flex-basis: 100%;
	}
`;

const StyledTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	color: #cac9ff;
`;

const StyledCircle = styled.div`
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background-image: linear-gradient(#4d21c9, transparent);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 640px) {
		width: 200px;
		height: 200px;
	}
`;

const StyledResultNumber = styled.h3`
	margin: 0;
	font-size: 3.5rem;
	font-weight: 900;
	color: white;

	@media screen and (min-width: 640px) {
		font-size: 4.5rem;
	}
`;

const StyledResultNumberTotal = styled.p`
	margin: 0;
	font-size: 1.125rem;
	color: #cac9ff;
	opacity: 0.5;
`;

const StyledResultText = styled.p`
	margin: 1.5rem 0 0.5rem;
	color: white;
	font-size: 2rem;
	font-weight: 700;
`;

const StyledResultInfo = styled.p`
	font-size: 1.125rem;
	color: #cac9ff;
	text-align: center;
`;

export {
	StyledCard,
	StyledTitle,
	StyledCircle,
	StyledResultNumber,
	StyledResultNumberTotal,
	StyledResultText,
	StyledResultInfo
};
