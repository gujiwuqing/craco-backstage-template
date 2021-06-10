import React  from 'react'
import {Button} from 'antd'
import { changeAntdTheme } from 'dynamic-antd-theme';
const Home = () => {
    return (
        <>
            <div>home</div>
            <Button onClick={()=>{
                changeAntdTheme('red')
            }}>换肤</Button>
        </>
    )
}

export default Home