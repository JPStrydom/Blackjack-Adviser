import { combineReducers } from 'redux';

import BlackjackAdviserReducer from '../components/blackjack-adviser/blackjack-adviser-reducer';

const rootReducer = combineReducers({
    cards: BlackjackAdviserReducer
});

export default rootReducer;
