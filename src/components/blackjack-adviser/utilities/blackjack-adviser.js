import images from './image-link';

function calculateCardValue(card) {
    for (let i = 0; i < 13; i++) {
        if (card === images.clubs[i] || card === images.hearts[i]) {
            return Math.round((i+1) / 10) * 10;
        }
    }
}