import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    return <div>
        {title && <h2 class="title">{title}</h2>}
        {children}
    </div>
}


