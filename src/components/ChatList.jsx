// import ChatItem from "./ChatHeader";

// export default function ChatList({
//   selectedChat,
//   setSelectedChat,
//   showChats,
//   setShowChats,
// }) {
//   return (
//     <div
//       className={`
//         fixed md:static top-0 left-0 h-full w-80 bg-white border-r z-20
//         transform transition-transform duration-300
//         ${showChats ? "translate-x-0" : "-translate-x-full"}
//         md:translate-x-0
//       `}
//     >
//       {/* Header */}
//       <div className="p-4 border-b flex justify-between">
//         <span className="font-semibold">Chats</span>
//         <button className="md:hidden" onClick={() => setShowChats(false)}>
//           ✖
//         </button>
//       </div>

//       {/* Chat Items */}
//       <div>
//         <ChatItem
//           name="Ustad"
//           active={selectedChat === "Ustad"}
//           onClick={() => {
//             setSelectedChat("Ustad");
//             setShowChats(false);
//           }}
//         />
//         <ChatItem
//           name="User"
//           active={selectedChat === "User"}
//           onClick={() => {
//             setSelectedChat("User");
//             setShowChats(false);
//           }}
//         />
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Search, Plus, X } from "lucide-react";

// const dummyChats = [
//   { id: 1, name: "Ustad", lastMsg: "Hello, how are you?", time: "10:30 AM", unread: 0, online: true },
//   { id: 2, name: "User", lastMsg: "Meeting at 3 PM", time: "Yesterday", unread: 0, online: false },
//   { id: 3, name: "John Doe", lastMsg: "Project update?", time: "Mon", unread: 0, online: true },
//   { id: 4, name: "Sarah Lee", lastMsg: "Thanks!", time: "Sun", unread: 0, online: false },
// ];

// export default function ChatList({ selectedChat, onSelectChat, isOpen, onClose }) {
//   const [activeTab, setActiveTab] = useState("Chats");
//   const [search, setSearch] = useState("");

//   const filtered = dummyChats.filter((c) =>
//     c.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <aside
//       className={`${
//         isOpen ? "flex" : "hidden"
//       } md:flex flex-col w-full md:w-80 lg:w-96 bg-white border-r border-gray-200`}
//     >
//       {/* Header */}
//       <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
//         <div>
//           <h2 className="font-semibold text-gray-800">All Users</h2>
//           <p className="text-xs text-green-500 flex items-center gap-1">
//             <span className="w-2 h-2 rounded-full bg-green-500"></span> Connected
//           </p>
//         </div>
//         <button onClick={onClose} className="md:hidden p-1 rounded hover:bg-gray-100">
//           <X size={20} />
//         </button>
//       </div>

//       {/* Search */}
//       <div className="p-3 border-b border-gray-200">
//         <div className="relative">
//           <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search chats..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200">
//         {["Chats", "Group"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
//               activeTab === tab
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//         <button className="ml-auto flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
//           <Plus size={14} /> New
//         </button>
//       </div>

//       {/* Chat list */}
//       <div className="flex-1 overflow-y-auto custom-scrollbar">
//         {filtered.map((chat) => (
//           <button
//             key={chat.id}
//             onClick={() => handleChatClick(chat)}
//             className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition border-b border-gray-100 ${
//               selectedChat?.id === chat.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
//             }`}
//           >
//             <div className="relative">
//               <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
//                 {chat.name[0].toUpperCase()}
//               </div>
//               {chat.online && (
//                 <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
//               )}
//             </div>
//             <div className="flex-1 text-left min-w-0">
//               <div className="flex justify-between items-center">
//                 <p className="font-medium text-gray-800 truncate">{chat.name}</p>
//                 <span className="text-xs text-gray-500">{chat.time}</span>
//               </div>
//               <div className="flex justify-between items-center mt-0.5">
//                 <p className="text-sm text-gray-500 truncate">{chat.lastMsg}</p>
//                 {chat.unread > 0 && (
//                   <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
//                     {chat.unread}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </aside>
//   );
// }

import { useState } from "react";
import { Search, Plus, X } from "lucide-react";

const dummyChats = [
  { id: 1, name: "Ustad", lastMsg: "Hello, how are you?", time: "10:30 AM", unread: 0, online: true },
  { id: 2, name: "User", lastMsg: "Meeting at 3 PM", time: "Yesterday", unread: 0, online: false },
  { id: 3, name: "John Doe", lastMsg: "Project update?", time: "Mon", unread: 0, online: true },
  { id: 4, name: "Sarah Lee", lastMsg: "Thanks!", time: "Sun", unread: 0, online: false },
];

export default function ChatList({ selectedChat, onSelectChat, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Chats");
  const [search, setSearch] = useState("");

  const filtered = dummyChats.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 Toggle Logic - Same chat click = close
  const handleChatClick = (chat) => {
    if (selectedChat?.id === chat.id) {
      onSelectChat(null); // Same chat clicked → CLOSE
    } else {
      onSelectChat(chat); // Different chat → OPEN
    }
  };

  return (
    <aside
      className={`${
        isOpen ? "flex" : "hidden"
      } md:flex flex-col w-full md:w-80 lg:w-96 bg-white border-r border-gray-200`}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-800">All Users</h2>
          {/* <p className="text-xs text-green-500 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Connected
          </p> */}
        </div>
        {/* <button
          onClick={onClose}
          className="md:hidden p-1 rounded hover:bg-gray-100"
        >
          <X size={20} />
        </button> */}
      </div>

      {/* Search */}
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search chats..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200">
        {["Chats", "Group"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
        <button className="ml-auto flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
          <Plus size={14} /> New
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {filtered.map((chat) => {
          const isSelected = selectedChat?.id === chat.id;

          return (
            <button
              key={chat.id}
              onClick={() => handleChatClick(chat)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 border-b border-gray-100
                border-l-4
                ${
                  isSelected
                    ? "bg-blue-50 border-l-blue-600"        // ✅ Selected - Blue
                    : "border-l-transparent hover:bg-gray-50" // ✅ Normal - Hover gray
                }
              `}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-semibold transition-all duration-200
                    ${isSelected
                      ? "from-blue-500 to-indigo-600 ring-2 ring-blue-300"  // ✅ Selected avatar
                      : "from-purple-500 to-pink-500"                        // ✅ Normal avatar
                    }
                  `}
                >
                  {chat.name[0].toUpperCase()}
                </div>
                {chat.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>

              {/* Chat Info */}
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-center">
                  <p
                    className={`font-medium truncate ${
                      isSelected ? "text-blue-700" : "text-gray-800"
                    }`}
                  >
                    {chat.name}
                  </p>
                  <span
                    className={`text-xs ml-2 flex-shrink-0 ${
                      isSelected ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    {chat.time}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-0.5">
                  <p
                    className={`text-sm truncate ${
                      isSelected ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    {chat.lastMsg}
                  </p>
                  {chat.unread > 0 && (
                    <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center flex-shrink-0">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}