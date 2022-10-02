import React, { ReactElement, useState } from 'react'
import { Button, Card, Modal } from 'antd'

interface Props {

}

export default function Modals({ }: Props): ReactElement {
    const [modalVisible, setmodalVisible] = useState({
        m1: false,
        m2: false
    })
    const { m1, m2 } = modalVisible
    const handleOpen = (name: 'm1' | 'm2') => {
        let config = {
            m1: false,
            m2: false
        }
        config[name] = true
        setmodalVisible(config)
    }
    const handleClose = (name: 'm1' | 'm2') => {
        let config = {
            m1: false,
            m2: false
        }
        setmodalVisible(config)
    }
    return (
        <div>
            <Card
                title='模态框'
            >
                <Button type='primary' onClick={() => { handleOpen('m1') }} style={{ marginRight: '10px' }}>打开</Button>
                <Button type='primary' onClick={() => { handleOpen('m2') }}>弹出</Button>
            </Card>
            <Modal
                title='确认退出？'
                open={m1}
                onCancel={() => { handleClose('m1') }}
            >
                <p>我一定能成功！</p>
            </Modal>
            <Modal
                title='确认退出？'
                open={m2}
                onCancel={() => { handleClose('m2') }}
            >
                <p>我一定能成功！</p>
            </Modal>
        </div>
    )
}
