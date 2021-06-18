import React from 'react'
import {Menu, Dropdown} from 'antd';
import {DownOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom'

const UserInfo = () => {
    const history = useHistory()
    const menu = (
        <Menu>
            <Menu.Item icon={<LogoutOutlined/>}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => {
                    history.replace('/craco-backstage-template/login')
                }
                }>
                    退出登录
                </a>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined/>}>
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