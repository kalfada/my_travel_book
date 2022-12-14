import SingleVacation from "../../components/SinglieVacation";
import { Link } from "react-router-dom";

export default function VacationPage() {
    return (
        <>
            <Link to={'/'}>
                <div>Go Back</div>
            </Link>
            <SingleVacation />
        </>
    )
}