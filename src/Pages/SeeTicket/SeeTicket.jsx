import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form"

const SeeTicket = () => {
    const [select, setSelect] = useState(false);
    const [trip, setTrip] = useState({});
    const [rent, setRent] = useState();
    const seats = useLoaderData();
    const { register, handleSubmit, watch } = useForm()
    const id = useParams();
    const { form, coachNo, startTime, date } = trip;

    useEffect(() => {
        fetch(`http://localhost:5000/trip/${id.id}`)
            .then(res => res.json())
            .then(data => setTrip(data))
    }, [id])

    console.log()

    const handleSelect = (seat) => {
        setSelect(!select);
        console.log(select, seat)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleTo = () => {
        const to = watch('to');
        if (to === 'Dhaka') {
            setRent(500)
        }
    };


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
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Form:</span>
                                    </label>
                                    <select {...register("form")} className="input input-bordered">
                                        {form === 'Dhaka' ? <option value="Dhaka">Dhaka</option>
                                            : <option value="Khulna">Khulna</option>}
                                        <option value="Gopalgonj">Gopalgonj</option>
                                        <option value="Narail">Narail</option>
                                        <option value="Pirojpur">Pirojpur</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">To:</span>
                                    </label>
                                    <select onClick={handleTo} {...register("to")} className="input input-bordered">
                                        {form === 'Khulna' ? <option value="Dhaka">Dhaka</option>
                                            : <option value="Khulna">Khulna</option>}
                                        <option value="Gopalgonj">Gopalgonj</option>
                                        <option value="Narail">Narail</option>
                                        <option value="Pirojpur">Pirojpur</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rent Per Seat (TK)</span>
                                    </label>
                                    <input type="text" {...register("rent")} className="input input-bordered" defaultValue={rent} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total Rent (TK)</span>
                                    </label>
                                    <input type="text" {...register("total rent")} className="input input-bordered" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name")} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" {...register("phoneNumber")} className="input input-bordered" />
                                </div>
                            </div>
                            <button className="btn btn-primary">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SeeTicket;