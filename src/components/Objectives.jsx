const Objectives = props => {
    const className = `${props.className} w-full lg:w-[calc(50%-4.1rem)]`;

    return (
        <section className={className}>
            <h1 className="font-semibold leading-[1.936rem] mb-[0.2rem] lg:text-[2.4rem] lg:leading-[2.926rem] lg:mb-[0.8rem]">{props.heading}</h1>
            <p className="text-[1.4rem] leading-[1.694rem] lg:text-[2rem] lg:leading-[3rem] lg:text-justify">{props.text}</p>
        </section>
    );
};

export default Objectives;