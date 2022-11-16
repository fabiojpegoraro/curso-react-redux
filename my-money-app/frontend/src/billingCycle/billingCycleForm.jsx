import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LabelAndInput from "../common/form/labelAndInput";
import { init } from './billingCycleActions';
import ItemList from './itemList';
import Summary from "./summary";

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props;

        const totalCredits = credits.map(credit => Number(credit.value) || 0).reduce((valueInicial, valueFinal) => valueInicial + valueFinal);
        const totalDebts = debts.map(debt => Number(debt.value) || 0).reduce((valueInicial, valueFinal) => valueInicial + valueFinal);

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={LabelAndInput} readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' type='number'/>
                    <Field name='year' component={LabelAndInput} readOnly={readOnly}
                    label='Ano' cols='12 4' placeholder='Informe o ano' type='number'/>
                    <Summary credit={totalCredits} debt={totalDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({
        credits: selector(state, 'credits'),
        debts: selector(state, 'debts')
    });
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);