import React, {Component} from "react";
import {connect} from 'react-redux';
import Grid from '../template/grid';
import Grid2 from '../template/grid2';
import IconButton from '../template/iconButton';

import { bindActionCreators } from "redux";

import { changeDescription, search, addTask, clearForm} from "./todoActions";

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const {addTask, description, search, clearForm} = this.props;
        if(e.key === 'Enter'){
            e.shiftKey ? search() : addTask(description)
        } else if(e.key ==='Escape'){
            clearForm();
        }
    }

    render() {
            const {addTask, description, search, clearForm} = this.props;
            return (
            <div role='form' className='todoForm'>
            <Grid2 cols='12 9 10'>
                <input id='description' 
                    className='form-control' 
                    placeholder='Adicione uma tarefa' 
                    value={this.props.description}
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandler}>
                </input>
            </Grid2>
            <Grid2 cols='12 3 2'>
                <IconButton 
                    hide={false} 
                    style='primary' 
                    icon='plus' 
                    onClick={() => addTask(description)}/>
                <IconButton 
                    hide={false} 
                    style='info' 
                    icon='search' 
                    onClick={search}/>
                            <IconButton 
                    hide={false} 
                    style='default' 
                    icon='close' 
                    onClick={clearForm}/>
            </Grid2>
        </div>
        )
    }

}


const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, addTask, clearForm}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
