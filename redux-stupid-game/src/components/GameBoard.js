import React, { Component } from 'react';
import { connect } from 'react-redux';





export class GameBoard extends Component {



    win = () => {
        this.props.win()
    }

    lose = () => {
       this.props.lose()
    }

    render() {
        return (
            <div>
                <h1>Gameboard</h1>
                <button onClick={this.win} >YOU WIN!</button>
                <button onClick={this.lose} >YOU LOSE!</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        win: () => {
            return dispatch({type: 'YOU_WIN'})
        },
        lose: () => {
            return dispatch({type: 'YOU_LOSE'})
        }
    }
    }


export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)
