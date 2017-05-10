import React from 'react';
import {connect} from 'react-redux';

import {NewGame, ToggleModal} from '../actions';

export class TopNav extends React.Component {
    newGame(event) {
        event.preventDefault();
        this.props.dispatch(NewGame());
    }

    ToggleModal(event) {
        event.preventDefault();
        this.props.dispatch(ToggleModal());
    }


    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.ToggleModal(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.newGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);