import React from 'react';
import './Number.scss';
import PropTypes from 'prop-types';
import useCalc from './Calc';

const lista = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'dot'];

function Number({ digit }) {
  let digito;
  if (digit === 10) {
    digito = '.';
  } else {
    digito = digit;
  }

  const addNumber = useCalc()[0];

  const handleClick = () => {
    addNumber(digito);
  };

  return (
    <div className="NumberButton" id={`Button${digito}`} style={{ gridArea: lista[digito] }}>
      <button type="button" onClick={handleClick}>
        {digito}
      </button>
    </div>
  );
}

Number.propTypes = {
  digit: PropTypes.number.isRequired,
};
export default Number;
