import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const OurTrip = () => {
    const [trips1, setTrips1] = useState([]);
    const [trips2, setTrips2] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/trips')
        .then(res => res.json())
        .then(data => {
            const upTrip = data.filter(result => result.form === 'Dhaka');
            const downTrip = data.filter(result => result.form === 'Khulna');
            setTrips1(upTrip)
            setTrips2(downTrip)
        })
    }, [])
   
    return (
        <div className="my-20 grid grid-cols-2 gap-5">
            <div className="overflow-x-auto">
                <h2 className="text-2xl font-semibold text-center mb-5">Dhaka To Khulna</h2>
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
                            trips1.map(trip => 
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
            <h2 className="text-2xl font-semibold text-center mb-5">Khulna To Dhaka</h2>
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
                            trips2.map(trip => 
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
        </div>
    );
};

export default OurTrip;