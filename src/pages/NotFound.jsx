import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <main className="h-[100dvh] grid place-items-center">
            <section className="text-center">
                <section className="flex justify-center">
                    <FaExclamationTriangle className="text-[6rem] text-yellow-500 mb-[1.5rem]"/>
                </section>
                <h1 className="mb-[1.5rem] font-bold text-[2.5rem]">404 Not Found</h1>
                <p className="mb-[1.5rem]">This page is actively under maintenance and cannot be accessed at the moment.</p>
                <Link to="/"><button className="mb-[1.5rem] p-[0.8rem] rounded-[5px] bg-[#228B22] font-bold text-white">Go Back</button></Link>
            </section>
        </main>
    );
}

export default NotFound;