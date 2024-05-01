import React, {useState} from 'react'

export default function BookForm({updated, setUpdated}) {
    const[book, setBook] = useState({});

    const handleChange = (event) => {
        setBook({...book, [event.target.id]: event.target.value});
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(book);
        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body : JSON.stringify(book),
        }).then(() => {
            setUpdated(!updated);
            setBook({});
            event.target.reset();
        });
    }
  
    return (
    <>
        <form onSubmit={handleSubmit}>
            <input id='title' value={book.title} onChange={handleChange} type="text" placeholder='Title'></input>
            <input id='author' value={book.author} onChange={handleChange} type="text" placeholder='Author'></input>
            <input id='rating' value={book.rating} onChange={handleChange} type="text" placeholder='Rating'></input>
            <input id='year_published' value={book.year_published} onChange={handleChange} type="text" placeholder='Year Published'></input>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}
