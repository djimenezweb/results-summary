import styled from 'styled-components';

const StyledSummaryItem = styled.article`
	background-color: ${({ bgcolor }) => bgcolor};
	display: flex;
	align-items: center;
	padding: 1rem;
	border-radius: 12px;
	margin-bottom: 1rem;
	&:last-of-type {
		margin-bottom: 1.5rem;
	}
`;

const StyledTitle = styled.h3`
	color: ${({ color }) => color};
	margin: 0 auto 0 0.75rem;
	font-size: 1rem;
	font-weight: 400;
`;

const StyledText = styled.p`
	margin: 0;
	font-weight: bold;
	color: #303b59;
`;

const StyledTotal = styled.span`
	opacity: 0.5;
`;

export { StyledSummaryItem, StyledTitle, StyledText, StyledTotal };
