const ServiceCards = props => {
    return (
        <section className="w-full h-[24.8rem] rounded-[20px] py-[2.6rem] px-[2rem] shadow-[0_0_0.42rem_#228B22] lg:px-[2.3rem] lg:py-[2rem] lg:w-[38.9rem] lg:h-[29.6rem] flex flex-col lg:gap-[3rem] gap-[2rem]">
            <section className="flex justify-center">
                <section className="lg:size-[10rem] size-[8.406rem] rounded-[50%] center bg-[#BADBBA]"><img src={props.image} alt="Service Icon" className="lg:size-[7.6rem] size-[6.389rem] rounded-[50%] object-cover" /></section>
            </section>
            <section>
                <h3 className="font-semibold lg:leading-[1.938rem] lg:mb-[0.8rem] text-[1.4rem] leading-[1.694rem] mb-[0.672rem]">{props.title}</h3>
                <p className="lg:text-[1.4rem] lg:leading-[2.1rem] text-[1.2rem] leading-[1.453rem]">{[props.description]}</p>
            </section>
        </section>
    );
};

export default ServiceCards;