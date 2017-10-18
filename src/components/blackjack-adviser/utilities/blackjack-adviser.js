import images from './image-link';

export const advice = {
    split: 'Split',
    stay: 'Stay',
    double: 'Double',
    hit: 'Hit',
    blackjack: 'Blackjack'
};

export function calculateCardValue(card) {
    for (let i = 0; i < 13; i++) {
        if (card === images.clubs[i] || card === images.hearts[i]) {
            return i >= 10 ? 10 : i ? i + 1 : 11;
        }
    }
    return 0;
}

export function calculateSplitAdvice(userCard1, userCard2, dealerCard) {
    userCard1 = calculateCardValue(userCard1);
    userCard2 = calculateCardValue(userCard2);
    dealerCard = calculateCardValue(dealerCard);
    if (!userCard1 || !userCard2 || !dealerCard || userCard1 !== userCard2) {
        return;
    }
    switch (userCard1) {
        case 2 || 3 || 7:
            return dealerCard <= 7;
        case 4 || 5 || 10:
            return false;
        case 6:
            return dealerCard <= 6;
        case 8 || 11:
            return true;
        case 9:
            return dealerCard <= 9 && dealerCard !== 7;
    }
}

export function calculateSoftAdvice(userCard1, userCard2, dealerCard) {
    userCard1 = calculateCardValue(userCard1);
    userCard2 = calculateCardValue(userCard2);
    dealerCard = calculateCardValue(dealerCard);
    if (!userCard1 || !userCard2 || !dealerCard) {
        return;
    }
    if (userCard1 !== 11 && userCard2 !== 11) {
        return;
    }

    const card = userCard1 === 11 ? userCard1 : userCard2;

    switch (card) {
        case 2 || 3:
            if (dealerCard === 5 || dealerCard === 6) {
                return advice.double;
            }
            return advice.hit;
        case 4 || 5:
            if (dealerCard >= 4 && dealerCard <= 6) {
                return advice.double;
            }
            return advice.hit;
        case 6:
            if (dealerCard >= 3 && dealerCard <= 6) {
                return advice.double;
            }
            return advice.hit;
        case 7:
            if (dealerCard <= 6) {
                return advice.double;
            } else if (dealerCard <= 8) {
                return advice.stay
            }
            return advice.hit;
        case 8 || 9:
            return advice.stay;
        case 10:
            return advice.blackjack;
    }
}
