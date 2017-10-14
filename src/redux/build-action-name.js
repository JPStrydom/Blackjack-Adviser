const appName = ' Blackjack-Adviser';

export default function buildActionName(reducerName = '', actionName = '') {
    reducerName = reducerName.toString().trim();
    if (!reducerName) {
        throw new Error('Reducer name cannot be blank');
    }
    actionName = actionName.toString().trim();
    if (!actionName) {
        throw new Error('Action name cannot be blank');
    }
    return `${appName}/${reducerName}/${actionName}`;
}
