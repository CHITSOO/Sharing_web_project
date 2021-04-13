import React,{ useEffect } from 'react'
import { FaCode } from "react-icons/fa";
//import axios from 'axios';
import {withRouter} from 'react-router-dom';


function LandingPage(props) {
/*
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response) })
    }, [])

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if (response.data.success) {
                    props.history.push("login");
                } else {
                    alert('로그아웃 하는데 실패 했습니다.');
                }
            })
    }*/

    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Share and Get Template!</span>
            </div>
            <div style={{ float: 'right' }}>Thanks For Stop by Here, Digital MoonBangGoo</div>
        </>
        /*
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>

        </div>*/
    )
}

export default withRouter(LandingPage)
