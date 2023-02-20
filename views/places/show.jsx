const React = require('react')
const Def = require('../default')

function Show (data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h3>Rating</h3>
                    <p>Not Rated</p>
                <h3>Description</h3>
                    <p>Located at {data.place.city}, {data.place.state} serving {data.place.cuisines}</p>
                <h3>Comments</h3>
                    <p>No comments yet!</p>

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