import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

export default function StatisticsList({items}) {
    return (
        <ul className="stat-list">
            {items.map(item => (
                    <StatisticsItem key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
            ))}
        </ul>
    );
}
StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}