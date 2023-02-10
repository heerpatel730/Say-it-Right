import './classScheduleStyle.css';
import './styles.css';
import "./homeStyle.css";
const ClassSchedule = () => {
    return(
        <>
         <div className="table-container">
        <h1 className="heading">Class Schedule</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Start / End Time</th>
                    <th>Class Days</th>
                    <th>Mode</th>
                    {/* <th>View</th> */}

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Class">WDM</td>
                    <td data-label="Start / End Time">9:00 - 13:00 PM</td>
                    <td data-label="Class Days">Tuesday/Thursday</td>
                    <td data-label="Mode">Online</td>
                   

                </tr>
                <tr>
                    <td data-label="Class">DAMT</td>
                    <td data-label="Start / End Time">15:00 - 17:00 PM</td>
                    <td data-label="Class Days">Monday/Wednesday</td>
                    <td data-label="Mode">Offline </td>
                  
                </tr>
                <tr>
                    <td data-label="Class">DAA</td>
                    <td data-label="Start / End Time">19:00 - 22:00 PM</td>
                    <td data-label="Class Days">Monday</td>
                    <td data-label="Mode">Online </td>
                  

                </tr>
                <tr>
                    <td data-label="Class">DS</td>
                    <td data-label="Start / End Time">13:00 - 15:00 PM</td>
                    <td data-label="Class Days">Friday</td>
                    <td data-label="Mode">Online </td>
                  

                </tr>
            </tbody>
        </table>
    </div>
        </>
    );
}
export default ClassSchedule;