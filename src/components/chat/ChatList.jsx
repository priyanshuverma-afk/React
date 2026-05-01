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
import { Search, Plus, Users, MessageCircle, Phone, Radio } from "lucide-react";
import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";

const avatarEmojis = ["🧑", "👩", "🧔", "👨‍💻", "🦸", "😎", "🙂", "🤓", "👮", "🧙", "👩‍🎓", "👨‍🎓"];
const bgColors = ["#075e54", "#128c7e", "#25d366", "#00a884", "#34b7f1", "#3b82f6", "#8b5cf6", "#ec4899", "#f97316", "#ef4444"];

function tick(status) {
  if (status === "sent") return <span className="text-[#8696a0]">✓</span>;
  if (status === "delivered") return <span className="text-[#8696a0]">✓✓</span>;
  if (status === "read") return <span className="text-[#53bdeb]">✓✓</span>;
  return null;
}

function getColor(name) {
  let h = 0;
  for (let c of name) h = (h << 5) - h + c.charCodeAt(0);
  return bgColors[Math.abs(h) % bgColors.length];
}

export default function ChatList({
  chats, activeChat, search, setSearch,
  onSelectChat, onDeleteChat, onTogglePin, onToggleMute,
  onAddContact, onCreateGroup, user, activeTab, setActiveTab, onMenuClick
}) {
  const [ctxMenu, setCtxMenu] = useState(null);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showNewGroup, setShowNewGroup] = useState(false);

  // Add Contact State
  const [ncName, setNcName] = useState("");
  const [ncPhone, setNcPhone] = useState("");
  const [ncCC, setNcCC] = useState("+91");
  const [ncAvatar, setNcAvatar] = useState("🧑");
  const [ncAvatarType, setNcAvatarType] = useState("emoji");
  const [ncBgColor, setNcBgColor] = useState("#00a884");

  // New Group State
  const [gName, setGName] = useState("");
  const [gMembers, setGMembers] = useState([]);

  const handleAddContact = () => {
    if (!ncName.trim() || !ncPhone.trim()) return;
    const id = onAddContact(ncName, ncPhone, ncAvatar, ncAvatarType, ncBgColor);
    setShowAddContact(false);
    setNcName(""); setNcPhone("");
    onSelectChat(id);
  };

  const handleCreateGroup = () => {
    if (!gName.trim() || gMembers.length < 1) return;
    const id = onCreateGroup(gName, gMembers);
    setShowNewGroup(false);
    setGName(""); setGMembers([]);
    onSelectChat(id);
  };

  const toggleMember = (id) => {
    setGMembers(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);
  };

  const handleCtx = (e, chatId) => {
    e.preventDefault();
    setCtxMenu({ x: e.clientX, y: e.clientY, chatId });
  };

  const statusItems = chats.slice(0, 5);
  const callLog = [
    { name: "Ustad", avatar: "👨‍🏫", type: "in", time: "Today, 9:30 AM" },
    { name: "Ali Khan", avatar: "🧔", type: "missed", time: "Today, 8:15 AM" },
    { name: "Sarah Lee", avatar: "👩", type: "out", time: "Yesterday, 6:00 PM" },
  ];

  return (
    <div className="flex flex-col w-full md:w-80 lg:w-96 bg-[#111b21] border-r border-[#2a3942] h-full relative">

      {/* Header */}
      <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer"
          style={{ background: user?.bgColor || "#00a884" }}
          onClick={onMenuClick}
        >
          {user?.avatarType === "initials"
            ? <span className="text-white font-bold text-sm">{user?.avatar}</span>
            : user?.avatar || "🧑"}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("status")}
            className="p-2 rounded-full hover:bg-[#2a3942] text-[#8696a0] hover:text-[#e9edef] transition"
            title="Status"
          >
            <Radio size={20} />
          </button>
          <button
            onClick={() => setShowNewGroup(true)}
            className="p-2 rounded-full hover:bg-[#2a3942] text-[#8696a0] hover:text-[#e9edef] transition"
            title="New Group"
          >
            <Users size={20} />
          </button>
          <button
            onClick={() => setShowAddContact(true)}
            className="p-2 rounded-full hover:bg-[#2a3942] text-[#8696a0] hover:text-[#e9edef] transition"
            title="New Chat"
          >
            <MessageCircle size={20} />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-2 bg-[#111b21] flex-shrink-0">
        <div className="flex items-center gap-2 bg-[#202c33] rounded-lg px-3">
          <Search size={16} className="text-[#8696a0]" />
          <input
            type="text" value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search or start new chat"
            className="flex-1 bg-transparent outline-none text-[#e9edef] text-sm py-2.5 placeholder:text-[#8696a0]"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#2a3942] flex-shrink-0">
        {[
          { id: "chats", label: "Chats", icon: MessageCircle },
          { id: "status", label: "Status", icon: Radio },
          { id: "calls", label: "Calls", icon: Phone },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider transition border-b-2 ${activeTab === tab.id
                ? "text-[#00a884] border-[#00a884]"
                : "text-[#8696a0] border-transparent hover:text-[#e9edef]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Chats Tab */}
      {activeTab === "chats" && (
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {chats.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-[#8696a0] gap-2">
              <MessageCircle size={40} className="opacity-30" />
              <p className="text-sm">No chats found</p>
            </div>
          )}
          {chats.map(chat => {
            const last = chat.msgs[chat.msgs.length - 1];
            const isActive = activeChat?.id === chat.id;
            const preview = last
              ? (chat.isGroup && last.sender === "them" ? (last.senderName + ": ") : last.sender === "me" ? "You: " : "") + last.text
              : "";

            return (
              <div
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                onContextMenu={e => handleCtx(e, chat.id)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-[#1a2229] transition relative ${isActive ? "bg-[#2a3942]" : "hover:bg-[#202c33]"
                  }`}
              >
                {/* Pinned indicator */}
                {chat.pinned && (
                  <span className="absolute top-2 right-3 text-[10px] text-[#8696a0]">📌</span>
                )}

                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: chat.avatarType === "initials" ? chat.bgColor : getColor(chat.name) }}
                  >
                    {chat.avatarType === "initials"
                      ? <span className="text-white font-bold text-sm">{chat.avatar}</span>
                      : chat.avatar}
                  </div>
                  {chat.online && !chat.isGroup && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#00a884] rounded-full border-2 border-[#111b21]" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-medium text-[#e9edef] text-sm truncate">
                      {chat.muted ? "🔇 " : ""}{chat.name}
                    </span>
                    <span className={`text-xs flex-shrink-0 ml-2 ${chat.unread > 0 ? "text-[#00a884]" : "text-[#8696a0]"}`}>
                      {last?.time || ""}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#8696a0] truncate flex-1 flex items-center gap-1">
                      {last?.sender === "me" && tick(last?.status)}
                      {preview}
                    </span>
                    {chat.unread > 0 && (
                      <span className={`ml-2 text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center font-semibold flex-shrink-0 ${chat.muted ? "bg-[#2a3942] text-[#8696a0]" : "bg-[#00a884] text-white"
                        }`}>
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Status Tab */}
      {activeTab === "status" && (
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* My Status */}
          <div className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#202c33] border-b border-[#1a2229]">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#00a884] p-0.5 flex items-center justify-center"
                style={{ background: user?.bgColor || "#00a884" }}>
                <span className="text-2xl">{user?.avatarType === "initials"
                  ? <span className="text-white font-bold text-sm">{user?.avatar}</span>
                  : user?.avatar || "🧑"}</span>
              </div>
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-[#00a884] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#111b21]">+</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#e9edef]">My Status</p>
              <p className="text-xs text-[#8696a0]">Tap to add status update</p>
            </div>
          </div>
          <div className="px-4 py-2 text-xs text-[#8696a0] font-semibold uppercase tracking-wider">Recent Updates</div>
          {statusItems.map(c => (
            <div key={c.id} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#202c33] border-b border-[#1a2229]">
              <div className="w-12 h-12 rounded-full border-2 border-[#00a884] p-0.5 flex items-center justify-center text-2xl"
                style={{ background: getColor(c.name) }}>
                {c.avatar}
              </div>
              <div>
                <p className="text-sm font-medium text-[#e9edef]">{c.name}</p>
                <p className="text-xs text-[#8696a0]">{Math.floor(Math.random() * 59 + 1)} minutes ago</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Calls Tab */}
      {activeTab === "calls" && (
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="px-4 py-2 text-xs text-[#8696a0] font-semibold uppercase tracking-wider">Recent</div>
          {callLog.map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-[#1a2229] hover:bg-[#202c33] cursor-pointer">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ background: getColor(c.name) }}>
                {c.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#e9edef]">{c.name}</p>
                <p className={`text-xs mt-0.5 ${c.type === "missed" ? "text-red-400" : c.type === "in" ? "text-[#00a884]" : "text-[#8696a0]"}`}>
                  {c.type === "missed" ? "↙ Missed" : c.type === "in" ? "↙ Incoming" : "↗ Outgoing"} · {c.time}
                </p>
              </div>
              <button className="p-2 rounded-full hover:bg-[#2a3942] text-[#00a884]">
                <Phone size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Context Menu */}
      {ctxMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setCtxMenu(null)} />
          <div
            className="fixed z-50 bg-[#233138] rounded-lg shadow-xl py-1 min-w-[180px]"
            style={{ left: Math.min(ctxMenu.x, window.innerWidth - 200), top: Math.min(ctxMenu.y, window.innerHeight - 200) }}
          >
            {[
              { label: chats.find(c => c.id === ctxMenu.chatId)?.pinned ? "📌 Unpin" : "📌 Pin", fn: () => onTogglePin(ctxMenu.chatId) },
              { label: chats.find(c => c.id === ctxMenu.chatId)?.muted ? "🔊 Unmute" : "🔇 Mute", fn: () => onToggleMute(ctxMenu.chatId) },
              { label: "🗑 Delete chat", fn: () => onDeleteChat(ctxMenu.chatId), danger: true },
            ].map((item, i) => (
              <button key={i} onClick={() => { item.fn(); setCtxMenu(null); }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#2a3942] transition ${item.danger ? "text-red-400" : "text-[#e9edef]"}`}>
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Add Contact Modal */}
      {showAddContact && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#202c33] rounded-xl p-6 w-full max-w-sm flex flex-col gap-4">
            <h3 className="text-[#e9edef] font-semibold">New Contact</h3>
            <div className="flex gap-2 flex-wrap justify-center">
              {avatarEmojis.map(em => (
                <button key={em} onClick={() => { setNcAvatar(em); setNcAvatarType("emoji"); }}
                  className={`w-10 h-10 rounded-full text-xl flex items-center justify-center border-2 transition ${ncAvatar === em && ncAvatarType === "emoji" ? "border-[#00a884]" : "border-transparent hover:border-[#2a3942]"}`}>
                  {em}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <select value={ncCC} onChange={e => setNcCC(e.target.value)}
                className="bg-[#2a3942] text-[#e9edef] rounded-lg px-2 py-3 text-sm outline-none w-24 border border-[#2a3942]">
                <option>+91</option><option>+1</option><option>+44</option><option>+971</option>
              </select>
              <input value={ncPhone} onChange={e => setNcPhone(e.target.value)}
                placeholder="Phone number" type="tel"
                className="flex-1 bg-[#2a3942] border border-[#2a3942] focus:border-[#00a884] rounded-lg px-4 py-3 text-[#e9edef] text-sm outline-none" />
            </div>
            <input value={ncName} onChange={e => setNcName(e.target.value)}
              placeholder="Contact name"
              className="bg-[#2a3942] border border-[#2a3942] focus:border-[#00a884] rounded-lg px-4 py-3 text-[#e9edef] text-sm outline-none" />
            <div className="flex gap-2">
              <button onClick={handleAddContact} className="flex-1 bg-[#00a884] hover:bg-[#008069] text-white font-semibold rounded-lg py-3 transition">Add</button>
              <button onClick={() => setShowAddContact(false)} className="flex-1 bg-[#2a3942] text-[#8696a0] rounded-lg py-3 transition hover:bg-[#374248]">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* New Group Modal */}
      {showNewGroup && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#202c33] rounded-xl p-6 w-full max-w-sm flex flex-col gap-4">
            <h3 className="text-[#e9edef] font-semibold">New Group</h3>
            <input value={gName} onChange={e => setGName(e.target.value)}
              placeholder="Group name"
              className="bg-[#2a3942] border border-[#2a3942] focus:border-[#00a884] rounded-lg px-4 py-3 text-[#e9edef] text-sm outline-none" />
            <p className="text-xs text-[#8696a0] font-semibold uppercase">Add Members</p>
            <div className="flex flex-col gap-1 max-h-52 overflow-y-auto custom-scrollbar">
              {chats.filter(c => !c.isGroup).map(c => (
                <label key={c.id} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2a3942] cursor-pointer">
                  <input type="checkbox" checked={gMembers.includes(c.id)}
                    onChange={() => toggleMember(c.id)}
                    className="accent-[#00a884] w-4 h-4 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
                    style={{ background: getColor(c.name) }}>{c.avatar}</div>
                  <span className="text-sm text-[#e9edef]">{c.name}</span>
                </label>
              ))}
            </div>
            {gMembers.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {gMembers.map(id => {
                  const c = chats.find(ch => ch.id === id);
                  return c ? (
                    <span key={id} className="bg-[#00a884]/20 text-[#00a884] text-xs rounded-full px-2 py-1 flex items-center gap-1">
                      {c.name}
                      <button onClick={() => toggleMember(id)} className="text-[#00a884] hover:text-white">✕</button>
                    </span>
                  ) : null;
                })}
              </div>
            )}
            <div className="flex gap-2">
              <button onClick={handleCreateGroup} className="flex-1 bg-[#00a884] hover:bg-[#008069] text-white font-semibold rounded-lg py-3 transition">Create</button>
              <button onClick={() => setShowNewGroup(false)} className="flex-1 bg-[#2a3942] text-[#8696a0] rounded-lg py-3 transition hover:bg-[#374248]">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}