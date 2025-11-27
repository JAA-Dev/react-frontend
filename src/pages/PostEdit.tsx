// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { getPost, updatePost } from "../services/postService";

// export default function PostEdit() {

//     const {id} = useParams();

//     const [title, setTitle] = useState("")
//     const [body, setBody] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         if(id){
//             getPost(id).then(res => {
//                 setTitle(res.data.title);
//                 setBody(res.data.body);
//             })
//         }
//     }, [id])

//     const submit = (e: React.FormEvent) => {
//         e.preventDefault();
//         updatePost(id, {title: title, body: body}).then(()=> navigate('/'));
//     }


//   return (
//     <div>  
//         <h1 className="font-bold text-4xl">Edit Post</h1>
//         <div className="absolute mb-4" >
//             <Link to="/"
//              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Back</Link>
//         </div>

//         <form onSubmit={submit} className="mt-10 w-[500px] max-w-full mx-auto p-6 bg-white rounded shadow">
//             <div className="mb-4">
//                 <label htmlFor="title"
//                 className="absolute text-sm font-medium text-gray-700 mb-1">Title</label>
//                 <input 
//                 type="text"
//                 name="title"
//                 id="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Enter Post Title"
//                 className="w-full mt-8 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:right-0.5" />
//                 {/* <p className="text-red-500 text-sm mt-1">Title is Required.</p> */}
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="body"
//                 className="absolute text-sm font-medium text-gray-700 mb-1">Body</label>
//                 <textarea 
//                 name="body"
//                 id="body"
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//                 placeholder="Enter Post Body"
//                 className="w-full mt-8 px-6 py-2 border border-gray-300 rounded focus:outline-none focus:right-0.5" />
//                 {/* <p className="text-red-500 text-sm mt-1">Body is Required.</p> */}
//             </div>
            
//             <div>
//                 <button 
//                 type="submit"
//                  className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transistion">
//                     Submit
//                 </button>
//             </div>

//         </form>

//     </div>
//   )
// }

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost } from "../services/postService";
import toast from "react-hot-toast"; // ✅ import toast

export default function PostEdit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getPost(id)
        .then((res) => {
          setTitle(res.data.title);
          setBody(res.data.body);
        })
        //toast
        .catch(() => toast.error("Failed to fetch post data"));
    }
  }, [id]);

  //toast
  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }

    const promise = updatePost(id, { title, body });

    toast.promise(promise, {
      loading: "Updating post...",
      success: "Post updated successfully!",
      error: "Failed to update post.",
    });

    promise.then(() => navigate("/list"));
  };

  return (
    <div>
      <h1 className="font-bold text-4xl">Edit Post</h1>
      <div className="absolute mb-4">
        <Link
          to="/list"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Back
        </Link>
      </div>

      <form
        onSubmit={submit}
        className="mt-10 w-[500px] max-w-full mx-auto p-6 bg-white rounded shadow"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="absolute text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Post Title"
            className="w-full mt-8 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:right-0.5"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="body"
            className="absolute text-sm font-medium text-gray-700 mb-1"
          >
            Body
          </label>
          <textarea
            name="body"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter Post Body"
            className="w-full mt-8 px-6 py-2 border border-gray-300 rounded focus:outline-none focus:right-0.5"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
