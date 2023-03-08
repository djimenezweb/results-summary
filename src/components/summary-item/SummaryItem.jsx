import {
	StyledSummaryItem,
	StyledText,
	StyledTitle,
	StyledTotal
} from './styles';

const SummaryItem = ({ title, total, color, bgcolor, icon }) => {
	return (
		<StyledSummaryItem bgcolor={bgcolor}>
			<img src={`assets/images/${icon}`} />
			<StyledTitle color={color}>{title}</StyledTitle>
			<StyledText>
				{total}
				<StyledTotal> / 100</StyledTotal>
			</StyledText>
		</StyledSummaryItem>
	);
};

export default SummaryItem;
