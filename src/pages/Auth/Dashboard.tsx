import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const navigate = useNavigate();

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
                <Link to='/dashboard' className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full">
                    Dashboard
                </Link>
                <Link to='/dashboard' className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full">
                    Category
                </Link>
                <Link to='/list' className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full">
                    Product
                </Link>
                <Link to='/profile' className="block py-2.5 px-6 my-2 bg-blue-500 text-white font-semibold rounded-r-full">
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
                <h1 className="text-3xl font-bold text-gray-800">
                    Hi, Welcome Back {user.name}
                </h1>
            </div>
            <div className="bg-white rounded-lg shadow p-8">
                <h3 className="text-4xl font-extrabold text-blue-600">Dashboard</h3>
                <p className="mt-2 text-gray-600">Here is your dashboard overwiew.</p>
            </div>
        </main>
      </div>
    </>
  );
}
