import React, { ReactElement } from 'react'

import { Layout } from 'antd'
import NavLeft from '@/components/NavLeft/index'
import NavHeader from '@/components/NavHeader'
const { Sider, Header, Content, Footer } = Layout

interface Props {

}

export default function index(props: any): ReactElement {
    return (
        <Layout>
            <Sider
                style={{ height: '100vh' }}
                width={200}
                collapsedWidth={0}
                breakpoint={'lg'}
            >
                <NavLeft />
            </Sider>
            <Content>
                <NavHeader />
                {/* <NavHeader style={{ background: '#fff' }}>标题栏</NavHeader> */}
                <Content style={{ border: '1px solid #ccc', minHeight: '60vh', margin: '12px' }}>
                    {props.children}
                    
                </Content>
                <Footer>底部</Footer>
            </Content>
        </Layout>
    )
}
