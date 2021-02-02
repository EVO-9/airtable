import Head from 'next/head'
import styled from 'styled-components'
import BlogList from "../components/BlogList";
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';


export default function Home() {

  const [name, setName] = useState('mario');

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log('name');
  }, [name]);
  return (
    <div>
      <NavBar />{/* Imports the NavBar component into this page, you must also import it at the top */}
      <h1>Homepage</h1>
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete} />{/* Only show items based on filter criteria */}
      <button onClick={() => setName('luigi')} >Change Name</button>
      <p>{name}</p>
    </div>
  )
}
