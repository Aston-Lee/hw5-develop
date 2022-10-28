
import "./MainPage.css";

import { useEffect, useState } from 'react';

import Topbar from "../components/topbar";
import Post from "../components/Post"
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
    const [comments, setComments] = useState();

    let [filteredPosts, setFilteredPosts] = useState();
    let [NewPost, setNewPost] = useState([]);

    const [userobject, setUserObject] = useState(JSON.parse(localStorage.getItem("userobject")));

    const getUsersData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        ).then((response) => response.json());
        setUsers(response);
    };

    const [images, setImages] = useState([])
    useEffect(() => {
        
        const fetchImages = async () => {

            axios.get("https://api.thecatapi.com/v1/images/search?limit=100")
            .then(res => {
                setImages(res.data)
            })

            // const response = await fetch(
            // //   "https://api.unsplash.com/photos?client_id=slEQ6gVGydzmTuPMyJVA8nM4Rywehc0lK1Aq6qIUM0U"
            // "https://api.thecatapi.com/v1/images/search?limit=100"
            // )
            // const data = await response.json()
            // console.log(data)
            // setImages(data)
          }
      
        fetchImages()

        getUsersData();
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {

                // add random timestamp to each post
                const tmpposts = response.data.map(post => {
                    const timestamp = Math.floor(Math.random() * 1000000000000);
                    return { ...post, timestamp }
                })
                setPosts(tmpposts);
                console.log(tmpposts);
                localStorage.setItem("originalposts", JSON.stringify(tmpposts))
            }, error => {
                console.log(error);
            });
        console.log(posts)
        // localStorage.setItem("originalposts", JSON.stringify(posts))
        axios.get('https://dummyjson.com/comments?limit=100')
            .then(response => {
                setComments(response.data);
                // console.log(comments)
            }, error => {
                console.log(error);
            });
        console.log(comments)

        // map comments.comments to posts using id
        // const tmppost = posts.map(post => {
        //     const tmpcomments = comments.comments.filter(comment => comment.id === post.id)[0].body
        //     return { ...post, tmpcomments }
        // })
        // console.log(tmppost)
        // setPosts(tmppost)
    }, []);

    console.log(images)


    useEffect(() => {
        setUserObject(userobject)
        console.log(userobject.followed)
    }, [userobject])

    var username = localStorage.getItem("username");
    var newuser = localStorage.getItem("newuser");



    return (

        <>
            <header>

                <Topbar posts={posts} setPosts={setPosts} />
                <div className="container">
                    <NewPostSection userobject={userobject} setUserObject={setUserObject} username={localStorage.getItem("username")} posts={NewPost} setPosts={setNewPost} />
                    <Status />
                </div>
            </header>
            <div className="pageformat">
                <div className="gridformat">
                    <div className="gridpost" tabIndex={0}>
                        {NewPost.map((p) => (
                            <Post key={p.index} post={p} userobject={userobject} setUserObject={setUserObject} />
                        ))}

                        {posts?.filter(post => userobject.followed.includes(post.userId)).sort((a, b) => b.timestamp - a.timestamp).map(post => (
                            <Post2 userobject={userobject} setUserObject={setUserObject} post={post} key={post.id} username={username} newuser={newuser} />
                        ))}

                        {/* {filteredPosts?.sort((a, b) => b.timestamp - a.timestamp).map(post => (
                            <Post2 post={post} key={post.id} username={username} newuser={newuser} />
                        ))} */}
                    </div>
                </div>
                <div className="gridformat">
                    <div className="searcharea" tabIndex={0}>
                        <SearchArea userobject={userobject} setUserObject={setUserObject} filteredPosts={posts} setFilteredPosts={setPosts} />
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
