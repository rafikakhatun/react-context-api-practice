import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Drashboard = () => {

    // context api data uses 
     
    const {data} = useContext(AuthContext);

    console.log(data)





    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Users</h2>
                        <p className="text-3xl font-bold text-blue-600">1,250</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">New Orders</h2>
                        <p className="text-3xl font-bold text-green-500">320</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Revenue</h2>
                        <p className="text-3xl font-bold text-red-500">$8,450</p>
                    </div>
                </div>
                {/* context api data show*/}

                <h1 className="text-xl font-semibold text-blue-600 text-center mt-14">{data}</h1>



            </div>
        </div>
    );
};

export default Drashboard;
