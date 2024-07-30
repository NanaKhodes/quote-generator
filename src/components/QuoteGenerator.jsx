import React, { useState,useEffect } from 'react'
import './QuoteGenerator.css'


const QuoteGenerator = () => {
    const[quote,setQuote]= useState('');
    const[author,setAuthor]=useState('');

    // {
    //     "_id": "qFQBpG1Z9mTw",
    //     "content": "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.",
    //     "author": "Napoleon",
    //     "tags": [
    //         "Famous Quotes"
    //     ],
    //     "authorSlug": "napoleon",
    //     "length": 102,
    //     "dateAdded": "2019-09-08",
    //     "dateModified": "2023-04-14"
    // }
      const fetchQuote =  async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      console.log(data)
      setQuote(data.content)
      setAuthor(data.author)
        
    }
    
    useEffect(() => {
        fetchQuote();
    },[]);
    
  return (
    <div className='quote-container'>
        <p className='quote'>"{quote}"</p>
        <p className='author'> - {author}</p>
        <button className='button' onClick={fetchQuote}>Find Quotes</button>
    </div>
  )
}

export default QuoteGenerator   