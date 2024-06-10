import { Helmet, HelmetProvider } from "react-helmet-async";

const Contact = () => {
    return (
        <HelmetProvider>
            <main>
                <Helmet>
                    <title>Contact | Bola Cash</title>
                </Helmet>
            </main>
        </HelmetProvider>);
};

export default Contact;