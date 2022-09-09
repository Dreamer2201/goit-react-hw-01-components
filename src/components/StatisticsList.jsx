import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

export default function StatisticsList({items}) {
    return (
        <ul class="stat-list">
            {items.map(item => (
                <li key={item.id}>
                    <StatisticsItem
                        label={item.label}
                        percentage={item.percentage}
                    />
                </li>
            ))}
        </ul>
    );
}
StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}