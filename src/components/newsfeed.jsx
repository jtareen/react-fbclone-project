import React from 'react';
import { Post } from './post.jsx';
import { UploadPost } from './uploadpost.jsx';
import * as data from '../data/data.jsx';
// import posts from '../data/data';   -> for default method

export function Newsfeed() {
    return (
        <section className='md:float-right lg:float-none sm-full md:w-2/3 lg:w-1/2  lg:m-auto'>
            <UploadPost />
            {
                data.posts.map((post, index) => {
                    return <Post
                        {...post}
                        key={post.id}
                    ></Post>
                })
            }
            {/*<button className='justify-self-center border-2 px-2 hover:bg-slate-200'>click me</button>  children props*/}
        </section>
    )
}