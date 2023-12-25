const StartSteps = ({ number, text }) => {
    return (
        <div className="flex-center gap-[30px]">
            <div className="flex-center w-[70px] h-[70px] bg-[#323F5D] rounded-3xl">
                <p className="font-bold text-[20px] leading-[25px] text-white">
                    {number}
                </p>
            </div>

            <p className="flex-1 font-normal text-[18px] leading-8 text-[#B0B0B0]">
                {text}
            </p>
        </div>
    )
}

export default StartSteps