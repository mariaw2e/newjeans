import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const [posts, setPosts] = useState([]);

    const [gatos, setGatos] = useState([])

    useEffect(( ) => {
      axios.get("https://catfact.ninja/facts")
           .then((res) => setGatos(res.data.data))
    }, [])

    console.log(gatos)

/*
    useEffect(( ) => {
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
           .then((res) => setPosts(res.data))
    }, [])
*/
    
    return (
    <>
<div>
        <h2>Lista de Posts</h2>
        <ul>
          {gatos.map((piercetheveil, index) => (
            <li key={index}> 
            <h2>{piercetheveil.fact}</h2>

            </li>
          ))}
        </ul>
      </div>
    {/* <div>
        <h2>Lista de Posts</h2>
        <ul>
          {posts.map((piercetheveil) => (
            <li key={piercetheveil.id}> 
            <Link to ={`/detalhes/${piercetheveil.id}`}>{posts.title}</Link>

            </li>
          ))}
        </ul>
      </div> */}
    </>
    );
    }