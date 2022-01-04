import React, { Fragment, Suspense } from 'react'
import Header from './Header'

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <Suspense fallback={null}>
                <div className='general-container'>
                    {children}
                </div>
            </Suspense>
        </Fragment>
    )
}

export default Layout
