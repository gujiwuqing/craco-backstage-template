import React from 'react'
import {Menu, Dropdown} from 'antd';
import {DownOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom'

const UserInfo = () => {
    const history = useHistory()
    const menu = (
        <Menu>
            <Menu.Item icon={<LogoutOutlined/>} key='1'>
                <a onClick={() => {
                    history.push('/craco-backstage-template/login')
                    history.go(0)
                }
                }>
                    退出登录
                </a>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined/>} key='2'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    个人中心
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Dropdown overlay={menu}>
                <span style={{cursor: 'pointer'}}>孤寂无情 <DownOutlined/></span>
            </Dropdown>
        </div>
    )
}

export default UserInfo