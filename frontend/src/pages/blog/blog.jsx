import React, { useEffect, useState } from "react";
import Blog from "./blog.module.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPost = () => {
    const [blogs,setBlogs]=useState([]);
    const [featuredBlog, setFeaturedBlog]=useState([]);

    useEffect (()=>{
        const fetchData=async () => {
            try {
                const res=await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);
                
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
        let list=[];
        let result=[];

        blogs.map(blogPost => {
            
            return list.push(
                <div className={Blog.blogtile}>
                    
                    <div>Title{blogPost.title}</div>
                    <div>Category:{blogPost.category}</div>
                </div>
            );
        });

        for(let i=0;i<list.length;i+=2){
        result.push(
            <div key={i} className={Blog.blogArea}>
                <div>
                    {list[i]}
                </div>
                <div>
                    {list[i+1]?list[i+1]:null}
                </div>

            </div>
        );
        }

        return result;
    };

    return(
        <div className={Blog.wrapper}>
            <div className={Blog.header}>
                Blog<font color="#0FFF50"><b>_</b></font>Net
            </div>
            <div className={Blog.navbar}>
                
                    <div className={Blog.navbar_box}><Link>Link1</Link></div>
                    <div className={Blog.navbar_box}><Link>Link2</Link></div>
                    <div className={Blog.navbar_box}><Link>Link3</Link></div>
                    <div className={Blog.navbar_box}><Link>Link4</Link></div>
                    <div className={Blog.navbar_box}><Link>Link5</Link></div>
                    <div className={Blog.navbar_box}><Link>Link6</Link></div>
                
            </div>
            <div className={Blog.body}>
                <div className={Blog.blog_card}>
                    <div className={Blog.blog_title}>{featuredBlog.title}</div>
                    <div className={Blog.blog_content}>{featuredBlog.excerpt}</div>
                    <div className={Blog.continue_read}><Link to={`/blog/${featuredBlog.slug}`}>Continue Reading.....</Link></div>
                </div>
                {/* <div className={Blog.blogArea}> */}
                    {getBlogs()}
                {/* </div> */}
            </div>
            
        </div>
            
    );
};
export default BlogPost;