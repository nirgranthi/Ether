import surprisedCat from '../asset/Surprised-Cat.jpg'
import { Login } from './loginPage'

export function Post() {
    const text = 'this cat is afraid of your nashedi eyes'
    const cat = (<div className="postBody">
            <img src={surprisedCat} alt='surprisedCat' className='surprisedCat'></img>
            {text}
        </div>)
    return (
        <Login/>
    )
}