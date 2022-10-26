
import "./MainPage.css";

import { useEffect, useState } from 'react';

import Topbar from "../components/topbar";
import Post from "../components/Post"
import Post2 from "../components/Post2"
import NewPostSection from "../components/NewPostSection"
import RightBar from "../components/RightBar"
import Status from '../components/Status';
import axios from 'axios';

import { Posts, PostsLeft } from "../Data"


export default function MainPage() {

    const postarray = Posts
    const [PostArray, SetPostPrray] = useState(PostsLeft)

    const [users, setUsers] = useState();
    const [posts, setPosts] = useState();

    let [filteredPosts, setFilteredPosts] = useState();

    const getUsersData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        ).then((response) => response.json());
        setUsers(response);
    };

    useEffect(() => {
        getUsersData();
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {

                // add random timestamp to each post
                const tmpposts = response.data.map(post => {
                    const timestamp = Math.floor(Math.random() * 1000000000000);
                    return { ...post, timestamp }
                })
                setPosts(tmpposts);
            }, error => {
                console.log(error);
            });
    }, []);


    var username = localStorage.getItem("username");
    var newuser = localStorage.getItem("newuser");

    let followList = []
    if (newuser === true) {
        followList = []
    } else {
        // get followed from local storage and make it array
        followList = localStorage.getItem("followed")
    }
    console.log(followList)
    filteredPosts = posts?.filter(post => followList.includes(post.userId))
    console.log(filteredPosts)
    
    useEffect(() => {
        setFilteredPosts(filteredPosts)
    }, error => {
        console.log(error);
    });


    return (

        <>
            <header>

                <Topbar />
                <div className="container">
                    <NewPostSection username={localStorage.getItem("username")} posts={filteredPosts} setPosts={setFilteredPosts} />
                    <Status />
                </div>
            </header>
            <div className="pageformat">
                <div className="gridformat">
                    <div className="gridpost" tabIndex={0}>
                        {filteredPosts?.sort((a, b) => b.timestamp - a.timestamp).map(post => (
                            <Post2 post={post} key={post.id} username={username} newuser={newuser} />
                        ))}
                        {/* {posts && posts.map((post) => (
                            <Post2
                                key={post.id}
                                post={post}
                                username={username}
                                newuser={newuser}
                            />
                        ))} */}
                    </div>
                </div>
                <div className="gridformat">

                    <div className="rightbar" tabIndex={0}>
                        <RightBar filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} />
                    </div>
                </div>
            </div>



            {/* <div className="pageformat">
                <div className="gridformat">
                    <div className="gridpost" tabIndex={0}>
                        {PostArray.map((p) => (
                            <Post key={p.index} post={p} />
                        ))}
                    </div>
                </div>
                <div className="gridformat">
                    <div className="gridpost" tabIndex={0}>
                        {postarray.map((p) => (
                            <Post key={p.index} post={p} jsonusers={users} />
                        ))}
                    </div>
                </div>
            </div> */}

        </>

    )
}
