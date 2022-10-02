import React, { ReactElement, useState } from 'react'
import { Alert, Spin, Card, Switch } from 'antd'

interface Props {

}

export default function Loading({ }: Props): ReactElement {
    const [loading, setloading] = useState<boolean>(false);
    const toggle = (checked: boolean) => {
        setloading(checked)
    }
    return (
        <div>
            <Card title={'Loading'}>
                <Spin spinning={loading} delay={500} tip={'正在加载'}>
                    <Alert
                        type='info'
                        message='好好学习'
                        
                        description='天天向上'
                    ></Alert>
                </Spin>
                <Switch checked={loading} onChange={toggle}></Switch>
            </Card>
        </div>
    )
}
