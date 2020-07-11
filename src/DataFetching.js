import React, {useState, useEffect} from 'react';
import axios from 'axios';


function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <ol>
                {
                    posts.map(post => 
                        (<li key={post.id}>{post.title}</li>
                            ))
                }
            </ol>
        </div>
    )
}

export default DataFetching
