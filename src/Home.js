//import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

//const Home = () => {
  // const [name, setName] = useState('Mario');
  // const [age, setAge] = useState(20);

   // const handleClick = () =>{
    // setName("Luigi");
    // setAge(39); 
    //}

        //Passing an argument
    //  const handleClickAgain =(name) =>{ //
    //    console.log(`hello ${name}`)  //
    //}

   // return(
     //   <div className="home">
       //     <h2>Home Page</h2>
         //   <p>{name} is {age}years old</p>
           // <button onClick={handleClick}>Click Me</button>
           {/* <button onClick={() =>{ handleClickAgain("Mario")}}>Click Me Again</button> */}
        //</div>
    //);
//}

const Home = () =>{
    const { data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

    //const[name, setName] = useState("Mario");
      
      //Delete Blog//
    //const handledelete = (id) => {
    //    const newBlogs = blogs.filter(blog => blog.id !== id);
    //    setBlogs(newBlogs);
    //}

    

    return(
        <div className="home">
             { error && <div>{error}</div>} 
            {isPending && (<div>loading.....</div>)}
            {blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}

              {/* Reusing Components /filtering mario in the array */}
           {/* <Bloglist blogs={blogs.filter((blog) => blog.author === "Mario")} title="Mario`s Blogs!"/>*/}

           {/*<button onClick={() => setName("Luigi")}>Change Name</button>
           <p>{name}</p>*/}

        </div>
    );   
}

export default Home;