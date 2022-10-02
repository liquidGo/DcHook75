import React, { ReactElement } from 'react'
import { Layout } from 'antd'
import {NavLink} from 'umi'
import './style.less'
const { Header } = Layout
interface Props {

}

export default function NavHeader({ }: Props): ReactElement {
    const user = 'tom'
    return (
        <div className='NavHeader'> 
            <Header className='header_top' >
                欢迎光临1！{user}
                <NavLink to={'/logout'}>退出</NavLink>
            </Header>
            <div className="header_bottom">
                <div className='pageTitle' >首页</div>
            </div>
        </div>
    )
}
