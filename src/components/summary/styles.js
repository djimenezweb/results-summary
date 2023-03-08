import styled from 'styled-components';

const StyledCard = styled.article`
	padding: 2rem;
	@media screen and (min-width: 640px) {
		flex-basis: 100%;
	}
`;

const StyledTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	color: #303b59;
`;

const StyledButton = styled.a`
	display: block;
	background-color: #303b59;
	text-align: center;
	padding: 1em;
	font-size: 18px;
	color: white;
	border-radius: 2rem;
`;

export { StyledCard, StyledTitle, StyledButton };
