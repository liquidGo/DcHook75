import React, { ReactElement } from 'react'
import { Card, Button } from 'antd'

interface Props {

}

export default function Buttons({ }: Props): ReactElement {
    return (
        <div className='ButtonPage'>
            <Card
                title='基础按钮'
            >
                <Button type='primary' >按钮</Button>

            </Card>
            <Card
                title='基础按钮'
            >
                <Button type='primary' >按钮</Button>

            </Card>
            <Card
                title='基础按钮'
            >
                <Button type='primary' >按钮</Button>

            </Card>
            <Card
                title='基础按钮'
            >
                <Button type='primary' >按钮</Button>

            </Card>
        </div>
    )
}
