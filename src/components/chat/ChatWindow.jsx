// import MessageBubble from "./MessageBubble";

// export default function ChatWindow({ selectedChat, setShowChats }) {
//   return (
//     <div className="flex-1 flex flex-col">

//       {/* Mobile Header */}
//       <div className="md:hidden p-3 border-b flex items-center gap-3">
//         <button onClick={() => setShowChats(true)}>☰</button>
//         <span>{selectedChat || "Select Chat"}</span>
//       </div>

//       {/* Desktop Header */}
//       <div className="hidden md:flex h-16 bg-white border-b items-center px-6">
//         <h2 className="font-semibold text-lg">
//           {selectedChat || "Select a chat"}
//         </h2>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 p-4 space-y-2 overflow-y-auto">
//         {selectedChat ? (
//           <>
//             <MessageBubble text="Hello!" sent />
//             <MessageBubble text="Hi there 👋" />
//           </>
//         ) : (
//           <div className="h-full flex items-center justify-center text-gray-400">
//             Select a chat
//           </div>
//         )}
//       </div>

//       {/* Input */}
//       {selectedChat && (
//         <div className="p-3 border-t bg-white">
//           <input
//             placeholder="Type a message..."
//             className="w-full px-4 py-2 bg-gray-100 rounded-full outline-none"
//           />
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { Phone, Video, MoreVertical, Paperclip, Smile, Send, ArrowLeft, X } from "lucide-react";
import MessageBubble from "./MessageBubble";

const emojis = ["😀", "😂", "😊", "😍", "🤩", "😎", "🥳", "😇", "🤗", "😋", "😜", "🤓", "👍", "👏", "🙏", "❤️", "🔥", "🎉", "💪", "🚀", "😭", "😤", "🤔", "👀", "💯", "✅", "🫡", "😅", "🥹", "😱"];

