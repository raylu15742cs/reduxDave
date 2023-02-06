import React from 'react'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactButtons'

const PostsExcerpt = ( { post }: { post:any }) => {
  return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.content.substring(1,100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post} />
        </article>
  )
}

export default PostsExcerpt