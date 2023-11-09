import React from 'react';
import {Heart, Forward, MessageCircle} from 'lucide-react';
import {MenuButton} from './menu.jsx';

export function Post(props) {
    const {name , profilePicUrl, caption, imageUrl} = props;  // => destructuring props in function method
    //currently using destructuring in parameter method
    return (
        <div className='flow-root relative w-full bg-white rounded-xl overflow-hidden mb-2 shadow-xl'>
            <div className='mx-2 mt-1 flex items-center relative'>
                <div className='inline-block w-12 h-12 rounded-full overflow-hidden border-2 border-white-100'>
                    <img src={profilePicUrl} alt='profile pic' />
                </div>
                <h2 className='inline-block ml-2 font-semibold'>{name}</h2>
            </div>
                <div className='absolute top-1 right-2'><MenuButton /></div>
            <div className='grid'>
                <p className='mx-2'>{caption}</p>
                <img className='my-1' src={imageUrl} alt='pic' />
            </div>
            <hr></hr>
            <div className='flex justify-around py-2'>
                <div className='grid w-1/4 justify-items-center rounded-md hover:bg-slate-100'>
                    <button className='flex' >
                        <Heart /><span className='font-medium pl-1'>Like</span>
                    </button>
                </div>
                <div className='grid w-1/4 justify-items-center rounded-md hover:bg-slate-100'>
                    <button className='flex'>
                        <MessageCircle /><span className='font-medium pl-1'>Comment</span>
                    </button>
                </div>
                <div className='grid w-1/4 justify-items-center rounded-md hover:bg-slate-100'>
                    <button className='flex'>
                    <Forward /><span className='font-medium pl-1'>Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
};