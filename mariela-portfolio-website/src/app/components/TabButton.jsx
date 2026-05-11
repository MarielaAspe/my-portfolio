import React from "react";

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active 
        ? "text-white border-b-2 border-[#00ADB5]" 
        : "text-[#ADB7BE]";

    return (
        <button onClick={selectTab} className="focus:outline-none">
            <p className={`mr-6 font-semibold hover:text-[#00ADB5] transition-all duration-300 pb-1 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;