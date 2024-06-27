import { useEffect, useContext } from "react";
import NavLoginContext from "../context/NavLoginContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

const EcoTips = () => {
    const { setHeaderBg } = useContext(NavLoginContext);

    useEffect(() => {
        setHeaderBg("bg-[rgb(233,231,232)]");
    }, []);
    
    return (
        <HelmetProvider>
            <main>
                <Helmet>
                    <title>EcoTips | Bola Cash</title>
                </Helmet>
            </main>
        </HelmetProvider>);
};

export default EcoTips;