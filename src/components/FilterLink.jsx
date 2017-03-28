import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from './Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.type === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLinkClick: () => {
            dispatch(setVisibilityFilter(ownProps.type))
        }
    }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink