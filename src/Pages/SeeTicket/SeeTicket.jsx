import { useEffect, useState } from "react";


const SeeTicket = () => {
    const [select, setSelect] = useState(false);
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        fetch('seat.json')
        .then(res => res.json())
        .then(data => setSeats(data))
    }, [])

    const handleSelect = (seat) => {
        setSelect(!select);
        console.log(select, seat )
    }

    return (
        <div>
            
            {
                seats.map((line, index) =>
                <div key={index}>
                    {
                     line.map((seat, index) =>
                        <button onClick={()=> handleSelect(seat)} key={index} className={`btn btn-outline btn-primary w-11 m-1 ${seat.custom === null? "mr-14" :''}`}>
                            {seat.seatNo}
                        </button> 
                    )
                    }
                </div>
                )
            }

            {/* <div className="flex gap-16">
                <div className="space-x-2">
                    <button onClick={handleSelect} className="btn btn-outline btn-primary px-5">A1</button>
                    <button onClick={handleSelect} className="btn btn-outline btn-primary px-5">A2</button>
                </div>
                <div className="space-x-2">
                    <button onClick={handleSelect} className="btn btn-outline btn-primary px-5">A3</button>
                    <button onClick={handleSelect} className="btn btn-outline btn-primary px-5" type="checkbox">A4</button>
                </div>
                <input className="px-5" type="checkbox" name="A1" id="" />
            </div> */}
        </div>
    );
};

export default SeeTicket;