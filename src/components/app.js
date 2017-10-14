import React from 'react';
import { Component } from 'react';

import BlackjackAdviser from './sudoku-board/blackjack-adviser-container';

const consoleWelcomeMessage =
    '\n\n __          __  _                            _           _____           _       _                     _____ \n' +
    ' \\ \\        / / | |                          | |         / ____|         | |     | |              /\\   |_   _|\n' +
    '  \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___  | |_ ___   | (___  _   _  __| | ___ | | ___   _     /  \\    | |  \n' +
    "   \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\ | __/ _ \\   \\___ \\| | | |/ _` |/ _ \\| |/ / | | |   / /\\ \\   | |  \n" +
    '    \\  /\\  /  __/ | (_| (_) | | | | | |  __/ | || (_) |  ____) | |_| | (_| | (_) |   <| |_| |  / ____ \\ _| |_ \n' +
    '     \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|  \\__\\___/  |_____/ \\__,_|\\__,_|\\___/|_|\\_\\\\__,_| /_/    \\_\\_____|\n' +
    '                                                                                                              \n\n';

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
