import React, { ReactElement } from 'react'
import { message, Button, Card } from 'antd'

interface Props {

}

export default function Messages({ }: Props): ReactElement {
    const handleClick = (state: 'success' | 'error' | 'warning') => {
        message[state](`当前状态${state}`)
    }
    return (
        <div>
            <Card
                title={'message信息'}
            >
                <Button onClick={() => { handleClick('success') }}>success</Button>
                <Button onClick={() => { handleClick('error') }}>error</Button>
                <Button onClick={() => { handleClick('warning') }}>warning</Button>
            </Card>
        </div>
    )
}
