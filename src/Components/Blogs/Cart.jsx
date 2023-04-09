import React, { useEffect, useState } from 'react';

const Cart = ({readTime,bookmark}) => {
    console.log(bookmark)
    const [time,setTime] = useState(readTime);

    useEffect(()=>{
        const getReadTime=localStorage.getItem("readTime");
        setTime(getReadTime)
    },[readTime]);

    

   

    return (
        <div>
            <h4 className='text-primary border mt-3 py-3 rounded border-primary px-3'>Spent time on read: {time}</h4>
            <h5 className=' mt-3 py-3 rounded  px-3'>Bookmarks Blogs:{bookmark.length}</h5>
            {
                bookmark.map(mark=><h4 className='border bg-secondary p-3 rounded'>{mark}</h4>)
            }
        </div>
    );
};

export default Cart;