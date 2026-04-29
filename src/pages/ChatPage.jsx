import { useState } from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import Sidebar from "../components/Sidebar";

export default function ChatPage() {
    const [selectedChat, setSelectedChat] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
        setIsOpen(false); // Close chat list on mobile after selection
    };

    const handleCloseList = () => {
        setIsOpen(false);
    };

    const handleMenuClick = () => {
        setIsOpen(true); // Open chat list on mobile when menu clicked
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleChatPageClick = () => {
        setIsSidebarOpen(false); // Close sidebar when ChatPage menu is clicked
    };

    return (
        <div className="h-screen flex">

            <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} onChatPageClick={handleChatPageClick} />

            <ChatList
                selectedChat={selectedChat}
                onSelectChat={handleSelectChat}
                isOpen={isOpen}
                onClose={handleCloseList}
            />

            <ChatWindow
                selectedChat={selectedChat}
                onMenuClick={handleMenuClick}
                onSidebarOpen={() => setIsSidebarOpen(true)}
            />
        </div>
    );
}