

function instructionColumn() {
    return (
        <div className="w-2/6 bg-white min-h-screen p-[30px]">
            <div className="logo-container"><img className="w-[60px] h-[60px]" src="./images/soak-logo.png" alt="SOAK logo" /></div>
            <div className="content-container pl-[30px] pt-[160px] pr-[40px]">
                <h1 className="text-[80px] font-semibold">12 days <br />of data</h1>
                <p className="mt-10 text-lg leading-[22px] tracking-wider">Open the door to a different Christmas data visualisation every day. </p>
            </div>
            <div className="share-icon-container"></div>
        </div>
    );
}

export default instructionColumn;