import BolaCashLogo from "../assets/icons/bola-cash-logo-icon.svg";

const Spinner = () => {
    const spinnerStyles = {
        animation: "move 1s alternate infinite"
    };

    return (
        <div className="fixed w-full h-full center top-0 left-0 bg-[rgba(0,0,0,0.5)] z-[30] linear-transistion">
            <img src={BolaCashLogo} alt="Spinner Icon" style={spinnerStyles}  className="w-[8rem] h-[8rem]" />
        </div>
    );
};

export default Spinner;