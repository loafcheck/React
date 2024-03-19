/* eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal () {
  return (
    <div className='modal'>
      <h4>Title</h4>
      <p>Date</p>
      <p>Content</p>
    </div>
  )
}

function App() {
  let post = 'Santa Clara Restaurant'
   let [postTitle, setPostTitle] = useState(['WildSeed', 'SweetMape', 'Verve', 'bluebottle']); 
   let [logo,setlogo] = useState('ReactBlog');
   let [likes, setlikes] = useState([0,0,0]);
   let [modal, setModal] = useState(false);
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={()=>{
        const sortedPostTitles = [...postTitle].sort();
        setPostTitle(sortedPostTitles);

      }}>A-Z Order</button>

      <button onClick={ () => {
        const newPostTitle = [...postTitle];
       newPostTitle[0] = 'BlueBottle';
       setPostTitle(newPostTitle);
      }}>Edit Title</button>

      <div className='list'>
        <h4>{postTitle[0]} <span onClick={()=>{Increase(likes+1)}}>👍</span> {likes} </h4>
        <p>March 7th</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal)}}>{postTitle[1]}</h4>
      </div>
      <div className='list'>
        <h4>{postTitle[2]}</h4>
        <p>March 7th</p>
      </div>
      {/*modal*/}

      {
        modal == true ? <Modal></Modal> : null
      }

      {
        postTitle.map(function(a, i){
          //0,1,2
          return (
            <div className='list'>
            <h4>
            {postTitle[i]}
            <span onClick={()=>{
              const newlikes = [...likes];
              newlikes[i] += 1;
              setlikes(newlikes);
              }}>👍</span> {likes[i]}
            </h4>
            <p>Feb.18.2024</p>
            </div>
          )
        })
      }
  
  
  </div>

   


  );
}

export default App;
