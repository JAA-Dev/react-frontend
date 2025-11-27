import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../services/postService";

export default function PostShow() {

    const {id} = useParams();

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("");

    useEffect(() => {
        if(id){
            getPost(id).then(res => {
                setTitle(res.data.title);
                setBody(res.data.body);
            })
        }
    }, [id]);


  return (
    <div>  
        <h1 className="font-bold text-4xl">View Post</h1>
        <div className="absolute mb-4" >
            <Link to="/list"
             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Back</Link>
        </div>

        <div >
            <div className="mt-10 max-w-lg mx-auto p-6 bg-white rounded shadow">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <p className="text-gray-700">{body}</p>
            </div>
        </div>

    </div>
  )
}
