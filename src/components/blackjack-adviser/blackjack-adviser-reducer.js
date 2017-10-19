import buildActionName from '../../redux/build-action-name';
import image from './utilities/image-link';

export const cardType = {
    user1: 'u1',
    user2: 'u2',
    dealer: 'd',
    blueBack: 'bb',
    redBack: 'rb'
};

const reducerName = 'blackjackAdviserReducer';

const UPDATE_USER_CARD_1 = buildActionName(reducerName, 'UPDATE_USER_CARD_1');
const UPDATE_USER_CARD_2 = buildActionName(reducerName, 'UPDATE_USER_CARD_2');
const UPDATE_DEALER_CARD = buildActionName(reducerName, 'UPDATE_DEALER_CARD');
const UPDATE_SHOW_USER_CARDS_1 = buildActionName(reducerName, 'UPDATE_SHOW_USER_CARDS_1');
const UPDATE_SHOW_USER_CARDS_2 = buildActionName(reducerName, 'UPDATE_SHOW_USER_CARDS_2');
const UPDATE_SHOW_DEALER_CARDS = buildActionName(reducerName, 'UPDATE_SHOW_DEALER_CARDS');
const UPDATE_ADVICE = buildActionName(reducerName, 'UPDATE_ADVICE');

function getInitialState() {
    return {
        type: cardType,
        userCard1: image.background.blue,
        userCard2: image.background.blue,
        dealerCard: image.background.red,
        showUserCards1: false,
        showUserCards2: false,
        showDealerCards: false,
        advice: null
    };
}

export function updateCard(type, card) {
    return function(dispatch) {
        switch (type) {
            case cardType.user1:
                dispatch(updateUserCard1Action(card));
                dispatch(toggleShowCards(type));
                break;
            case cardType.user2:
                dispatch(updateUserCard2Action(card));
                dispatch(toggleShowCards(type));
                break;
            case cardType.dealer:
                dispatch(updateDealerCardAction(card));
                dispatch(toggleShowCards(type));
                break;
        }
    };
}

export function toggleShowCards(type) {
    return function(dispatch, getState) {
        const { showUserCards1, showUserCards2, showDealerCards } = getState().cards;
        switch (type) {
            case cardType.user1:
                dispatch(updateShowUserCard1Action(!showUserCards1));
                break;
            case cardType.user2:
                dispatch(updateShowUserCard2Action(!showUserCards2));
                break;
            case cardType.dealer:
                dispatch(updateShowDealerCardAction(!showDealerCards));
                break;
        }
    };
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

function updateShowUserCard1Action(payload) {
    return {
        type: UPDATE_SHOW_USER_CARDS_1,
        payload
    };
}

function updateShowUserCard2Action(payload) {
    return {
        type: UPDATE_SHOW_USER_CARDS_2,
        payload
    };
}

function updateShowDealerCardAction(payload) {
    return {
        type: UPDATE_SHOW_DEALER_CARDS,
        payload
    };
}

function updateAdviceAction(payload) {
    return {
        type: UPDATE_ADVICE,
        payload
    };
}

export default function BlackjackAdviserReducer(state = getInitialState(), action) {
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
        case UPDATE_SHOW_USER_CARDS_1:
            return {
                ...state,
                showUserCards1: action.payload,
                showUserCards2: false,
                showDealerCards: false
            };
        case UPDATE_SHOW_USER_CARDS_2:
            return {
                ...state,
                showUserCards1: false,
                showUserCards2: action.payload,
                showDealerCards: false
            };
        case UPDATE_SHOW_DEALER_CARDS:
            return {
                ...state,
                showUserCards1: false,
                showUserCards2: false,
                showDealerCards: action.payload
            };
        case UPDATE_ADVICE:
            return {
                ...state,
                advice: action.payload
            };
    }
    return state;
}
