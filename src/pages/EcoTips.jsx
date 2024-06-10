import { Helmet, HelmetProvider } from "react-helmet-async";

const EcoTips = () => {
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