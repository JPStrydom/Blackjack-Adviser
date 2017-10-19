import { calculateCardValue, calculateSplitAdvice } from '../blackjack-adviser';
import images from '../image-link';

const cardNames = [
    'an Ace',
    'a Two',
    'a Three',
    'a Four',
    'a Five',
    'a Six',
    'a Seven',
    'an Eight',
    'a Nine',
    'a Ten',
    'a Jack',
    'a Queen',
    'a King'
];

describe('Blackjack Adviser', () => {
    describe('Calculate Card Value', () => {
        it('should return 0 for an undefined card', () => {
            expect(calculateCardValue(images.background.blue)).toEqual(0);
            expect(calculateCardValue(images.background.red)).toEqual(0);
        });
        for (let i = 0; i < 13; i++) {
            it(`should return ${i >= 10 ? 10 : i ? i + 1 : 11} for ${cardNames[i]}`, () => {
                expect(calculateCardValue(images.clubs[i])).toEqual(i >= 10 ? 10 : i ? i + 1 : 11);
                expect(calculateCardValue(images.hearts[i])).toEqual(i >= 10 ? 10 : i ? i + 1 : 11);
            });
        }
    });

    describe('Calculate Split Advice', () => {
        it('should return undefined for undefined cards', () => {
            expect(calculateSplitAdvice()).toEqual(undefined);
        });

        it('should return undefined for non-pair cards', () => {
            expect(calculateSplitAdvice(images.clubs[1], images.clubs[2], images.hearts[3])).toEqual(undefined);
        });

        //TODO: Add more split tests
    });

    //TODO: Add soft total tests

    //TODO: Add hard total tests
});
