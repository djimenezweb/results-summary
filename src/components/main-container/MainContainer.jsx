import Result from '../result/Result';
import Summary from '../summary/Summary';
import { StyledMainContainer } from './styles';

const MainContainer = () => {
	return (
		<StyledMainContainer>
			<Result />
			<Summary />
		</StyledMainContainer>
	);
};

export default MainContainer;
