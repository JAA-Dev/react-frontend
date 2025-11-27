// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../services/authService";

// export default function Login() {
//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const navigate = useNavigate();

//   const submit = (e: React.FormEvent) => {
//     // e.preventDefault();
//     // console.log({email, password})

//     e.preventDefault();
//     setErrors([]); //empty error
//     // console.log({name, email, password, conPassword})
//     login({ email: email, password: password }).then((res) => {
//       // console.log(res.data);
//       if (res.data.errors) {
//         setErrors(res.data.errors); //para ma display ang error
//       } else {
//         // console.log(res.data);
//         localStorage.setItem("user", JSON.stringify(res.data)); //save sa localstorage
//         localStorage.setItem("isAuthenticated", true);

//         navigate("/dashboard");
//       }
//     });
//   };
//   return (
//     <>
//       <div className="flex flex-col items-center  justify-center h-screen bg-gray-100 space-y-4">
//         {errors.length > 0 && (
//           <div
//             className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-80"
//             role="alert"
//           >
//             <strong className="font-bold">Error!</strong>
//             <ul className="list-disc list-inside">
//               {errors.map((error, index) => (
//                 <li key={index}>{error}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         <form
//           onSubmit={submit}
//           className="bg-white p-6 rounded-xl shadow-md w-100 space-y-4"
//         >
//           <h1 className="text-2xl font-bold text-gray-800 ">Login</h1>
//           <div>
//             <label className="mr-75 text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1"
//               placeholder="Enter your Email"
//             />
//           </div>

//           <div>
//             <label className="mr-68 text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
//           >
//             Submit
//           </button>

//           <p>
//             Dont have an account? <Link to="/register">Register</Link>
//           </p>
//         </form>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    login({ email: email, password: password }).then((res) => {
      if (res.data.errors) {
        setErrors(res.data.errors);
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("isAuthenticated", "true"); // ✔ FIXED

        navigate("/dashboard");
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
        {errors.length > 0 && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-80"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <ul className="list-disc list-inside">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <form
          onSubmit={submit}
          className="bg-white p-6 rounded-xl shadow-md w-100 space-y-4"
        >
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>

          <div>
            <label className="mr-75 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1"
              placeholder="Enter your Email"
            />
          </div>

          <div>
            <label className="mr-68 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Submit
          </button>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
}
