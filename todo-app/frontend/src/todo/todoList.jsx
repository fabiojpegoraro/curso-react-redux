import React from "react";
import {connect} from 'react-redux';
import IconButton from "../template/iconButton";
import '../template/custom.css';

import { changeTask } from "./todoActions";
import { bindActionCreators } from "redux";

const TodoList =  props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone': 'markedAsPending'}>{todo.description}</td>
                    <td>
                        <IconButton
                            style='success'
                            icon='check'
                            hide={todo.done}
                            onClick={() => props.changeTask('DONE', todo)}></IconButton>
                        <IconButton
                            style='warning'
                            icon='undo'
                            hide={!todo.done}
                            onClick={() => props.changeTask('PENDING', todo)}></IconButton>
                        <IconButton
                            style='danger'
                            icon='trash-o'
                            hide={!todo.done}
                            onClick={() => props.handleRemove(todo)}></IconButton>
                    </td>
                </tr>
            ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
                <tbody>
                    {renderRows()}
                </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = dispatch => bindActionCreators({changeTask}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);