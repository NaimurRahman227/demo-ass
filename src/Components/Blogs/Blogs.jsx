import React, { useEffect, useState } from 'react';
import SingleCart from './SingleCart';

const Blogs = ({timeHandler,bookmarkHandler}) => {
    const [card, setCard]=useState([])

    useEffect(()=>{
        fetch('Data.json')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])

    return (
        <div>
           {
            card.map(singleCard=><SingleCart
            singleCard={singleCard}
            key = {singleCard.id}
            timeHandler={timeHandler}
            bookmarkHandler={bookmarkHandler}
            ></SingleCart>)
           }
        </div>
    );
};

export default Blogs