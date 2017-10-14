import { combineReducers } from 'redux';

import BlackjackAdviserReducer from '../components/sudoku-board/blackjack-adviser-reducer';

const rootReducer = combineReducers({
    cards: BlackjackAdviserReducer
});

export default rootReducer;
