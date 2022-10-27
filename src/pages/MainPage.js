
import "./MainPage.css";

import { useEffect, useState } from 'react';

import Topbar from "../components/topbar";
// import Post from "../components/Post"
import Post2 from "../components/Post2"
import NewPostSection from "../components/NewPostSection"
import RightBar from "../components/RightBar"
import Status from '../components/Status';
import SearchArea from '../components/SearchArea';
import axios from 'axios';

import { Posts, PostsLeft } from "../Data"


export default function MainPage() {

    // const postarray = Posts
    // const [PostArray, SetPostPrray] = useState(PostsLeft)

    const [users, setUsers] = useState();
    const [posts, setPosts] = useState();

    let [filteredPosts, setFilteredPosts] = useState();
    let [NewPost, setNewPost] = useState([]);

    const [userobject, setUserObject] = useState(JSON.parse(localStorage.getItem("userobject")));

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

    // let followList = []
    // if (newuser === true) {
    //     followList = []
    // } else {
    //     // get followed from local storage and make it array
    //     followList = localStorage.getItem("followed")
    // }

    // console.log(followList)
    // filteredPosts = posts?.filter(post => followList.includes(post.userId))
    // console.log(filteredPosts)
    
    // useEffect(() => {
    //     setFilteredPosts(filteredPosts)
    // }, error => {
    //     console.log(error);
    // });

    // create useeffect that update filered posts when userobject.followed changes
    // useEffect(() => {
    //     setFilteredPosts(posts?.filter(post => userobject.followed.includes(post.userId)))
    // }, [userobject.followed]);

 
    return (

        <>
            <header>

                <Topbar posts={posts} setPosts={setPosts}/>
                <div className="container">
                    <NewPostSection username={localStorage.getItem("username")} posts={NewPost} setPosts={setNewPost} />
                    <Status />
                </div>
            </header>
            <div className="pageformat">
                <div className="gridformat">
                    <div className="gridpost" tabIndex={0}>
                        {NewPost.map((p) => (
                            <Post2 key={p.index} post={p} />
                        ))}
 
                        {posts?.filter(post => userobject.followed.includes(post.userId)).sort((a, b) => b.timestamp - a.timestamp).map(post => (
                            <Post2 post={post} key={post.id} username={username} newuser={newuser} />
                        ))}

                        {/* {filteredPosts?.sort((a, b) => b.timestamp - a.timestamp).map(post => (
                            <Post2 post={post} key={post.id} username={username} newuser={newuser} />
                        ))} */}
                    </div>
                </div>
                <div className="gridformat">
                    <div className="searcharea" tabIndex={0}>
                        <SearchArea />  
                    </div>
                    <div className="rightbar" tabIndex={0}>
                        <RightBar userobject={userobject} setUserObject={setUserObject} filteredPosts={posts} setFilteredPosts={setPosts} />
                        {/* <RightBar userobject={userobject} setUserObject={setUserObject} filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} /> */}
                    </div>
                </div>
            </div>
        </>

    )
}
