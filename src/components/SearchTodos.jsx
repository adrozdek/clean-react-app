import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import './../App.css';

class SearchTodos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    setFilter(text) {
        if (text !== '') {
            this.setState({text})
            this.props.setVisibilityFilter(text)
        } else {
            this.setState({text: ''})
            this.props.setVisibilityFilter('SHOW_ALL')
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.visibilityFilter !== this.state.text;
    }

    componentWillUpdate = (nextProps, nextState) => {
        if (this.state.text !== '') {
            if (nextProps.visibilityFilter !== nextState.text) {
                 this.setState({text: ''})
            }
        }
    }

    render() {
        return (
            <div className="form-inline search-form">
                <div className="form-group search-input">
                    <span className="search-label">Search:</span>
                    <input
                        className="form-control"
                        placeholder="Search todo"
                        value={this.state.text}
                        onChange={event => this.setFilter(event.target.value)}
                    />
                    {this.state.text !== '' ?
                        <div className="active-search">
                        <span
                            className="delete"
                            onClick={() => this.setFilter('')}>
                            x
                        </span>
                        </div>
                        : '' }
                </div>
                {this.state.text !== '' ?
                    <div>
                        <span className="found-todos">{this.props.results} todos found</span>
                    </div>
                    : '' }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(mapStateToProps, {setVisibilityFilter})(SearchTodos);

