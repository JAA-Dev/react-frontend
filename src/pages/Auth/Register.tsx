import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]); //empty error
    // console.log({name, email, password, conPassword})
    register({
      name: name,
      email: email,
      password: password,
      confirmed_password: conPassword,
    }).then((res) => {
      // console.log(res.data);
      if (res.data.errors) {
        setErrors(res.data.errors); //para ma display ang error
      } else {
        // console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data)); //save sa localstorage
        localStorage.setItem("isAuthenticated", true);

        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center  justify-center h-screen bg-gray-100 space-y-4">
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
          <h1 className="text-2xl font-bold text-gray-800 ">Register</h1>
          <div>
            <label className="mr-75 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1"
              placeholder="Enter your name"
            />
          </div>

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

          <div>
            <label className="mr-53 text-sm font-medium text-gray-700">
              Cornfirm Password
            </label>
            <input
              type="password"
              name="conPassword"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
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
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
