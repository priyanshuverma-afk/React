
const ComponentA = ({ setUserData, step, setStep, userData }) => {
    const handleChange = (e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleNext = () => {
        if (userData.name && userData.age && userData.mobile && userData.mail) {
            setStep(2);
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <div className="bg-[#222] text-white h-screen w-full flex justify-center items-center flex-col">
            <div className="h-8 w-8 flex justify-center items-center rounded-full bg-blue-500 text-white font-bold">
                {step}
            </div>
            <h1 className="text-3xl font-semibold">Enter Your Personal Details</h1>

            <form className="flex flex-col gap-4 w-full max-w-md p-8 rounded-xl shadow-lg">
                <label htmlFor="name" className="">
                    Enter your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <label htmlFor="age">Enter your Age</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    onChange={handleChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <label htmlFor="mobile">Enter your Mobile</label>
                <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    onChange={handleChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <label htmlFor="mail">Enter your Mail</label>
                <input
                    type="email"
                    id="mail"
                    name="mail"
                    onChange={handleChange}
                    className="border border-gray-500 rounded-md px-3 py-2 bg-transparent outline-none focus:border-blue-500"
                />

                <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-6 font-semibold cursor-pointer"
                    onClick={handleNext}
                >
                    Next
                </button>
            </form>
        </div>
    );
};

export default ComponentA;