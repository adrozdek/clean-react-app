import React, { PropTypes } from 'react'

const Link = ({ active, children, onLinkClick }) => {
    if (active) {
        return <span className="footer-link">{children}</span>
    }

    return (
        <a className="footer-link" href="#"
           onClick={e => {
           e.preventDefault()
           onLinkClick()
       }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
    onLinkClick: PropTypes.func.isRequired
}

export default Link