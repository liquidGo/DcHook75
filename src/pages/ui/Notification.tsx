import React, { ReactElement } from 'react'
import { Button, Card, notification, Space } from 'antd'

interface Props {

}

export default function Notification({ }: Props): ReactElement {
    const handleClick = (state: 'success' | 'info' | 'warning' | 'error') => {
        notification[state]({
            message: `${state}`,
            description: `弹出${state}成功！`
        })
    }
    return (
        <div>
            <Card>
                <div className="card-content">
                    <Button onClick={() => { handleClick('success') }}>success</Button>
                    <Button onClick={() => { handleClick('error') }}>error</Button>
                    <Button onClick={() => { handleClick('info') }}>info</Button>
                    <Button onClick={() => { handleClick('warning') }}>warning</Button>
                </div>
            </Card>
        </div>
    )
}
