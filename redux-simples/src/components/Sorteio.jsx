import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Sorteio = props => {

    const {min, max} = props;
    const aleatorio = Math.floor(Math.random() * (max - min) + min);

    return (
        <Card title='Sorteio de um Número' purple>
            <div>
            <span>
                <span>Resultado:</span>
                <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio);