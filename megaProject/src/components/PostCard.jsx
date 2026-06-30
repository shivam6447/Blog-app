import React from 'react';
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

export default function PostCard({$id,title,featuredImage}){
    console.log({
        $id,
        title,
        featuredImage,
    });
    return(
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                {featuredImage ? (
                <img
                src={appwriteService.getFilePreview(featuredImage)}
                alt={title}
                className="rounded-xl"
                />
                ) : (
                <div className="h-48 flex items-center justify-center bg-gray-200 rounded-xl">
                    No Image
                </div>
                )}
                <h2
                className='text-xl font-bold '
                >{title}</h2>
            </div>
        </Link>
    )
}