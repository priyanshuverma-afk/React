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

import { Menu, MoreVertical, Paperclip, Phone, Send, Smile, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ selectedChat, onMenuClick, onSidebarOpen, onBack }) {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey! How's it going?", sender: "them", time: "10:00 AM" },
        { id: 2, text: "All good, working on the dashboard 🚀", sender: "me", time: "10:02 AM" },
        { id: 3, text: "Awesome! Looking forward to it.", sender: "them", time: "10:03 AM" },
    ]);
    const [input, setInput] = useState("");
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([
            ...messages,
            { id: Date.now(), text: input, sender: "me", time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
        ]);
        setInput("");
    };

    if (!selectedChat) {
        return (
            <main className="flex-1 hidden md:flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700">Select a chat to start messaging</h3>
                    <p className="text-gray-500 mt-2">Choose from your existing conversations</p>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-1 flex flex-col bg-[#f5f5f5]">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    {/* <button onClick={onSidebarOpen} className="lg:hidden p-1 rounded hover:bg-gray-100">
                        <Settings size={20} />
                    </button>
                    <button onClick={onMenuClick} className="md:hidden p-1 rounded hover:bg-gray-100">
                        <Menu size={20} />
                    </button> */}
                    <button onClick={onBack} className="md:hidden p-1 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                            {selectedChat.name[0].toUpperCase()}
                        </div>
                        {selectedChat.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                        )}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">{selectedChat.name}</p>
                        <p className="text-xs text-gray-500">
                            {selectedChat.online ? "Active now" : "Offline"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                        <Phone size={18} />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                        <Video size={18} />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                        <MoreVertical size={18} />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 custom-scrollbar">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                <div ref={endRef}></div>
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-3 md:p-4">
                <div className="flex items-end gap-2 bg-gray-100 rounded-2xl px-3 py-2">
                    <button className="p-2 text-gray-500 hover:text-blue-600">
                        <Paperclip size={20} />
                    </button>
                    <textarea
                        rows="1"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                            }
                        }}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent outline-none resize-none text-sm py-2 max-h-32"
                    />
                    <button className="p-2 text-gray-500 hover:text-blue-600">
                        <Smile size={20} />
                    </button>
                    <button
                        onClick={sendMessage}
                        disabled={!input.trim()}
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </main>
    );
}