import React, { Component } from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import image from './utilities/image-link';

export default class BlackjackAdviserView extends Component {
    constructor(props) {
        super(props);

        this.renderCards = this.renderCards.bind(this);
        this.renderUserCards = this.renderUserCards.bind(this);
        this.renderDealerCard = this.renderDealerCard.bind(this);
        this.renderAdvice = this.renderAdvice.bind(this);
        this.renderGitHubLink = this.renderGitHubLink.bind(this);
        this.handleCardChange = this.handleCardChange.bind(this);
    }

    render() {
        document.title = 'Blackjack Adviser';
        return (
            <div className="page-container">
                <h1 className="heading">{document.title}</h1>
                {this.renderCards()}
                {this.renderAdvice()}
                {this.renderGitHubLink()}
            </div>
        );
    }

    renderCards() {
        return (
            <div className="cards-container">
                {this.renderUserCards()}
                {this.renderDealerCard()}
            </div>
        );
    }

    renderUserCards() {
        const { type, userCard1, userCard2, showUserCards1, showUserCards2 } = this.props.cards;
        return (
            <div>
                <h3 className="heading">User Cards</h3>
                <Dropdown active={showUserCards1}>
                    <DropdownTrigger>
                        <img
                            className="image"
                            src={userCard1}
                            onClick={this.handleCardChange(type.user1, image.background.blue)}
                        />
                    </DropdownTrigger>
                    <DropdownContent>
                        {image.clubs.map(card => (
                            <img
                                key={`${type.user1}${card}`}
                                className="image-secondary"
                                onClick={this.handleCardChange(type.user1, card)}
                                src={card}
                            />
                        ))}
                    </DropdownContent>
                </Dropdown>
                <Dropdown active={showUserCards2}>
                    <DropdownTrigger>
                        <img
                            className="image"
                            src={userCard2}
                            onClick={this.handleCardChange(type.user2, image.background.blue)}
                        />
                    </DropdownTrigger>
                    <DropdownContent>
                        {image.clubs.map(card => (
                            <img
                                key={`${type.user2}${card}`}
                                className="image-secondary"
                                onClick={this.handleCardChange(type.user2, card)}
                                src={card}
                            />
                        ))}
                    </DropdownContent>
                </Dropdown>
            </div>
        );
    }

    renderDealerCard() {
        const { type, dealerCard, showDealerCards } = this.props.cards;
        return (
            <div>
                <h3 className="heading">Dealer Card</h3>
                <Dropdown active={showDealerCards}>
                    <DropdownTrigger>
                        <img
                            className="image"
                            src={dealerCard}
                            onClick={this.handleCardChange(type.dealer, image.background.red)}
                        />
                    </DropdownTrigger>
                    <DropdownContent>
                        {image.hearts.map(card => (
                            <img
                                key={`${type.dealer}${card}`}
                                className="image-secondary"
                                onClick={this.handleCardChange(type.dealer, card)}
                                src={card}
                            />
                        ))}
                    </DropdownContent>
                </Dropdown>
            </div>
        );
    }

    renderAdvice() {
        const { advice } = this.props.cards;
        let component;
        if (advice) {
            component = (
                <div className="advice-card-container">
                    <div className="advice-card">
                        <h4 className={`advice-text ${advice ? advice.toLowerCase() : ''}`}>{advice}</h4>
                    </div>
                </div>
            );
        }
        return <ReactCSSTransitionGroup transitionName="advice">{component}</ReactCSSTransitionGroup>;
    }

    renderGitHubLink() {
        return (
            <div className="github-link-container">
                <a className="github-link" href="https://github.com/JPStrydom/Blackjack-Adviser.git">
                    Project GitHub Repository
                </a>
            </div>
        );
    }

    handleCardChange(type, card) {
        const updateCard = this.props.updateCard;
        return function() {
            updateCard(type, card);
        };
    }
}
