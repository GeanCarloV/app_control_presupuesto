import React from 'react';
import Gasto from './Gastos';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gastoss => ( 
            <Gasto 
                key= {gastoss.id}
                gasto = {gastoss}
            />
        ))}
    </div>
 );

 Listado.propTypes = { 
     gastos: PropTypes.array.isRequired
 }

export default Listado;