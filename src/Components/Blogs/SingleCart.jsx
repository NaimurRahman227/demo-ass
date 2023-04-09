import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCart = ({singleCard,timeHandler,bookmarkHandler}) => {
   
    return (
        <div>
             <img className='w-100 h-25' src={singleCard.image} alt="" />
            <div>
                
                    <div className='d-flex justify-content-between'>
                    <div className='d-flex align-item-center me-3'>
                        <div>
                            <img className='rounded-circle' src={singleCard.user} alt="" />
                        </div>
                         <div>
                           <h5>Name: {singleCard.name}</h5>
                           <p>{singleCard.date}</p>
                         </div>
                    </div>
                    <div>
                        <p>{singleCard.time}min read <FontAwesomeIcon onClick={()=>bookmarkHandler(singleCard.title)} icon={faBookmark} /></p>
                    </div>
                    </div>

            </div>
            <div>
                <h4>{singleCard.title}</h4>
                <button onClick={()=>timeHandler(singleCard.time)} className='bg-white mx-0 text-primary ' alt='' href=''>Mark as read</button>
                
            </div>
            <hr />
        </div>
    );
};

export default SingleCart;