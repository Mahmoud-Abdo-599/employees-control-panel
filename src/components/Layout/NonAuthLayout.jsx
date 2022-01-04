import React from 'react'
import "./styles.scss";

function NonAuthLayout({ children }) {
    return (
        <div className="nonAuthLayout">
            {children}
        </div>
    )
}

export default NonAuthLayout
