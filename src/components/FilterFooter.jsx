import React, {Component} from 'react'
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import FilterLink from './FilterLink';

class FilterFooter extends Component {

    render() {
        return (
            <div className="footer">
                <FilterLink type={'SHOW_ALL'} onLinkClick={this.props.setVisibilityFilter}>Show&nbsp;All</FilterLink>
                <FilterLink type={'SHOW_ACTIVE'} onLinkClick={this.props.setVisibilityFilter}>Show&nbsp;active</FilterLink>
                <FilterLink type={'SHOW_COMPLETED'} onLinkClick={this.props.setVisibilityFilter}>Show&nbsp;completed</FilterLink>
            </div>
        )
    }
}

export default connect(null, {setVisibilityFilter})(FilterFooter);