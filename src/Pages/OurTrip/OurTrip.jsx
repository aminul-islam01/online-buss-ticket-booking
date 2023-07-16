import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const OurTrip = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/trips')
        .then(res => res.json())
        .then(data => setTrips(data))
    }, [])

    return (
        <div className="my-20 grid grid-cols-2 gap-5">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200">
                            <th>Coach No</th>
                            <th>Buss Name</th>
                            <th>Start Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trips.map(trip => 
                                <tr key={trip._id}>
                                <th>{trip.coachNo}</th>
                                <td>{trip.bussName}</td>
                                <td>{trip.startTime}</td>
                                <td>
                                    <Link to= {`/see-ticket/${trip._id}`}>
                                        <button className="btn btn-primary btn-sm">See Tricket</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OurTrip;