const Table = (currentlyCookingCart) => {

    return (
        <div>
            {/* table 2 */}
            <div className="ml-4 mt-10 border rounded-2xl">
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
                        {
                            currentlyCookingCart.map((item, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.time}</td>
                                    <td>{item.calories}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Table;