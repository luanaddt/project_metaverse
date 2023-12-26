const NewFeatures = ({ icon, title, subtitle }) => {
    return (
        <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
            <div className="flex-center w-[70px] h-[70px] bg-[#323F5D] rounded-3xl">
                <img 
                    src={icon}
                    alt={title}
                    className="w-1/2 h-1/2 object-contain"
                />
            </div>

            <h4 className="mt-6 font-bold text-[24px] leading-[30px] text-white">
                {title}
            </h4>

            <p className="mt-4 font-normal text-[16px] leading-7 text-[#B0B0B0]">
                {subtitle}
            </p>
        </div>
    )
}

export default NewFeatures