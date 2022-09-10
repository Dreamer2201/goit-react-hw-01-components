import PropTypes from 'prop-types';
import { Statistics } from './Statistics.styled';

export default function Section({ title, children }) {
    return <Statistics>
        {title && <h2 className="title">{title}</h2>}
        {children}
    </Statistics>
}
Section.propTypes = {
    title: PropTypes.string,
}

