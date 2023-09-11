import Door from "../components/Door";
function Calendar() {
    return (
        <div className="text-black bg-[white] flex flex-grow">
            <div className="doors-container w-full grid grid-cols-3">
                <Door number={1}/>
            </div>
        </div>
    )
}

export default Calendar;