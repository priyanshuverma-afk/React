import { useState } from "react";

const emojiCategories = {
    "😊 Smileys": ["😀", "😂", "😊", "😍", "🤩", "😎", "🥳", "😇", "🤗", "😋", "😜", "🤓", "🧐", "😏", "😒", "😔", "😢", "😭", "😤", "🤬"],
    "👨 People": ["🧑", "👩", "🧔", "👨‍💻", "👩‍💻", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍💼", "👨‍💼", "👩‍💼", "🧑‍🍳", "👨‍🍳", "👩‍🍳", "🦸", "🦹", "🧙", "👮", "💂", "🕵️"],
    "🐱 Animals": ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🦄", "🐔", "🐧", "🦋", "🦁"],
    "⚽ Sports": ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸", "🥊", "🏋️", "🤸", "⛹️", "🚴", "🏊", "🧗", "🏄", "🤺", "🥋"],
    "🎨 Arts": ["🎨", "🎭", "🎬", "🎤", "🎸", "🎹", "🎺", "🎻", "🥁", "🎮", "🕹️", "🎲", "♟️", "🎯", "🎳", "🎪", "🤹", "🎠", "🎡", "🎢"],
};

const bgColors = [
    "#075e54", "#128c7e", "#25d366", "#00a884",
    "#34b7f1", "#3b82f6", "#8b5cf6", "#ec4899",
    "#f97316", "#ef4444", "#84cc16", "#14b8a6",
];

export default function Register({ onRegister }) {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [name, setName] = useState("");
    const [about, setAbout] = useState("Hey there! I am using ChatApp");
    const [avatar, setAvatar] = useState("🧑"); 
    const [avatarType, setAvatarType] = useState("emoji");
    const [bgColor, setBgColor] = useState("#00a884");
    const [error, setError] = useState("");

    const submitPhone = () => {
        if (phone.length < 10) { setError("Please enter a valid 10-digit number"); return; }
        setError(""); setStep(2);
    };

    const submitOTP = () => {
        if (otp.join("") !== "123456") { setError("Invalid OTP. Hint: 123456"); return; }
        setError(""); setStep(3);
    };

    const submitProfile = () => {
        if (!name.trim()) { setError("Please enter your name"); return; }
        setError("");
        onRegister({
            name,
            phone: countryCode + phone,
            avatar: avatarType === "emoji" ? avatar : name.slice(0, 2).toUpperCase(),
            avatarType,
            bgColor,
            about
        });
    };

    const handleOtp = (val, idx) => {
        const newOtp = [...otp];
        newOtp[idx] = val;
        setOtp(newOtp);
        if (val && idx < 5) document.getElementById("otp" + (idx + 1))?.focus();
    };

    return (
        <div className="min-h-screen bg-[#111b21] flex items-center justify-center p-4">
            <div className="bg-[#202c33] rounded-xl p-8 w-full max-w-sm flex flex-col gap-5">

                {/* Logo */}
                <div className="text-center">
                    <div className="text-6xl mb-2">💬</div>
                    <h1 className="text-xl font-semibold text-[#00a884]">ChatApp</h1>
                    <p className="text-xs text-[#8696a0] mt-1">Register to get started</p>
                </div>

                {/* Step 1 - Phone */}
                {step === 1 && (
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <select
                                value={countryCode}
                                onChange={e => setCountryCode(e.target.value)}
                                className="bg-[#2a3942] border border-[#2a3942] rounded-lg px-3 py-3 text-[#e9edef] text-sm outline-none w-24"
                            >
                                <option value="+91">+91 IN</option>
                                <option value="+1">+1 US</option>
                                <option value="+44">+44 UK</option>
                                <option value="+971">+971 UAE</option>
                                <option value="+92">+92 PK</option>
                            </select>
                            <input
                                type="tel" maxLength={10} value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="Phone number"
                                className="flex-1 bg-[#2a3942] border border-[#2a3942] focus:border-[#00a884] rounded-lg px-4 py-3 text-[#e9edef] text-sm outline-none"
                            />
                        </div>
                        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                        <button onClick={submitPhone} className="bg-[#00a884] hover:bg-[#008069] text-white font-semibold rounded-lg py-3 transition">
                            Next
                        </button>
                    </div>
                )}

                {/* Step 2 - OTP */}
                {step === 2 && (
                    <div className="flex flex-col gap-4">
                        <p className="text-xs text-[#8696a0] text-center">
                            Enter OTP sent to <span className="text-[#e9edef]">{countryCode + phone}</span>
                        </p>
                        <div className="flex gap-2 justify-center">
                            {otp.map((v, i) => (
                                <input
                                    key={i} id={"otp" + i} maxLength={1} value={v}
                                    onChange={e => handleOtp(e.target.value, i)}
                                    className="w-11 h-11 bg-[#2a3942] border border-[#2a3942] focus:border-[#00a884] rounded-lg text-center text-[#e9edef] text-lg outline-none"
                                />
                            ))}
                        </div>
                        <p className="text-xs text-[#8696a0] text-center">Hint: OTP is <span className="text-[#00a884] font-bold">123456</span></p>
                        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                        <button onClick={submitOTP} className="bg-[#00a884] hover:bg-[#008069] text-white font-semibold rounded-lg py-3 transition">
                            Verify OTP
                        </button>
                        <button onClick={() => { setStep(1); setError(""); }} className="text-[#8696a0] text-sm hover:text-[#e9edef] transition">
                            ← Change number
                        </button>
                    </div>
                )}

                {/* Step 3 - Profile */}
                {step === 3 && (
                    <div className="flex flex-col gap-4">
                        <p className="text-xs text-[#8696a0] text-center">Set up your profile</p>

                        {/* Avatar Type Toggle */}
                        <div className="flex gap-2 justify-center">
                            <button
                                onClick={() => setAvatarType("emoji")}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${avatarType === "emoji" ? "bg-[#00a884] text-white" : "bg-[#2a3942] text-[#8696a0]"}`}
                            >
                                Emoji
                            </button>
                            <button
                                onClick={() => setAvatarType("initials")}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${avatarType === "initials" ? "bg-[#00a884] text-white" : "bg-[#2a3942] text-[#8696a0]"}`}
                            >
                                Initials
                            </button>
                        </div>

                        {/* Selected Avatar Preview */}
                        <div className="flex justify-center">
                            {avatarType === "emoji" ? (
                                <div className="w-20 h-20 rounded-full bg-[#2a3942] flex items-center justify-center text-5xl border-4 border-[#00a884]">
                                    {avatar}
                                </div>
                            ) : (
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-[#00a884]"
                                    style={{ background: bgColor }}
                                >
                                    {name ? name.slice(0, 2).toUpperCase() : "AT"}
                                </div>
                            )}
                        </div>

                        {/* Emoji Picker */}
                        {avatarType === "emoji" && (
                            <div className="bg-[#2a3942] rounded-xl p-3 max-h-52 overflow-y-auto custom-scrollbar">
                                {Object.entries(emojiCategories).map(([cat, emojis]) => (
                                    <div key={cat} className="mb-3">
                                        <p className="text-xs text-[#8696a0] mb-2 font-semibold">{cat}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {emojis.map(em => (
                                                <button
                                                    key={em}
                                                    onClick={() => setAvatar(em)}
                                                    className={`w-9 h-9 rounded-lg text-xl flex items-center justify-center transition hover:bg-[#1f2c33] ${avatar === em ? "bg-[#00a884]/30 ring-2 ring-[#00a884]" : ""}`}
                                                >
                                                    {em}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Color Picker for Initials */}
                        {avatarType === "initials" && (
                            <div className="bg-[#2a3942] rounded-xl p-3">
                                <p className="text-xs text-[#8696a0] mb-2 font-semibold">Pick a color</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {bgColors.map(c => (
                                        <button
                                            key={c}
                                            onClick={() => setBgColor(c)}
                                            className={`w-9 h-9 rounded-full border-2 transition ${bgColor === c ? "border-white scale-110" : "border-transparent"}`}
                                            style={{ background: c }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <input
                            type="text" value={name} onChange={e => setName(e.target.value)}
                            placeholder="Your name" maxLength={30}
                            className="bg-[#2a3942] border border-[#2a3942] focus:border-[#00a884] rounded-lg px-4 py-3 text-[#e9edef] text-sm outline-none"
                        />
                        <input
                            type="text" value={about} onChange={e => setAbout(e.target.value)}
                            placeholder="About" maxLength={60}
                            className="bg-[#2a3942] border border-[#2a3942] focus:border-[#00a884] rounded-lg px-4 py-3 text-[#e9edef] text-sm outline-none"
                        />
                        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                        <button onClick={submitProfile} className="bg-[#00a884] hover:bg-[#008069] text-white font-semibold rounded-lg py-3 transition">
                            Start Chatting
                        </button>
                        <button onClick={() => { setStep(2); setError(""); }} className="text-[#8696a0] text-sm hover:text-[#e9edef] transition">
                            ← Back
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}