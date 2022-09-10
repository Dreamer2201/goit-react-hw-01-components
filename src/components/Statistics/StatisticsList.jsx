import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import { StatsList } from './Statistics.styled';

export default function StatisticsList({items}) {
    return (
        <StatsList className="stat-list">
            {items.map(item => (
                    <StatisticsItem key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
            ))}
        </StatsList>
    );
}
StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}