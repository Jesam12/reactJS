
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
{/*
  function App () {
  const title = "Welcome to the new blog";
  //const likes = [50]; 
  //We can use arrays. react will convert it to a string
  const likes = 50;
  const link = "https://www.google.com"

  return (
    <div className="App"> 
      <div className="content">
        <h1>{ title }</h1>
        <p>likes { likes } times</p>

        {/*we can also write dynamic values direct in the curley braces */}
     //   <p>{10}</p>
     //   <p>{"hello, Jesam"}</p>
     //   <p>{[1,2,3,4,5]}</p>
     //   <p>{Math.random() * 20}</p>
     //   <a href={ link }>Google Site</a>
     // </div>
   // </div>
 // );
//}
//}

function App(){
  return(
   <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
   </Router> 
  )
}
export default App;
