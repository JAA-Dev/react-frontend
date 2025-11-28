// import { useEffect, useState } from "react"
// import { deletePost, getPosts } from "../services/postService";
// import type { Post } from "../types/Post";
// import { Link } from "react-router-dom";


// export default function PostList() {

//   const [posts, setPost] = useState<Post[]>([]);

//   useEffect(() => {
//     getPosts().then(res => setPost(res.data));
//   })

//   const handleDelete = (id: number) => {
//     if(confirm("Are you sure you want to delete this post?")){
//       deletePost(id).then(() => {
//         setPost(posts.filter(post => post.id !== id));
//       });
//     }
//   }

//   return (
//     <div>
//       <h1 className="font-bold text-4xl">CRUD Application</h1>
//       {/* create button */}
//       <div className="absolute mb-4" >
//         <Link to="/create"
//          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Create</Link>
//       </div>
//       {/* table */}
//       <div className="overflow-x-auto mt-10">
//         <table className="min-w-full divide-y devide-gray-200 border border-gray-200 rounded">
//           <thead className="bg-gray-100">
//             <tr>
//               {/* text-left */}
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">id</th>
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Title</th>
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Body</th>
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {posts.map(post =>
//             <tr className="hover:bg-gray-50">
//               <td className="px-6 py-4 text-sm text-gray-600">{post.id}</td>
//               <td className="px-6 py-4 text-sm text-gray-600">{post.title}</td>
//               <td className="px-6 py-4 text-sm text-gray-600">{post.body}</td>
//               <td className="px-6 py-4 space-x-2">
//                 <Link to={`/view/${post.id}`}
//                  className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600">Show</Link>
//                 <Link to={`/edit/${post.id}`}
//                  className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600">Edit</Link>
//                 <button
//                   onClick={() => handleDelete(post.id)}
//                  className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600">delete</button>
//               </td>
//             </tr>
//              )}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   )
// }

// // export default PostList

// import { useEffect, useState } from "react"
// import { deletePost, getPosts } from "../services/postService";
// import type { Post } from "../types/Post";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast"; 


// export default function PostList() {

//   const [posts, setPost] = useState<Post[]>([]);

//   useEffect(() => {
//     getPosts().then(res => setPost(res.data))
//     .catch(() => toast.error("Failed to fetch posts"));
//   }, [])

//   const handleDelete = (id: number) => {
//     if(confirm("Are you sure you want to delete this post?")){
//       deletePost(id).then(() => {
//         setPost(posts.filter(post => post.id !== id));
//         toast.success("Post deleted successfully!"); 
//       })
//       .catch(() => toast.error("Failed to delete post"));
//     }
//   }

//   return (
//     <div>
//       <h1 className="font-bold text-4xl">CRUD Application</h1>
//       {/* create button */}
//       <div className="absolute mb-4" >
//         <Link to="/create"
//          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Create</Link>
//          <Link to="/dashboard"
//          className="bg-blue-600 text-white px-4 py-2 ml-2 rounded hover:bg-blue-700 transition">Dashboard</Link>
//       </div>
//       {/* table */}
//       <div className="overflow-x-auto mt-10">
//         <table className="min-w-full divide-y devide-gray-200 border border-gray-200 rounded">
//           <thead className="bg-gray-100">
//             <tr>
//               {/* text-left */}
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">id</th>
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Title</th>
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Body</th>
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {posts.map(post =>
//             <tr className="hover:bg-gray-50">
//               <td className="px-6 py-4 text-sm text-gray-600">{post.id}</td>
//               <td className="px-6 py-4 text-sm text-gray-600">{post.title}</td>
//               <td className="px-6 py-4 text-sm text-gray-600">{post.body}</td>
//               <td className="px-6 py-4 space-x-2">
//                 <Link to={`/view/${post.id}`}
//                  className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600">Show</Link>
//                 <Link to={`/edit/${post.id}`}
//                  className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600">Edit</Link>
//                 <button
//                  onClick={() => handleDelete(post.id)}
//                  className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600">delete</button>
//               </td>
//             </tr>
//              )}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   )
// }

// // export default PostList



import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../services/postService";
import type { Post } from "../types/Post";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function PostList() {

  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts on page load
  useEffect(() => {
    getPosts()
      .then(res => setPosts(res.data))
      .catch(() => toast.error("Failed to fetch posts"));
  }, []);

  // Delete post
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost(id)
        .then(() => {
          // Safe React state update
          setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
          toast.success("Post deleted successfully!");
        })
        .catch(() => toast.error("Failed to delete post"));
    }
  };

  return (
    <div>
      <h1 className="font-bold text-4xl">CRUD Application</h1>

      {/* Create + Dashboard Buttons */}
      <div className="absolute mb-4">
        <Link
          to="/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create
        </Link>

        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-4 py-2 ml-2 rounded hover:bg-blue-700 transition"
        >
          Dashboard
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Body</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map(post => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-600">{post.id}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{post.title}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{post.body}</td>

                <td className="px-6 py-4 space-x-2">
                  <Link
                    to={`/view/${post.id}`}
                    className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
                  >
                    Show
                  </Link>

                  <Link
                    to={`/edit/${post.id}`}
                    className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
