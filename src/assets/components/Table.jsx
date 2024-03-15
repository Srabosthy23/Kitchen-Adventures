const Table = () => {

    return (
        <div>

            <div className="ml-4 lg:border p-3 rounded-2xl">
                <h2 className="text-center font-bold text-xl mb-3">Want to Cook: <span>01</span></h2>
                <table className="table">
                <thead>
                    <tr className="bg-base-200">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <th><button className="btn btn-accent rounded-full">Preparing</button></th>
                    </tr>
                </tbody>
            </table>
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
    );
};

export default Table;