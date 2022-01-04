import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Alert } from 'antd';
import requester from "../../helpers/httpRequester";

function Login() {
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onFinish = async (values) => {
        setIsLoading(true)
        errorMsg && setErrorMsg("")

        await requester.get(`/users?email=${values.email}&password=${values.password}`).then(response => {
            console.log(response, "login response");
            if (response.data?.length > 0) {
                localStorage.setItem("authUser", JSON.stringify({
                    email: response.data[0].email,
                    id: response.data[0].id
                }));
                history.push("/")
            } else {
                setErrorMsg("email or password are incorrect")
            }
        }).catch(error => {
            setErrorMsg("please connect to the server")
        })

        setIsLoading(false)
    };

    return (
        <div className={styles.auth}>
            <h2 className={styles.auth__header}>Welcome Back</h2>
            {errorMsg && <Alert message={errorMsg} type="error" />}
            <Form
                name="login"
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    className={styles.auth__field}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: 'email',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading} style={{ width: "100%" }}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
