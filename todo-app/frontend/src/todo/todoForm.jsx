import React from "react";
import Grid from '../template/grid';
import Grid2 from '../template/grid2';
import IconButton from '../template/iconButton';

export default props => (
    <div role='form' class='todoForm'>
        <Grid2 cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'></input>
        </Grid2>
        <Grid2 cols='12 3 2'>
            <IconButton hide={false} style='primary' icon='plus' />
        </Grid2>
    </div>
)