import { useState } from "react";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState("🧑");

    const submitPhone = (countryCode, phoneNum) => {
        if (phoneNum.length < 10) return "Please enter a valid 10-digit number";
        setPhone(countryCode + phoneNum);
        setStep(2);
        return null;
    };

    const submitOTP = (otp) => {
        if (otp !== "123456") return "Invalid OTP. Hint: 123456";
        setStep(3);
        return null;
    };

    const submitProfile = (name, about) => {
        if (!name.trim()) return "Please enter your name";
        setUser({ name, phone, avatar: selectedAvatar, about: about || "Hey there! I am using ChatApp" });
        return null;
    };

    return {
        user, step, phone, selectedAvatar,
        setSelectedAvatar, submitPhone, submitOTP, submitProfile,
    };
}