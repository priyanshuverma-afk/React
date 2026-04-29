import React from "react";

const ComponentC = ({ setUserData, userData, setStep }) => {
    const handleSubmit = () => {
        setUserData({
            name: "",
            age: null,
            moblie: "",
            mail: "",
            address: {
                houseno: "",
                colony: "",
                city: "",
                state: "",
                country: "",
            },
        });
        setStep(1);
        console.log("Final Data:", userData);
        alert("Form Submitted Successfully!");
    };

    return (
        <div className="bg-[#222] text-white h-screen w-full flex justify-center items-center flex-col">
            <h1 className="text-3xl font-semibold mb-8">Review Your Details</h1>

            <div className="w-full max-w-md bg-[#333] p-8 rounded-xl shadow-lg flex flex-col gap-4">
                <p>
                    <strong>Name:</strong> {userData.name}
                </p>
                <p>
                    <strong>Age:</strong> {userData.age}
                </p>
                <p>
                    <strong>Mobile:</strong> {userData.mobile}
                </p>
                <p>
                    <strong>Mail:</strong> {userData.mail}
                </p>

                <hr className="border-gray-500 my-2" />

                <p>
                    <strong>House No:</strong> {userData.address.houseno}
                </p>
                <p>
                    <strong>Colony:</strong> {userData.address.colony}
                </p>
                <p>
                    <strong>City:</strong> {userData.address.city}
                </p>
                <p>
                    <strong>State:</strong> {userData.address.state}
                </p>
                <p>
                    <strong>Country:</strong> {userData.address.country}
                </p>

                <div className="flex justify-between mt-6">
                    <button
                        type="button"
                        className="bg-gray-600 hover:bg-gray-700 rounded-md py-2 px-6 font-semibold"
                        onClick={() => setStep((prev) => prev - 1)}
                    >
                        Back
                    </button>

                    <button
                        type="button"
                        className="bg-green-600 hover:bg-green-700 rounded-md py-2 px-6 font-semibold"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComponentC;