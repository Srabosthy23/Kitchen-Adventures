import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="container mx-auto mt-5">
            <div className="flex lg:justify-between items-center bg-base-100">
                <div className="">
                    <a className="text-2xl font-bold">Kitchen Adventures</a>
                </div>
                <div className="lg:space-x-10 flex flex-col lg:flex-row ">
                    <a>Home</a>
                    <a>Recipies</a>
                    <a>About</a>
                    <a>Search</a>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="flex items-center justify-center gap-2 relative">
                        <CiSearch className="absolute left-2" />
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full pl-8" />
                    </div>

                    <div className="p-2 rounded-full bg-green-400">
                        <FaRegUserCircle className="text-3xl "/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;