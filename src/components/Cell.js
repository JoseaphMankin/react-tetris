// youtube at 51.36. Squares not being squares, something up with styles

import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINOS} from '../tetrominos';

const Cell = ({type}) => (
    <StyledCell type={'I'} color={TETROMINOS["I"].color}/>
)

export default Cell;