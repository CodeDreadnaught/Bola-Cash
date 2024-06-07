const GreenButton = props => {
    const buttonStyle = `${props.className} text-white bg-[#228b22] rounded-[4px]`;

    return (
        <button className={buttonStyle}>{props.children}</button>
    );
};

export default GreenButton;