export default function ChatWindow({
    activeChat, input, setInput, replyTo, setReplyTo,
    onSend, onBack, onDeleteMessage, onClearChat, onToggleMute, user
}) {
    const endRef = useRef(null);
    const inputRef = useRef(null);
    const [showEmoji, setShowEmoji] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [msgCtx, setMsgCtx] = useState(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [activeChat?.msgs]);

    useEffect(() => {
        if (replyTo) inputRef.current?.focus();
    }, [replyTo]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
            setShowEmoji(false);
        }
    };

    const handleMsgCtx = (e, msg) => {
        e.preventDefault();
        setMsgCtx({ x: e.clientX, y: e.clientY, msg });
    };

    if (!activeChat) {
        return (
            <main className="flex-1 hidden md:flex flex-col items-center justify-center bg-[#222e35] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")` }}
                />
                <div className="text-center z-10">
                    <div className="text-8xl mb-6 opacity-20">💬</div>
                    <h3 className="text-2xl font-light text-[#e9edef] mb-2">ChatApp Web</h3>
                    <p className="text-[#8696a0] text-sm max-w-xs">Send and receive messages without keeping your phone online.</p>
                    <div className="mt-8 flex items-center gap-2 text-[#8696a0] text-xs">
                        <span className="w-2 h-2 rounded-full bg-[#00a884]"></span>
                        End-to-end encrypted
                    </div>
                </div>
            </main>
        );
    }

    const bgColor = activeChat.avatarType === "initials" ? activeChat.bgColor : "#2a3942";

    return (
        <main className="flex-1 flex flex-col bg-[#0b141a] relative overflow-hidden">

            {/* WhatsApp pattern bg */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")` }}
            />

            {/* Header */}
            <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 z-10 flex-shrink-0 shadow-sm">
                <button onClick={onBack} className="md:hidden p-1 text-[#8696a0] hover:text-[#e9edef]">
                    <ArrowLeft size={22} />
                </button>

                {/* Avatar */}
                <div
                    onClick={() => setShowInfo(true)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer flex-shrink-0"
                    style={{ background: bgColor }}
                >
                    {activeChat.avatarType === "initials"
                        ? <span className="text-white font-bold text-sm">{activeChat.avatar}</span>
                        : activeChat.avatar}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 cursor-pointer" onClick={() => setShowInfo(true)}>
                    <p className="font-semibold text-[#e9edef] text-sm truncate">{activeChat.name}</p>
                    <p className="text-xs text-[#00a884]">
                        {activeChat.isGroup
                            ? activeChat.members?.slice(0, 3).join(", ") + (activeChat.members?.length > 3 ? "..." : "")
                            : activeChat.online ? "online" : activeChat.lastSeen}
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-1">
                    <button className="p-2 rounded-full hover:bg-[#2a3942] transition" title="Video call">
                        <Video size={20} className="text-[#aebac1]" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-[#2a3942] transition" title="Voice call">
                        <Phone size={18} className="text-[#aebac1]" />
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="p-2 rounded-full hover:bg-[#2a3942] transition"
                        >
                            <MoreVertical size={20} className="text-[#aebac1]" />
                        </button>
                        {showMenu && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                                <div className="absolute right-0 top-10 bg-[#233138] rounded-lg shadow-xl py-1 z-50 min-w-[180px]">
                                    {[
                                        { label: "👤 Contact info", fn: () => { setShowInfo(true); setShowMenu(false); } },
                                        { label: activeChat.muted ? "🔊 Unmute" : "🔇 Mute", fn: () => { onToggleMute(activeChat.id); setShowMenu(false); } },
                                        { label: "🗑 Clear chat", fn: () => { onClearChat(activeChat.id); setShowMenu(false); }, danger: true },
                                    ].map((item, i) => (
                                        <button key={i} onClick={item.fn}
                                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#2a3942] transition ${item.danger ? "text-red-400" : "text-[#e9edef]"}`}>
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 custom-scrollbar z-10">
                {activeChat.msgs.length === 0 && (
                    <div className="flex justify-center mt-8">
                        <span className="bg-[#202c33] text-[#8696a0] text-xs px-4 py-2 rounded-full">
                            No messages yet. Say hi! 👋
                        </span>
                    </div>
                )}
                <div className="flex justify-center mb-2">
                    <span className="bg-[#202c33] text-[#8696a0] text-xs px-4 py-1.5 rounded-full">Today</span>
                </div>
                {activeChat.msgs.map(msg => (
                    <MessageBubble
                        key={msg.id}
                        message={msg}
                        chatName={activeChat.name}
                        isGroup={activeChat.isGroup}
                        onContextMenu={handleMsgCtx}
                        onReply={() => setReplyTo(msg)}
                    />
                ))}
                <div ref={endRef} />
            </div>

            {/* Reply Preview */}
            {replyTo && (
                <div className="bg-[#202c33] px-4 py-2 flex items-center gap-3 z-10 flex-shrink-0 border-l-4 border-[#00a884]">
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#00a884] font-semibold mb-0.5">
                            {replyTo.sender === "me" ? user?.name || "You" : activeChat.name}
                        </p>
                        <p className="text-xs text-[#8696a0] truncate">{replyTo.text}</p>
                    </div>
                    <button onClick={() => setReplyTo(null)} className="text-[#8696a0] hover:text-[#e9edef]">
                        <X size={18} />
                    </button>
                </div>
            )}

            {/* Emoji Picker */}
            {showEmoji && (
                <div className="bg-[#233138] border-t border-[#2a3942] px-4 py-3 z-10 flex-shrink-0">
                    <div className="flex flex-wrap gap-2">
                        {emojis.map(em => (
                            <button key={em} onClick={() => setInput(prev => prev + em)}
                                className="text-2xl hover:scale-125 transition-transform">
                                {em}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input */}
            <div className="bg-[#202c33] px-4 py-3 flex items-end gap-3 z-10 flex-shrink-0">
                <button
                    onClick={() => setShowEmoji(!showEmoji)}
                    className={`p-2 rounded-full transition flex-shrink-0 ${showEmoji ? "text-[#00a884]" : "text-[#8696a0] hover:text-[#e9edef]"}`}
                >
                    <Smile size={22} />
                </button>

                <button className="p-2 rounded-full text-[#8696a0] hover:text-[#e9edef] transition flex-shrink-0">
                    <Paperclip size={22} />
                </button>

                <div className="flex-1 bg-[#2a3942] rounded-xl px-4 py-2.5 flex items-end gap-2">
                    <textarea
                        ref={inputRef}
                        value={input}
                        onChange={e => {
                            setInput(e.target.value);
                            e.target.style.height = "auto";
                            e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message"
                        rows={1}
                        className="flex-1 bg-transparent outline-none text-[#e9edef] text-sm resize-none placeholder:text-[#8696a0] max-h-32 leading-relaxed"
                    />
                </div>

                <button
                    onClick={() => { onSend(); setShowEmoji(false); }}
                    className="w-11 h-11 rounded-full bg-[#00a884] hover:bg-[#008069] flex items-center justify-center text-white transition flex-shrink-0 shadow-md"
                >
                    <Send size={20} />
                </button>
            </div>

            {/* Message Context Menu */}
            {msgCtx && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setMsgCtx(null)} />
                    <div
                        className="fixed z-50 bg-[#233138] rounded-lg shadow-xl py-1 min-w-[160px]"
                        style={{
                            left: Math.min(msgCtx.x, window.innerWidth - 180),
                            top: Math.min(msgCtx.y, window.innerHeight - 160)
                        }}
                    >
                        {[
                            { label: "↩ Reply", fn: () => { setReplyTo(msgCtx.msg); setMsgCtx(null); } },
                            { label: "📋 Copy", fn: () => { navigator.clipboard?.writeText(msgCtx.msg.text); setMsgCtx(null); } },
                            { label: "🗑 Delete", fn: () => { onDeleteMessage(msgCtx.msg.id); setMsgCtx(null); }, danger: true },
                        ].map((item, i) => (
                            <button key={i} onClick={item.fn}
                                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#2a3942] transition ${item.danger ? "text-red-400" : "text-[#e9edef]"}`}>
                                {item.label}
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* Contact Info Modal */}
            {showInfo && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                    <div className="bg-[#202c33] rounded-xl p-6 w-full max-w-sm flex flex-col gap-4">
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-3"
                                style={{ background: bgColor }}>
                                {activeChat.avatarType === "initials"
                                    ? <span className="text-white font-bold text-xl">{activeChat.avatar}</span>
                                    : activeChat.avatar}
                            </div>
                            <h3 className="text-[#e9edef] font-semibold text-lg">{activeChat.name}</h3>
                            <p className="text-[#00a884] text-sm">
                                {activeChat.isGroup ? `${activeChat.members?.length} members` : activeChat.online ? "online" : activeChat.lastSeen}
                            </p>
                        </div>
                        {activeChat.isGroup && (
                            <div className="bg-[#2a3942] rounded-lg p-3">
                                <p className="text-xs text-[#00a884] font-semibold mb-2 uppercase">Members</p>
                                {activeChat.members?.map((m, i) => (
                                    <p key={i} className="text-sm text-[#e9edef] py-1">👤 {m}</p>
                                ))}
                            </div>
                        )}
                        <div className="flex gap-2">
                            <button className="flex-1 bg-[#00a884] hover:bg-[#008069] text-white rounded-lg py-2.5 text-sm font-semibold transition">
                                📞 Call
                            </button>
                            <button
                                onClick={() => { onToggleMute(activeChat.id); setShowInfo(false); }}
                                className="flex-1 bg-[#2a3942] text-[#e9edef] rounded-lg py-2.5 text-sm font-semibold transition hover:bg-[#374248]"
                            >
                                {activeChat.muted ? "🔊 Unmute" : "🔇 Mute"}
                            </button>
                        </div>
                        <button onClick={() => setShowInfo(false)}
                            className="text-[#8696a0] text-sm hover:text-[#e9edef] transition text-center">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}