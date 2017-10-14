import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateCard, analyse } from './blackjack-adviser-reducer';
import BlackjackAdviserView from './blackjack-adviser-view';

function mapStateToProps({ cards }) {
    return { cards };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            updateCard,
            analyse
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BlackjackAdviserView);
