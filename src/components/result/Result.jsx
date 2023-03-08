import {
	StyledCircle,
	StyledResultNumber,
	StyledTitle,
	StyledResultNumberTotal,
	StyledCard,
	StyledResultText,
	StyledResultInfo
} from './styles';

const Result = () => {
	return (
		<StyledCard>
			<StyledTitle>Your Result</StyledTitle>
			<StyledCircle>
				<StyledResultNumber>76</StyledResultNumber>
				<StyledResultNumberTotal>of 100</StyledResultNumberTotal>
			</StyledCircle>
			<StyledResultText>Great</StyledResultText>
			<StyledResultInfo>
				Your performance exceed 65% of the people conducting the test here!
			</StyledResultInfo>
		</StyledCard>
	);
};

export default Result;
