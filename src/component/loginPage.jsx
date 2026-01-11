/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../asset/logo.png'

function LoginPage() {
    return (
        <div className='loginInterface'>
            <div>
                <img src={Logo} height='50' width='50' alt='logo' ></img>
            </div>
            <div className='loginForm' >
                <form className="form">
                    <span className="input-span">
                        <label htmlFor="username" className="label">Username</label>
                        <input type="username" name="username" id="username"
                    />
                    </span>

                    <span className="input-span">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name="password" id="password"
                    />
                    </span>
                    
                    <span className="span">
                        <a href="#">Forgot password?
                            </a>
                    </span>

                    <input className="submit" type="submit" value="Log in" />
                    <span className="span"> 
                        Don't have an account? 

                        <a href="#"> Sign up </a>
                    </span>
                </form>
            </div>
        </div>

    )
}

export { LoginPage }