import React, { Fragment, Suspense } from 'react';
import Header from './Header';
import ModulesFallBack from "../Fallbacks/ModulesFallBack";

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className='general-container'>
                <Suspense fallback={<ModulesFallBack />}>
                    {children}
                </Suspense>
            </div>
        </Fragment>
    )
}

export default Layout
