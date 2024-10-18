import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const {id} =useParams ();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookURL}= useLoaderData();

  const bookCategoris =[
    "Programming",
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "Thriller",
    "Mystery",
    "Historical Fiction",
    "Self-Help",
    "Philosophy",
    "Children's Books",
    "Poetry",
    "Graphic Novels",
    "Cookbooks",
    "Travel",
    "True Crime",
    "Memoir",
    "Spirituality",
    "Horror",
    "Psychology",
    "Health & Fitness",
    "Science",
    "Business",
    
  ]
  const [selectedBookCategory,setSelectedBookCategory]= useState(bookCategoris[0]);
  const handleChangeSelectedValue = (event)=>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
  // handle book submit
  const handleUpdate = (event)=>{
    event.preventDefault();
    const form = event.target;


    const bookTitle = form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription =form.bookDescription.value;
    const bookURL =form.bookURL.value;

    const updateBookObj= {
      bookTitle, authorName, imageURL, category, bookDescription, bookURL
    }

   // console.log(bookObj)
   //update book data
   fetch(`http://localhost:5000/book/${id}`,{
    method :"PATCH",
    headers :{
      "Content-Type": "application/json"
    },
    body : JSON.stringify(updateBookObj)
   }).then(res =>res.json()).then(data => {
    alert("Book is update successfully")
    // form.reset();
   })
   }
  

  return (
    <div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>Update the Book</h2>
    <form onSubmit={handleUpdate} className="flex lg:w-[1080px] flex-col flex-wrap gap-4">
      {/* 1st row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle"name='bookTitle' type="text" defaultValue={bookTitle} placeholder="Book Name" required />
      </div>
      {/* authorName */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName"name='authorName' type="text"defaultValue={authorName} placeholder="Author Name" required />
      </div>
      </div>
      {/* 2nd row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL"name='imageURL' type="text"defaultValue={imageURL} placeholder="Book image URL" required />
      </div>
      {/* category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategoris.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </select>
      </div>
      </div>
      {/* bookdescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription"name='bookDescription' placeholder="Write your book Description..." required className='w-full'defaultValue={bookDescription} rows={6} />
       
      </div>
      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookURL" value="Book URL" />
        </div>
        <TextInput id="bookURL"name='bookURL' type="text" placeholder="Book URL"defaultValue={bookURL} required shadow />
      </div>
      <Button type="submit"className='mt-5 bg-blue-500'>Update Book</Button>

    </form>
    </div>
  )
}

export default EditBooks