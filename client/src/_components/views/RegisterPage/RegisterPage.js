import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

let createdAuthCode = null;
function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    
    const [Code, setCode] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onCodeHandler = (event) => {
        setCode(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
     
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        createdAuthCode = Math.random().toString(36).substr(2,6);//전역
        
        console.log('Email', Email)
        console.log('CreatedCode', createdAuthCode)

        let body = {
            email: Email,
            code: createdAuthCode
        }

        axios.post('/api/users/sendMail', body)

    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
                if (Code !== createdAuthCode) {
            return alert('인증코드가 일치하지 않습니다.')
        }
                if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }
        
        console.log('Password', Password)

        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        dispatch(registerUser(body))
            .then(response => {
               if (response.payload.success) {
                   props.history.push("/login")
               } else {
                   alert("Failed to sign up")
               }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <div>
            <form style={{ display:'flex', flexDirection:'column' }}
                onSubmit={handleSubmit}
            > 
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <br />
                <button type="submit">
                    인증코드 보내기
                </button>
            </form>

            <form style={{ display:'flex', flexDirection:'column' }}
                onSubmit={onSubmitHandler}
            > 
                <label>Code</label>
                <input type="code" value={Code} onChange={onCodeHandler} />

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button type="submit">
                    회원 가입
                </button>
            </form>
            </div>
        </div>
    )    
}

export default withRouter(RegisterPage)