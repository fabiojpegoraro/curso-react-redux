import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Soma = props => {

    const {min, max} = props

    return (
        <Card title='Soma dos Números' blue>
            <div>
            <span>
                <span>Resultado:</span>
                <strong>{min + max}</strong>
            </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numerosMin.min,
        max: state.numerosMax.max
    }
}

export default connect(mapStateToProps)(Soma);