import PropTypes from 'prop-types';
import { StatsItem } from './Statistics.styled';

export default function StatisticsItem(props) {
    const { label, percentage } = props;
    return <StatsItem className="item" >
      <span className="label" type={label} >{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatsItem>
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}