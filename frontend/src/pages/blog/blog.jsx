import React, { useEffect, useState } from "react";
import Blog from "./blog.module.css";
import axios from 'axios';
import { Links } from 'react-router-dom';

const BlogPost = () => {
    const [blogs,setBlogs]=useState([]);
    const [featuredBlog, setFeaturedBlog]=useState([]);

    useEffect (()=>{
        const fetchData=async () => {
            try {
                const res=await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);
                console.log(process.env.REACT_APP_API_URL);
            }
            catch(err)
            {

            }
        }

        fetchData();
    },[]);

    useEffect (()=>{
        const fetchBlogs=async () => {
            try {
                const res=await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(res.data);
            }
            catch(err)
            {

            }
        }

        fetchBlogs();
    },[]);

    const capitalizeFirstLetter = (word) => {
        if(word)
            return word.charAt(0).toUpperCase()+word.slice(1);
        return '';
    };

    const getBlogs = () => {

    };

    return(
        <div className={Blog.wrapper}>
            <div className={Blog.header}>
                Blog<font color="#0FFF50"><b>_</b></font>Net
            </div>
            <div className={Blog.body}>
                Body
            </div>

            <div className={Blog.blog_card}>
                <div className={Blog.blog_title}>{featuredBlog.title}</div>
                <div className={Blog.blog_content}>con</div>
            </div>
        </div>
    );
};
export default BlogPost;