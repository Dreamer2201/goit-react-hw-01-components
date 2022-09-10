import PropTypes from 'prop-types';
import { StatisticsBoard, Title} from './Statistics.styled';

export default function Section({ title, children }) {
    return <StatisticsBoard>
        {title && <Title className="title">{title}</Title>}
        {children}
    </StatisticsBoard>
}
Section.propTypes = {
    title: PropTypes.string,
}

