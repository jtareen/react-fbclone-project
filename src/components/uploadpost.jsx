import { Image, Upload } from 'lucide-react';

export function UploadPost() {
    const profilePicUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRl9rpxfONf314q48bbmc4XOfbmjczLhIJTFfIHJNNPQ&s";
    const uploadPost = (e) => {
        e.preventDefault();
        console.log('uplaoded');
    };
    return <section className='flow-root relative w-full bg-white rounded-xl overflow-hidden p-2 my-2 shadow-xl'>
        <form onSubmit={uploadPost}>
            <div className='flex w-full'>
                <div className='flex-none w-12 h-12 rounded-full overflow-hidden border-2 border-white-100'>
                    <img src={profilePicUrl} alt='profile pic' />
                </div>
                <input className='shrink w-full ml-2 h-12 bg-slate-100 hover:bg-slate-200 hover:cursor-pointer rounded-full px-2 outline-0' type='text' name='caption' placeholder='CAPTION'></input>
            </div>
            <div className='flex'>
            <div className="flex w-1/2 justify-center items-center">
                <label htmlFor="file-upload " className='flex my-2 mr-1 p-1 w-full h-12 bg-white text-green-400 border-green-400 border-2 rounded-full hover:text-white hover:bg-green-400 hover:cursor-pointer justify-center items-center'>
                    <Image />
                    <span >Upload Photo</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
            </div>
            <div className='flex w-1/2 justify-center items-center'> 
                <button type='submit' className='flex my-2 ml-1 p-1 w-full h-12 bg-white text-blue-400 hover:text-white hover:bg-blue-400 border-blue-400 border-2 rounded-full justify-center items-center'>
                    <Upload/>
                    Post
                </button>
            </div>
            </div>
        </form>
    </section>
}