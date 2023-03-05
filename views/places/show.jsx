const React = require('react')
const Def = require('../default')

function Show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <img src={data.place.pic} alt={data.place.name}/>
                <p>Located at {data.place.city}, {data.place.state}</p>
                <h1>{data.place.name}</h1>
                <h3>Rating</h3>
                    <p>Not Rated</p>
                <h3>Description</h3>
                    <p>{data.place.showEstablished()}</p>
                    <p>Serving {data.place.cuisines}</p>
                <h3>Comments</h3>
                    {comments}
                <a href={`places/${data.id}/edit`} className='btn btn-warning'>
                    Edit    
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
        
    )
}

module.exports = Show