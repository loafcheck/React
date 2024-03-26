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
   let [selectedIndex, setSelectedIndex] = useState(null);
   let [input, setInput] = useState(null);

   function updatePostTitle () {
    let newPostTitle = [...postTitle];
    newPostTitle[0] = 'Pacific Catch';
    setPostTitle(newPostTitle);
   }

   function handleAddTitles () {
    if(input.trim !== ''){
      const newPostTitles = [input, ...postTitle];
      setPostTitle(newPostTitles);
      setInput('');
    }
  }

  function deletePost (index) {
    const deletedPosts =[...postTitle].filter((_, indexParameter)=>{ return indexParameter != index});
    setPostTitle(deletedPosts);

  }

  return (
    <div className="App">
      
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      
      <button onClick={()=>{
        const sortedPostTitles = [...postTitle].sort();
        setPostTitle(sortedPostTitles);}}>
        A-Z Order
      </button>
      
      {
        postTitle.map(function(title, index){
          return (
            <div className='list' key={index}>
            <h4 onClick={()=>{
              setModal(!modal) 
              setSelectedIndex(index)
              }} >
    
            {postTitle[index]}
        
            <span onClick={(e)=>{
              e.stopPropagation();
              const newlikes = [...likes];
              newlikes[index] += 1;
              setlikes(newlikes);
              }}>
              👍
              </span>
              {likes[index]}
            </h4>

            <button onClick={()=>{deletePost(index)}}>delete</button>

            <p>Feb.18.2024</p>
            </div>
          )
        })
      }
     
      <span>win{likes[0]}</span>
    <button 
        onClick={()=>{
        const newLikes = [...likes];
        newLikes[0] += 1;
        setlikes(newLikes);
      }}>click</button>

      {
        modal == true ? <Modal  selectedIndex={selectedIndex} updatePostTitle={updatePostTitle} setPostTitle= {setPostTitle} postTitle={postTitle} color={'skyblue'}></Modal> : null
      }

      
      <input style={{display:'block', margin:'auto', marginTop:'30px'}}
      onChange={(e)=>{setInput(e.target.value)}}></input>
      <button 
      style={{background: 'skyblue', borderRadius: '5px', marginTop: '10px'}}
      onClick={handleAddTitles}>
      enter</button>
      

  </div>
  
  );
}





function Modal (props) {
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.postTitle[props.selectedIndex]}</h4>
      <p>Date</p>
      <p>Content</p>
      <button onClick={()=>{props.updatePostTitle()}}>Edit Title</button>
      <button onClick={()=>{props.setPostTitle(['pacific Catch', 'SweetMape', 'Verve', 'bluebottle'])}}>Edit Title2</button>
    </div>
  )
}

export default App;
