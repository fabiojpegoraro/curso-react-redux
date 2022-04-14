import React from "react";
import Grid from '../template/grid';
import Grid2 from '../template/grid2';
import IconButton from '../template/iconButton';

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key ==='Escape'){
            props.handleClearForm();
        }
    }

    return(
        <div role='form' className='todoForm'>
            <Grid2 cols='12 9 10'>
                <input id='description' 
                    className='form-control' 
                    placeholder='Adicione uma tarefa' 
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}>
                </input>
            </Grid2>
            <Grid2 cols='12 3 2'>
                <IconButton 
                    hide={false} 
                    style='primary' 
                    icon='plus' 
                    onClick={props.handleAdd}/>
                <IconButton 
                    hide={false} 
                    style='info' 
                    icon='search' 
                    onClick={props.handleSearch}/>
                            <IconButton 
                    hide={false} 
                    style='default' 
                    icon='close' 
                    onClick={props.handleClearForm}/>
            </Grid2>
        </div>
    )
}