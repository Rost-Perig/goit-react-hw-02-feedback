import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ state }) => {
    const { good, neutral, bad, total, posFeedback, isActivated } = state;
    return (
        !isActivated ?
            (
                <p className={s.noGiven}>No feedback given</p>
            ) :
            (
                <ul className={s.list}>
                    <li className={s.listItem}>Good: {good}</li>
                    <li className={s.listItem}>Neutral: {neutral}</li>
                    <li className={s.listItem}>Bad: {bad}</li>
                    <li className={s.listItem}>Total: {total}</li>
                    <li className={s.listItem}>Positive feedback: {posFeedback}%</li>
                </ul>
            )
    );
    
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    posFeedback: PropTypes.number,
    isActivated: PropTypes.bool
}

export default Statistics;