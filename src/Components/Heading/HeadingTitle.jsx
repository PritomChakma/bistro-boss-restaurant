

const HeadingTitle = ({subHeading,heading}) => {
    return (
        <div className="w-9/12 md:w-4/12 mx-auto text-center my-8">
            <p className="text-[#D99904] mb-2">{subHeading}</p>
            <h3 className="text-xl md:text-3xl border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default HeadingTitle;