import { summaryInfo } from '../../constants/summary';
import SummaryItem from '../summary-item/SummaryItem';
import { StyledButton, StyledCard, StyledTitle } from './styles';

const Summary = () => {
	return (
		<StyledCard>
			<StyledTitle>Summary</StyledTitle>
			{summaryInfo.map(item => {
				return <SummaryItem key={item.id} {...item} />;
			})}
			<StyledButton>Continue</StyledButton>
		</StyledCard>
	);
};

export default Summary;
