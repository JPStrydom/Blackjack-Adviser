import buildActionName from '../../redux/build-action-name';
import image from './utilities/image-link';

export const cardType = {
    user1: 'u1',
    user2: 'u2',
    dealer: 'd'
};

const reducerName = 'blackjackAdviserReducer';

const UPDATE_USER_CARD_1 = buildActionName(reducerName, 'UPDATE_USER_CARD_1');
const UPDATE_USER_CARD_2 = buildActionName(reducerName, 'UPDATE_USER_CARD_2');
const UPDATE_DEALER_CARD = buildActionName(reducerName, 'UPDATE_DEALER_CARD');
const UPDATE_ADVICE = buildActionName(reducerName, 'UPDATE_ADVICE');

function getInitialState() {
    return {
        type: cardType,
        userCard1: image.background.blue,
        userCard2: image.background.blue,
        dealerCard: image.background.red,
        advice: null
    };
}

export function updateCard(type, card) {
    switch (type) {
        case cardType.user1:
            return updateUserCard1Action(card);
        case cardType.user2:
            return updateUserCard2Action(card);
        case cardType.dealer:
            return updateDealerCardAction(card);
    }
}

export function analyse() {
    return (dispatch, getState) => {
        dispatch(updateAdviceAction());
    };
}

function updateUserCard1Action(payload) {
    return {
        type: UPDATE_USER_CARD_1,
        payload
    };
}

function updateUserCard2Action(payload) {
    return {
        type: UPDATE_USER_CARD_2,
        payload
    };
}

function updateDealerCardAction(payload) {
    return {
        type: UPDATE_DEALER_CARD,
        payload
    };
}

function updateAdviceAction(payload) {
    return {
        type: UPDATE_ADVICE,
        payload
    };
}

export default function SudokuBoardReducer(state = getInitialState(), action) {
    switch (action.type) {
        case UPDATE_USER_CARD_1:
            return {
                ...state,
                userCard1: action.payload
            };
        case UPDATE_USER_CARD_2:
            return {
                ...state,
                userCard2: action.payload
            };
        case UPDATE_DEALER_CARD:
            return {
                ...state,
                dealerCard: action.payload
            };
        case UPDATE_ADVICE:
            return {
                ...state,
                advice: action.payload
            };
    }
    return state;
}
