// import Login from "./components/Login.jsx";
// import Profile from "./components/Profile.jsx";
// import { useTheme } from "./Theme/ThemeProvider.jsx";

// function App() {
//   const { theme } = useTheme();

//   return (
//     <div className={theme}>
//       <h1>Context API Demo</h1>
//       <Login />
//       <Profile />
//     </div>
//   );
// }

// export default App;

// import LoginPage from "./LoginPage";
// import ComponentA from "./components/ComponentA";

// function App() {
//   return (
//   <>
//    {/* <LoginPage /> */}
//   <ComponentA />

//   </>
//   );
// }

// export default App;

// import { useState } from "react";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";


// const App = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     age: null,
//     moblie: "",
//     mail: "",

//     address: {
//       houseno: "",
//       colony: "",
//       city: "",
//       state: "",
//       country: "",
//     },
//   });
//   const [step, setStep] = useState(1);

//   return (
//     <>
//       {step === 1 && (
//         <ComponentA
//           setUserData={setUserData}
//           step={step}
//           setStep={setStep}
//           userData={userData}
//         />
//       )}
//       {step === 2 && (
//         <ComponentB
//           setUserData={setUserData}
//           step={step}
//           userData={userData}
//           setStep={setStep}
//         />
//       )}
//       {step === 3 && (
//         <ComponentC
//           userData={userData}
//           setUserData={setUserData}
//           setStep={setStep}
//         />
//       )}
//     </>
//   );
// };

// export default App;


// import ChatPage from "./pages/ChatPage";

// export default function App() {
//   return <ChatPage />;
// }


// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import ChatList from "./components/ChatList";
// import ChatWindow from "./components/ChatWindow";

// export default function App() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [chatListOpen, setChatListOpen] = useState(true);

//   return (
//     <div className="flex h-screen w-full bg-[#f5f5f5] overflow-hidden">
//       {/* Sidebar */}
//       <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//       {/* Main Content */}
//       <div className="flex flex-1 flex-col">
//         {/* Top Header */}
//         <header className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="lg:hidden p-2 rounded-md hover:bg-gray-100"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//           <h1 className="text-lg font-semibold text-gray-800">Chat</h1>
//           <div className="flex items-center gap-3">
//             {/* <button className="px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-50">
//               App Tester ▼
//             </button> */}
//             <div className="w-9 h-9 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
//               AT
//             </div>
//           </div>
//         </header>

//         {/* Chat Section */}
//         <div className="flex flex-1 overflow-hidden">
//           <ChatList
//             selectedChat={selectedChat}
//             onSelectChat={setSelectedChat}
//             isOpen={chatListOpen}
//             onClose={() => setChatListOpen(false)}
//           />
//           <ChatWindow
//             selectedChat={selectedChat}
//             onMenuClick={() => setChatListOpen(true)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Register from "./components/auth/Register";
import Sidebar from "./components/Sidebar";
import ChatList from "./components/chat/ChatList";
import ChatWindow from "./components/chat/ChatWindow";
import { useChat } from "./hooks/useChat";

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("chats");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    chats, activeChat, input, setInput,
    replyTo, setReplyTo, search, setSearch,
    openChat, closeChat, sendMessage,
    deleteMessage, clearChat, deleteChat,
    togglePin, toggleMute, addContact, createGroup,
  } = useChat(user);

  if (!user) {
    return <Register onRegister={setUser} />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#111b21]">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Mobile: ek baar mein ek screen */}
        <div className="flex flex-1 md:hidden overflow-hidden">
          {!activeChat ? (
            <ChatList
              chats={chats}
              activeChat={activeChat}
              search={search}
              setSearch={setSearch}
              onSelectChat={openChat}
              onDeleteChat={deleteChat}
              onTogglePin={togglePin}
              onToggleMute={toggleMute}
              onAddContact={addContact}
              onCreateGroup={createGroup}
              user={user}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onMenuClick={() => setSidebarOpen(true)}
            />
          ) : (
            <ChatWindow
              activeChat={activeChat}
              input={input}
              setInput={setInput}
              replyTo={replyTo}
              setReplyTo={setReplyTo}
              onSend={sendMessage}
              onBack={closeChat}
              onDeleteMessage={deleteMessage}
              onClearChat={clearChat}
              onToggleMute={toggleMute}
              user={user}
            />
          )}
        </div>

        {/* Desktop: dono saath */}
        <div className="hidden md:flex flex-1 overflow-hidden">
          <ChatList
            chats={chats}
            activeChat={activeChat}
            search={search}
            setSearch={setSearch}
            onSelectChat={openChat}
            onDeleteChat={deleteChat}
            onTogglePin={togglePin}
            onToggleMute={toggleMute}
            onAddContact={addContact}
            onCreateGroup={createGroup}
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onMenuClick={() => setSidebarOpen(true)}
          />
          <ChatWindow
            activeChat={activeChat}
            input={input}
            setInput={setInput}
            replyTo={replyTo}
            setReplyTo={setReplyTo}
            onSend={sendMessage}
            onBack={closeChat}
            onDeleteMessage={deleteMessage}
            onClearChat={clearChat}
            onToggleMute={toggleMute}
            user={user}
          />
        </div>

      </div>
    </div>
  );
}