import React from 'react'
import PostItem from './PostItem.js'
import '../css/Post.css'

export default function PostList() {
  return (
    <section className='post-section'>
      <div className='post-list'>
        <PostItem />
      </div>
    </section>
  )
}
