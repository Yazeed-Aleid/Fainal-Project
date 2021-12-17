import react from 'react'
import './login.css'
import img from '../../img/Home.png'


function Login() {

    return (
        <div className="login">
            <div className="formContainer">
                <div className="topL"></div>
                <div className="bottom"></div>
                <form>
                    <label>Username</label><br />
                    <input type="text" placeholder="username" /><br />
                    <label>Password</label><br />
                    <input type="password" placeholder="password" /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>

            <div className='imgSection'>
                <img src={img} alt='' />
            </div>
        </div>
    );
}

export default Login;