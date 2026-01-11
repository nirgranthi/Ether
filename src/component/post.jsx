import surprisedCat from '../asset/Surprised-Cat.jpg'

export function Post() {
    const text = 'example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder  example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder example text placeholder '
    return (
        <div className="postBody">
            <div>
                <img src={surprisedCat} alt='surprisedCat' className='surprisedCat'></img>
                {text}
            </div>
            <div>
                <button className='postButton'>Like</button>
                <button className='postButton'>Dislike</button>
                <button className='postButton'>Comment</button>
                <button className='postButton'>Reply</button>
            </div>
        </div>
    )
}