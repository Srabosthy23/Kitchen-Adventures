const Recipe = () => {
    return (
        <div className="mt-10 container mx-auto mb-20">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Our Recipes</h2>
                <p className="w-[800px] mx-auto">Embarking on kitchen adventures with our recipes is like setting sail on a culinary voyage, exploring flavors and techniques that tantalize the taste buds and ignite the imagination. Each recipe is a treasure map, guiding us through the labyrinth of ingredients and instructions to discover hidden culinary gems.</p>
            </div>
            {/* card container and table container*/}
            <div className="mt-10 flex">
                {/* left side */}
                <div className="w-2/3 mr-4">
                    {/* cards */}
                    <div className="lg:grid grid-cols-2 gap-4">
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                                <hr />

                                <p className="font-bold">Ingredients: 6</p>
                                <ul className="list-disc list-inside pl-5">
                                    <li>500gm moida</li>
                                    <li>onion chop</li>
                                    <li>onion chop</li>
                                    <li>onion chop</li>
                                    <li>onion chop</li>
                                    <li>onion chop</li>
                                </ul>

                                <hr />

                                <div className="flex justify-between">
                                    <p><span>30</span> minutes</p>
                                    <p><span>600</span> calories</p>
                                </div>

                                <button className="btn btn-accent rounded-full w-2/3 mx-auto font-bold">Want to Cook</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* right side 2 table */}
                <div className="w-1/3 lg:border p-3 rounded-2xl">
                    <div>
                        <div className="">
                            <h2 className="text-center font-bold text-xl mb-3">Want to Cook: <span>01</span></h2>
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="bg-base-200">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality</td>
                                        <td>Blue</td>
                                        <th><button className="btn btn-accent rounded-full">Preparing</button></th>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* table 2 */}
                    <div className=" mt-10">
                        <h2 className="text-center font-bold text-xl mb-3">Currently Cooking: <span>01</span></h2>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-base-200">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recipe;