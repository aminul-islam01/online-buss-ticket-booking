import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form"

const SeeTicket = () => {
    const [select, setSelect] = useState(false);
    const [trip, setTrip] = useState({});
    const seats = useLoaderData();
    const { register, handleSubmit } = useForm()
    const id = useParams();
    const { form, coachNo, startTime, date } = trip;

    useEffect(() => {
        fetch(`http://localhost:5000/trip/${id.id}`)
            .then(res => res.json())
            .then(data => setTrip(data))
    }, [id])

    console.log(trip)
    console.log(seats)

    const handleSelect = (seat) => {
        setSelect(!select);
        console.log(select, seat)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="flex justify-evenly mt-5">
                <h2 className="text-2xl font-semibold">Coach No: {coachNo}</h2>
                <h2 className="text-2xl font-semibold">Date: {date}</h2>
                <h2 className="text-2xl font-semibold">Time: {startTime}</h2>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="mx-auto p-8">
                    {
                        seats.seat.map((line, index) =>
                            <div key={index}>
                                {
                                    line.map((seat, index) =>
                                        <button onClick={() => handleSelect(seat)} key={index} className={`btn btn-outline btn-primary w-11 m-1 ${seat.custom === null ? "mr-14" : ''}`} disabled={seat.custom === null}>
                                            {seat.seatNo}
                                        </button>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div className="hero min-h-screen px-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-center">Add New Trip</h1>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Coach No</span>
                                    </label>
                                    <input type="number" {...register("coachNo")} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buss Name</span>
                                    </label>
                                    <input type="text" {...register("bussName")} className="input input-bordered" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Form:</span>
                                    </label>
                                    <input type="text" {...register("form")} className="input input-bordered" defaultValue={form}readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">To:</span>
                                    </label>
                                    <select {...register("to")} className="input input-bordered">
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Gopalgonj">Gopalgonj</option>
                                        <option value="Narail">Narail</option>
                                        <option value="Pirojpur">Pirojpur</option>
                                        <option value="Khulna">Khulna</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" {...register("date")} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Start Time</span>
                                    </label>
                                    <input type="time" {...register("startTime")} className="input input-bordered" />
                                </div>
                            </div>
                            <button className="btn btn-primary">Add Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SeeTicket;