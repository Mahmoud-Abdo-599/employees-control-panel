import React, { Suspense } from 'react'
import "./styles.scss";
import AuthModuleFallback from "../Fallbacks/AuthModuleFallback";

function NonAuthLayout({ children }) {
    return (
        <div className="nonAuthLayout">
            <Suspense fallback={<AuthModuleFallback />}>
                {children}
            </Suspense>
        </div>
    )
}

export default NonAuthLayout
