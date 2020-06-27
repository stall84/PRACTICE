import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ScoreBoard extends Component {
    render() {
        return (
            <div>
                <h1>SCORE BOARD:</h1>
                <h3>{this.props.score}</h3>
                <h3>{this.props.players[0].name}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(ScoreBoard)
