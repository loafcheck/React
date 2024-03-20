/* eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let post = 'Santa Clara Restaurant'
   let [postTitle, setPostTitle] = useState(['WildSeed', 'SweetMape', 'Verve', 'bluebottle']); 
   let [logo,setlogo] = useState('ReactBlog');
   let [likes, setlikes] = useState([0,0,0,0]);
   let [modal, setModal] = useState(false);
   function updatePostTitle () {
    let newPostTitle = [...postTitle];
    newPostTitle[0] = 'Pacific Catch';
    setPostTitle(newPostTitle);
   }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={()=>{
        const sortedPostTitles = [...postTitle].sort();
        setPostTitle(sortedPostTitles);}}>A-Z Order</button>
      {
        postTitle.map(function(a, i){
          return (
            <div className='list'>
            <h4 onClick={()=>{setModal(!modal)}}>
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

      {
        modal == true ? <Modal updatePostTitle={updatePostTitle} setPostTitle= {setPostTitle} postTitle={postTitle} color={'skyblue'}></Modal> : null
      }
      
  </div>
  );
}

function Modal (props) {
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.postTitle[0]}</h4>
      <p>Date</p>
      <p>Content</p>
      <button onClick={()=>{props.updatePostTitle()}}>Edit</button>
    </div>
  )
}

export default App;
