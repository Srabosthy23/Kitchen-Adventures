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
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" />

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;