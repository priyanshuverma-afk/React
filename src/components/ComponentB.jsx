import React from "react";

const ComponentB = ({ setUserData, step, userData, setStep }) => {
    const handleAddressChange = (e) => {
        setUserData((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                [e.target.name]: e.target.value,
            },
        }));
    };
    const handleNext = () => {
        if (
            userData.address.houseno &&
            userData.address.colony &&
            userData.address.city &&
            userData.address.state &&
            userData.address.country
        ) {
            setStep(3);
        } else {
            alert("Please fill all address fields");
        }
    };

    return (
        <div className="bg-[#222] text-white h-screen w-full flex justify-center items-center flex-col ">
            <div className="h-8 w-8 flex justify-center items-center rounded-full bg-blue-500 text-white font-bold">
                {step}
            </div>
            <h1 className="text-3xl font-semibold">Enter Your Address</h1>

            <form className="flex flex-col gap-2 w-full max-w-md p-8 rounded-xl shadow-lg">
                <label htmlFor="houseno">House No</label>
                <input
                    type="text"
                    id="houseno"
                    name="houseno"
                    onChange={handleAddressChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <label htmlFor="colony">Colony</label>
                <input
                    type="text"
                    id="colony"
                    name="colony"
                    onChange={handleAddressChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={handleAddressChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <label htmlFor="state">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handleAddressChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <label htmlFor="country">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    onChange={handleAddressChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <div className="flex justify-between mt-8">
                    <button
                        type="button"
                        className="bg-gray-600 hover:bg-gray-700 rounded-md py-2 px-6 font-semibold"
                        onClick={() => setStep((prev) => prev - 1)}
                    >
                        Back
                    </button>

                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-6 font-semibold"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ComponentB;