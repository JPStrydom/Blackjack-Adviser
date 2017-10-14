import React from 'react';
import { Component } from 'react';

import BlackjackAdviser from './sudoku-board/blackjack-adviser-container';

const consoleWelcomeMessage =
    '\n\n _    _      _                            _____      ______ _            _    _            _       ___      _       _               \n' +
    '| |  | |    | |                          |_   _|     | ___ \\ |          | |  (_)          | |     / _ \\    | |     (_)              \n' +
    '| |  | | ___| | ___ ___  _ __ ___   ___    | | ___   | |_/ / | __ _  ___| | ___  __ _  ___| | __ / /_\\ \\ __| |_   ___ ___  ___ _ __ \n' +
    "| |/\\| |/ _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\   | |/ _ \\  | ___ \\ |/ _` |/ __| |/ / |/ _` |/ __| |/ / |  _  |/ _` \\ \\ / / / __|/ _ \\ '__|\n" +
    '\\  /\\  /  __/ | (_| (_) | | | | | |  __/   | | (_) | | |_/ / | (_| | (__|   <| | (_| | (__|   <  | | | | (_| |\\ V /| \\__ \\  __/ |   \n' +
    ' \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|   \\_/\\___/  \\____/|_|\\__,_|\\___|_|\\_\\ |\\__,_|\\___|_|\\_\\ \\_| |_/\\__,_| \\_/ |_|___/\\___|_|   \n' +
    '                                                                            _/ |                                                    \n' +
    '                                                                           |__/                                                     \n\n';

export default class App extends Component {
    render() {
        console.log(consoleWelcomeMessage);
        return (
            <div>
                <BlackjackAdviser />
            </div>
        );
    }
}
