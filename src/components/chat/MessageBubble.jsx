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

export default function MessageBubble({ message, chatName, isGroup, onContextMenu, onReply }) {
    const isMe = message.sender === "me";
    const isSystem = message.sender === "system";

    const tick = (status) => {
        if (status === "sent") return <span className="text-[#8696a0] text-xs">✓</span>;
        if (status === "delivered") return <span className="text-[#8696a0] text-xs">✓✓</span>;
        if (status === "read") return <span className="text-[#53bdeb] text-xs">✓✓</span>;
        return null;
    };

    // System message
    if (isSystem) {
        return (
            <div className="flex justify-center my-2">
                <span className="bg-[#182229] text-[#8696a0] text-xs px-4 py-1.5 rounded-full">
                    {message.text}
                </span>
            </div>
        );
    }

    return (
        <div
            className={`flex ${isMe ? "justify-end" : "justify-start"} group`}
            onContextMenu={e => onContextMenu(e, message)}
        >
            <div className={`max-w-[70%] md:max-w-[55%] flex flex-col ${isMe ? "items-end" : "items-start"}`}>

                {/* Reply bubble */}
                {message.replyTo && (
                    <div
                        className={`w-full mb-1 rounded-lg overflow-hidden cursor-pointer ${isMe ? "bg-[#025144]" : "bg-[#1d2b33]"}`}
                        onClick={onReply}
                    >
                        <div className="border-l-4 border-[#00a884] px-3 py-2">
                            <p className="text-xs text-[#00a884] font-semibold mb-0.5">
                                {message.replyTo.sender === "me" ? "You" : chatName}
                            </p>
                            <p className="text-xs text-[#8696a0] truncate">{message.replyTo.text}</p>
                        </div>
                    </div>
                )}

                {/* Main bubble */}
                <div
                    className={`relative px-3 py-2 rounded-lg shadow-sm ${isMe
                            ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none"
                            : "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                        }`}
                    style={{ animation: "msgIn 0.15s ease-out" }}
                >
                    {/* Group sender name */}
                    {!isMe && isGroup && (
                        <p className="text-xs font-semibold text-[#00a884] mb-1">
                            {message.senderName || chatName}
                        </p>
                    )}

                    {/* Message text */}
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words pr-12">
                        {message.text}
                    </p>

                    {/* Time + ticks */}
                    <div className="absolute bottom-1.5 right-2 flex items-center gap-1">
                        <span className="text-[10px] text-[#8696a0]">{message.time}</span>
                        {isMe && tick(message.status)}
                    </div>
                </div>

            </div>
        </div>
    );
}