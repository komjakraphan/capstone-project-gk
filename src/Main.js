import diningRoom from "./assets/diningRoom.jpg";

function Main() {
    return (
        <main>
            <div>
            <img src={diningRoom} alt="logo"/>
            </div>
            <div>
                <h1>Reserve a table</h1>
            </div>
            <div>
                <p>Number of people</p>
                <p>Date</p>
                <p>Time</p>
                <p>Occasion</p>
                <p>Special Request</p>
                <button>Review Reservation</button>
                <button>Modify Reservation</button>
            </div>
        </main>
    );
}

export default Main;