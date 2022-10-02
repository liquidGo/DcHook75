import React, { ReactElement, useState, useEffect } from 'react'
import './style.less'
import { Menu } from 'antd'
import menuList, { menuItem } from './menuConfig'
import { withRouter } from 'umi'

interface Props {
}
 function Index(props: Props): ReactElement {
    useEffect(() => {
        // console.log(menuList)
    }, [])
    const getItem = (props: Array<menuItem>) => {
        // console.log(props[0].label, 'pororor')
        return {
            label: props[0].label,
            key: props[0].key,
            icon: props[0].icon,
            children: props[0].children,
            type: props[0].type
        };
    }
    const setItem = (data: Array<menuItem>) => {
        let newArr: any = []
        data.forEach((item) => {
            // console.log(item,'item')
            if (item.children) {
                let newChildren = setItem(item.children)
                // console.log(newChildren, 'childchild')
                // 因为每一个导航的子集都是一个数组，数组中还有可能有数组
                newArr.push(getItem([{ label: item.label, key: item.key, icon: item.icon, children: newChildren, type: item.type }]))
            } else {
                newArr.push(getItem([{ label: item.label, key: item.key, icon: item.icon, children: item.children, type: item.type }]))
            }
        })
        return newArr
    }
    const items = setItem(menuList)
    // console.log(items, 'items')

    return (
        <div className='NavLeft'>
            <div className="icon">
                <img src="./asset/logo-ant.svg" alt="" />
                <h1>左岸</h1>
            </div>
            <Menu   
                onClick={(e)=>{
                    console.log(e,'e')
                    props.history.push(e.key)
                }}
                items={items}
                theme={'dark'}>
            </Menu>
        </div>
    )
}

export default withRouter(Index)