import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { profile } from "../../services/authService";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]); //empty error
    // console.log({name, email, password, conPassword})
    profile({
      name: name,
      email: email,
      password: password,
      confirmed_password: conPassword,
    }, user.token).then((res) => {
      // console.log(res.data);
      if (res.data.errors) {
        setErrors(res.data.errors); //para ma display ang error
      } else {
        // console.log(res.data);
        localStorage.setItem("user", JSON.stringify({
            ...user,
            name: res.data.name,
            email: res.data.email
        })); //save sa localstorage
        // localStorage.setItem("isAuthenticated", true);

        navigate("/profile");
      }
    });
  };

  const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
        window.location.href = "/";

        navigate("/");
    }

  return (
    <>
      <div className="">
        <aside className="absolute top-0 h-full left-0 w-60 bg-white shadow-lg">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">PureMeds</h1>
          </div>
          <nav className="mt-10">
            <Link
              to="/dashboard"
              className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard"
              className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full"
            >
              Category
            </Link>
            <Link
              to="/list"
              className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full"
            >
              Product
            </Link>
            <Link
              to="/profile"
              className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full"
            >
              Setting
            </Link>
            <a onClick={logout} className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full">
                Logout
            </a>
          </nav>
        </aside>

        {/* maincontent */}
        <main className="flex-1 p-10 ml-30">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
          </div>
          <div className="bg-white rounded-lg shadow p-8">
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
            //   className="bg-white p-6 rounded-xl shadow-md w-100 space-y-4"
            >
              <h1 className="text-2xl font-bold text-gray-800 ">Details</h1>
              <div>
                <label className="mr-220 text-sm font-medium text-gray-700">
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
                <label className="mr-220 text-sm font-medium text-gray-700">
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
                <label className="mr-215 text-sm font-medium text-gray-700">
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
                <label className="mr-200 text-sm font-medium text-gray-700">
                  Cornfirm Password
                </label>
                <input
                  type="password"
                  name="conPassword"
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  className="mt-1 block w-full px-3 mb-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
