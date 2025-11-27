// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createPost } from "../services/postService";

// export default function PostCreate() {

//     const [title, setTitle] = useState("")
//     const [body, setBody] = useState("");
//     const navigate = useNavigate();

//     const submit = (e: React.FormEvent) => {
//         e.preventDefault();
//         createPost({title: title, body: body}).then(()=> navigate('/'));
//     }


//   return (
//     <div>  
//         <h1 className="font-bold text-4xl">Create Post</h1>
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

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../services/postService";
import toast from "react-hot-toast"; // ✅ import toast

export default function PostCreate() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Simple validation
    if (!title.trim() || !body.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }

    // ✅ Promise toast
    const promise = createPost({ title, body });

    toast.promise(promise, {
      loading: "Creating post...",
      success: "Post created successfully!",
      error: "Failed to create post.",
    });

    promise.then(() => navigate("/list"));
  };

  return (
    <div>
      <h1 className="font-bold text-4xl">Create Post</h1>

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
            className="w-full mt-8 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
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
            className="w-full mt-8 px-6 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
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

