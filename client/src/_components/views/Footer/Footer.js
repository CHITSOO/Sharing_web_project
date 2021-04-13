import React from 'react'
import {
    SmileOutlined,
  } from '@ant-design/icons';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
            <p> Digital MoonBangGoo 디지털 문방구  <SmileOutlined /></p>
        </div>
    )
}

export default Footer
