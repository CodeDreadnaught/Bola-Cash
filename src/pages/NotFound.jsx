import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <HelmetProvider>
            <main className="h-[100dvh] grid place-items-center fixed bg-white w-screen">
                <Helmet>
                    <title>Not Found</title>
                </Helmet>
                <section className="text-center p-[2.4rem]">
                    <section className="flex justify-center">
                        <FaExclamationTriangle className="text-[6rem] text-yellow-500 mb-[1.5rem]"/>
                    </section>
                    <h1 className="mb-[1.5rem] font-bold text-[2rem] lg:text-[2.5rem]">Oops! the page you are looking for cannot be found</h1>
                    <p className="mb-[1.5rem]">You might have <strong>entered the address incorrectly</strong> or the page has been removed</p>
                    <Link to="/"><button className="p-[0.8rem] rounded-[5px] bg-[#228B22] font-bold text-white">Go Back</button></Link>
                </section>
            </main>
        </HelmetProvider>
    );
}

export default NotFound;