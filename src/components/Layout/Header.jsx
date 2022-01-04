import React from 'react'
import "./styles.scss";
import { PageHeader, Button } from 'antd';
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("authUser");
        history.push("/login");
    }

    const userData = JSON.parse(localStorage.getItem("authUser"))

    return (
        <div className="header">
            <PageHeader
                subTitle={userData.email}
                className="general-container"
                extra={[
                    <Button key="0" type='primary'>History</Button>,
                    <Button key="1" onClick={logout}>Logout</Button>,
                ]}
                avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
            />
        </div>
    )
}

export default Header
