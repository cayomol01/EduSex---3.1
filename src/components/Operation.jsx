import React from 'react';
import './Operation.scss';
import PropTypes from 'prop-types';
import useCalc from './Calc';

const sign = {
  '+': 'add',
  '-': 'sub',
  '*': 'mul',
  '/': 'div',
  '=': 'equal',
  '%': 'mod',
  '+/-': 'abs',
  C: 'c',
};

function Operation({ operation }) {
  const operate = useCalc()[1];

  const handleClick = () => {
    operate(operation);
  };

  return (
    <div className="OperationButton" id={`Button${operation}A`} style={{ gridArea: sign[operation] }}>
      <button type="button" className={sign[operation]} onClick={handleClick}>
        {operation}
      </button>
    </div>
  );
}
Operation.propTypes = {
  operation: PropTypes.string.isRequired,
};

export default Operation;
