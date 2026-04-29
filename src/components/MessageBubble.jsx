// export default function MessageBubble({ text, sent }) {
//   return (
//     <div className={`flex ${sent ? "justify-end" : "justify-start"}`}>
//       <div
//         className={`px-4 py-2 rounded-2xl max-w-xs ${
//           sent ? "bg-blue-500 text-white" : "bg-gray-200"
//         }`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// }

export default function MessageBubble({ message }) {
    const isMe = message.sender === "me";
    return (
        <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] md:max-w-[60%] ${isMe ? "items-end" : "items-start"} flex flex-col`}>
                <div
                    className={`px-4 py-2.5 rounded-2xl shadow-sm ${isMe
                            ? "bg-blue-600 text-white rounded-br-sm"
                            : "bg-white text-gray-800 rounded-bl-sm border border-gray-200"
                        }`}
                >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 px-2">{message.time}</span>
            </div>
        </div>
    );
}