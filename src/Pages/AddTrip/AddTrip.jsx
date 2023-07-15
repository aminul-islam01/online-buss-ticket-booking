import { useForm } from "react-hook-form"
import json from './../../../public/seat.json'

const AddTrip = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        data.seat = json;
        console.log(data)
    }

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input {...register("firstName")} />
        //     <select {...register("gender")}>
        //         <option value="female">female</option>
        //         <option value="male">male</option>
        //         <option value="other">other</option>
        //     </select>
        //     <input type="submit" />
        // </form>
        <div className="hero min-h-screen bg-base-200 px-5">
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Form:</span>
                            </label>
                            <select {...register("form")} className="input input-bordered">
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
    )
};

export default AddTrip;