import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    //extraccion de valores
    const {name,  main} = resultado;

    if(!name) return null;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {main.temp}<span>&#x2103;</span>
                </p>
                <p>Temperatura Máxima:
                    {main.temp_max}<span>&#x2103;</span>
                </p>
                <p>Temperatura Mínima: 
                    { main.temp_min}<span>&#x2103;</span>
                </p>
            </div>
        </div>
     );
}
Clima.propTypes = {
    resultado: PropTypes.object.isRequired}
export default Clima;