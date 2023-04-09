import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Blogs/Header'
import Blogs from './Components/Blogs/Blogs'
import Cart from './Components/Blogs/Cart'
import Question from './Components/Blogs/Question'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// new section added\\

function App() {
  const [readTime, setReadTime] = useState("")
  

  const timeHandler =(time)=>{
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"))
    if(previousReadTime){
      let sumReadTime = previousReadTime + time;
      localStorage.setItem("readTime", sumReadTime);
      setReadTime(sumReadTime)
    }
    else{
      localStorage.setItem("readTime", time);
      setReadTime(time)
    }
  }
  const [bookmark,setBookmark]=useState([])
  const bookmarkHandler= (title)=>{
    
    const isMatchFound= bookmark.filter((bookmark)=> bookmark===title).length>0;
    if(isMatchFound) {
      toast('already exist')
    }
    else{
      setBookmark([...bookmark, title])
      
    }

     }
  
     
  

  return (
    <div className="App container">
     <div className='my-3'>
        <Header></Header>
     </div>
    <div className='row'>
    <div className='col-md-8 '>
      <Blogs
      timeHandler={timeHandler}
      bookmarkHandler={bookmarkHandler}
      ></Blogs>
     </div>
     <div className='col-md-4  '>
      <Cart
      readTime={readTime}
      bookmark={bookmark}
      ></Cart>
     </div>
     <div>
      <Question></Question>
     </div>
    </div>
     <ToastContainer></ToastContainer>
    </div>
  )
}

export default App