// // export default function Sidebar() {
// //   return (
// //     <div className="hidden md:flex w-16 bg-gray-900 text-white flex-col items-center py-4 space-y-6">
// //       <div className="text-xl">💬</div>
// //       <div className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">👥</div>
// //       <div className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">📁</div>
// //     </div>
// //   );
// // }

// import { Briefcase, Users, Link2, UserPlus, MessageSquare, Mail, Cloud, Calendar, Phone, Clock, DollarSign, FileSpreadsheet, MessageCircle } from "lucide-react";

// const menuItems = [
//     { icon: Briefcase, label: "Cases" },
//     { icon: Users, label: "Contacts" },
//     { icon: Link2, label: "Case Contacts" },
//     { icon: UserPlus, label: "PNCs / Leads" },
//     { icon: MessageSquare, label: "Messages" },
//     { icon: Mail, label: "Email", hasArrow: true },
//     { icon: Cloud, label: "One Drive" },
//     { icon: Calendar, label: "Events" },
//     { icon: Phone, label: "Call Log & Text" },
//     { icon: Clock, label: "Time Loss" },
//     { icon: DollarSign, label: "Fee List" },
//     { icon: FileSpreadsheet, label: "Excel List" },
//     { icon: MessageCircle, label: "ChatPage", active: true },
// ];

// export default function Sidebar({ isOpen, onClose }) {
//     return (
//         <>
//             {/* Overlay for mobile */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/50 z-30 lg:hidden"
//                     onClick={onClose}
//                 />
//             )}

//             <aside
//                 className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#1f2937] text-gray-200 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
//                     } lg:translate-x-0 flex flex-col`}
//             >
//                 {/* Logo */}
//                 <div className="px-5 py-4 border-b border-gray-700 flex items-center gap-2">
//                     <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold">
//                         AT
//                     </div>
//                     <span className="font-semibold text-lg">CHAT APP</span>
//                 </div>

//                 {/* Menu */}
//                 <nav className="flex-1 overflow-y-auto py-3 custom-scrollbar">
//                     {menuItems.map((item, idx) => {
//                         const Icon = item.icon;
//                         return (
//                             <button
//                                 key={idx}
//                                 className={`w-full flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${item.active
//                                         ? "bg-blue-600 text-white border-l-4 border-blue-300"
//                                         : "hover:bg-gray-700/50 border-l-4 border-transparent"
//                                     }`}
//                             >
//                                 <span className="flex items-center gap-3">
//                                     <Icon size={18} />
//                                     {item.label}
//                                 </span>
//                                 {item.hasArrow && <span>›</span>}
//                             </button>
//                         );
//                     })}
//                 </nav>

//                 {/* User Profile */}
//                 <div className="border-t border-gray-700 p-4 flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center font-semibold">
//                         AT
//                     </div>
//                     <div className="flex-1">
//                         <p className="text-sm font-medium">App Tester</p>
//                         <p className="text-xs text-green-400">● Available</p>
//                     </div>
//                 </div>
//             </aside>
//         </>
//     );
// }

import {
    Briefcase,
    Calendar,
    ChevronRight,
    Clock,
    Cloud,
    DollarSign,
    FileSpreadsheet,
    Link2,
    Mail,
    MessageCircle,
    MessageSquare,
    Phone,
    Settings,
    UserPlus,
    Users
} from "lucide-react";
import { useState } from "react";

const menuItems = [
    { id: "cases", icon: Briefcase, label: "Cases" },
    { id: "contacts", icon: Users, label: "Contacts" },
    { id: "case-contacts", icon: Link2, label: "Case Contacts" },
    { id: "pncs", icon: UserPlus, label: "PNCs / Leads" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "email", icon: Mail, label: "Email", hasArrow: true },
    { id: "onedrive", icon: Cloud, label: "One Drive" },
    { id: "events", icon: Calendar, label: "Events" },
    { id: "calls", icon: Phone, label: "Call Log & Text" },
    { id: "timeloss", icon: Clock, label: "Time Loss" },
    { id: "fee", icon: DollarSign, label: "Fee List" },
    { id: "excel", icon: FileSpreadsheet, label: "Excel List" },
    { id: "chat", icon: MessageCircle, label: "ChatPage" },
];

export default function Sidebar({ isOpen, onClose, onChatPageClick }) {
    const [activeItem, setActiveItem] = useState("chat");

    const handleMenuItemClick = (itemId) => {
        setActiveItem(itemId);
        if (itemId === "chat" && onChatPageClick) {
            onChatPageClick();
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-gray-200 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } flex flex-col`}
            >
                {/* Logo Section */}
                <div className="px-5 py-4 border-b border-slate-700 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
                        AT
                    </div>
                    <span className="font-bold text-lg text-white tracking-wide">CHAT APP</span>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-3 custom-scrollbar">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleMenuItemClick(item.id)}
                                className={`
                  w-full flex items-center justify-between px-5 py-3 text-sm
                  transition-all duration-200 group relative
                  ${isActive
                                        ? "bg-blue-600 text-white font-medium"
                                        : "text-gray-300 hover:bg-blue-600 hover:text-white"
                                    }
                `}
                            >
                                {/* Left active indicator bar */}
                                {isActive && (
                                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300"></span>
                                )}

                                <span className="flex items-center gap-3">
                                    <Icon
                                        size={18}
                                        className={`transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                                            }`}
                                    />
                                    {item.label}
                                </span>

                                {item.hasArrow && (
                                    <ChevronRight
                                        size={16}
                                        className={`transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                                            }`}
                                    />
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* User Profile Footer */}
                <div className="border-t border-slate-700 p-4 flex items-center gap-3 hover:bg-slate-800 cursor-pointer transition">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center font-semibold text-white">
                            AT
                        </div>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">App Tester</p>
                        <p className="text-xs text-green-400">● Available</p>
                    </div>
                    <Settings size={18} className="text-gray-400 hover:text-white" />
                </div>
            </aside>
        </>
    );
}