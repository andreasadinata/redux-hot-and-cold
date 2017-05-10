import React from 'react';
import {connect} from 'react-redux';
import {MakeGuess} from '../actions';

export class GuessForm extends React.Component {
  SubmitGuess(event){
    event.preventDefault();
    const value = this.input.value;
    this.props.dispatch(MakeGuess(value))
  }
    render() {
        return (
            <form onSubmit={e => this.SubmitGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    guessCount: state.guesses.length,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(GuessForm);
