import { useState, useCallback } from "react";

const initialChats = [
    {
        id: 1, name: "Ustad", avatar: "👨‍🏫", avatarType: "emoji", bgColor: "#075e54",
        online: true, lastSeen: "online", isGroup: false, muted: false, pinned: true,
        msgs: [
            { id: 1, text: "Assalamu alaikum! Kya haal hai?", sender: "them", time: "9:00 AM", status: "read" },
            { id: 2, text: "Walaikum assalam! Sab theek hai 😊", sender: "me", time: "9:01 AM", status: "read" },
            { id: 3, text: "Project ka kya update hai?", sender: "them", time: "9:05 AM", status: "read" },
            { id: 4, text: "Kal tak ready ho jaayega 💪", sender: "me", time: "9:06 AM", status: "delivered" },
        ],
        unread: 0,
    },
    {
        id: 2, name: "Ali Khan", avatar: "🧔", avatarType: "emoji", bgColor: "#128c7e",
        online: true, lastSeen: "online", isGroup: false, muted: false, pinned: false,
        msgs: [
            { id: 1, text: "Bhai meeting ka time change hua hai", sender: "them", time: "8:00 AM", status: "read" },
            { id: 2, text: "Kab hai ab?", sender: "me", time: "8:02 AM", status: "read" },
            { id: 3, text: "Kal 3 baje", sender: "them", time: "8:03 AM", status: "read" },
        ],
        unread: 2,
    },
    {
        id: 3, name: "Sarah Lee", avatar: "👩", avatarType: "emoji", bgColor: "#ec4899",
        online: false, lastSeen: "last seen today at 10:30 AM", isGroup: false, muted: true, pinned: false,
        msgs: [
            { id: 1, text: "Thanks for the help! 🙏", sender: "them", time: "Yesterday", status: "read" },
            { id: 2, text: "Anytime! 😊", sender: "me", time: "Yesterday", status: "read" },
        ],
        unread: 0,
    },
    {
        id: 4, name: "Dev Team 🚀", avatar: "👥", avatarType: "emoji", bgColor: "#8b5cf6",
        online: false, lastSeen: "", isGroup: true,
        members: ["Ustad", "Ali Khan", "Sarah Lee", "You"],
        muted: false, pinned: false,
        msgs: [
            { id: 1, text: "Daily standup in 10 min", sender: "them", senderName: "Ustad", time: "9:50 AM", status: "read" },
            { id: 2, text: "On my way 🏃", sender: "me", time: "9:51 AM", status: "sent" },
        ],
        unread: 1,
    },
    {
        id: 5, name: "John Doe", avatar: "JD", avatarType: "initials", bgColor: "#f97316",
        online: false, lastSeen: "last seen yesterday", isGroup: false, muted: false, pinned: false,
        msgs: [
            { id: 1, text: "Project update?", sender: "them", time: "Mon", status: "read" },
        ],
        unread: 0,
    },
];

const autoReplies = [
    "👍", "Theek hai!", "Samajh gaya 😊", "Acha!", "Ok bhai",
    "Haan bilkul!", "👏", "🔥", "Wah!", "Sure!", "Bilkul sahi!",
    "Dekh leta hun", "Thoda time do", "Ji haan!", "Koi baat nahi 🙏"
];

function now() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function sortChats(chats) {
    return [...chats].sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        const at = a.msgs[a.msgs.length - 1]?.time || "";
        const bt = b.msgs[b.msgs.length - 1]?.time || "";
        return bt.localeCompare(at);
    });
}

export function useChat(user) {
    const [chats, setChats] = useState(sortChats(initialChats));
    const [activeChat, setActiveChat] = useState(null);
    const [input, setInput] = useState("");
    const [replyTo, setReplyTo] = useState(null);
    const [search, setSearch] = useState("");

    const openChat = useCallback((id) => {
        setChats(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
        setActiveChat(prev => {
            const chat = chats.find(c => c.id === id);
            return chat || prev;
        });
        setReplyTo(null);
    }, [chats]);

    const closeChat = useCallback(() => {
        setActiveChat(null);
        setReplyTo(null);
    }, []);

    const sendMessage = useCallback(() => {
        if (!input.trim() || !activeChat) return;
        const newMsg = {
            id: Date.now(),
            text: input.trim(),
            sender: "me",
            time: now(),
            status: "sent",
            replyTo: replyTo ? { text: replyTo.text, sender: replyTo.sender } : null,
        };

        setChats(prev => sortChats(prev.map(c =>
            c.id === activeChat.id ? { ...c, msgs: [...c.msgs, newMsg] } : c
        )));
        setActiveChat(prev => prev ? { ...prev, msgs: [...prev.msgs, newMsg] } : prev);
        setInput("");
        setReplyTo(null);

        // Auto reply
        if (Math.random() > 0.3) {
            setTimeout(() => {
                const reply = {
                    id: Date.now() + 1,
                    text: autoReplies[Math.floor(Math.random() * autoReplies.length)],
                    sender: "them",
                    senderName: activeChat.name,
                    time: now(),
                    status: "read",
                };
                setChats(prev => sortChats(prev.map(c =>
                    c.id === activeChat.id ? { ...c, msgs: [...c.msgs, reply], unread: 0 } : c
                )));
                setActiveChat(prev => prev?.id === activeChat.id ? { ...prev, msgs: [...prev.msgs, reply] } : prev);
            }, 1000 + Math.random() * 2000);
        }
    }, [input, activeChat, replyTo]);

    const deleteMessage = useCallback((msgId) => {
        setChats(prev => prev.map(c =>
            c.id === activeChat?.id ? { ...c, msgs: c.msgs.filter(m => m.id !== msgId) } : c
        ));
        setActiveChat(prev => prev ? { ...prev, msgs: prev.msgs.filter(m => m.id !== msgId) } : prev);
    }, [activeChat]);

    const clearChat = useCallback((chatId) => {
        setChats(prev => prev.map(c => c.id === chatId ? { ...c, msgs: [] } : c));
        if (activeChat?.id === chatId) setActiveChat(prev => prev ? { ...prev, msgs: [] } : prev);
    }, [activeChat]);

    const deleteChat = useCallback((chatId) => {
        setChats(prev => prev.filter(c => c.id !== chatId));
        if (activeChat?.id === chatId) closeChat();
    }, [activeChat, closeChat]);

    const togglePin = useCallback((chatId) => {
        setChats(prev => sortChats(prev.map(c => c.id === chatId ? { ...c, pinned: !c.pinned } : c)));
    }, []);

    const toggleMute = useCallback((chatId) => {
        setChats(prev => prev.map(c => c.id === chatId ? { ...c, muted: !c.muted } : c));
        setActiveChat(prev => prev?.id === chatId ? { ...prev, muted: !prev.muted } : prev);
    }, []);

    const addContact = useCallback((name, phone, avatar, avatarType, bgColor) => {
        const newChat = {
            id: Date.now(), name, avatar, avatarType, bgColor,
            online: false, lastSeen: "just added", isGroup: false,
            muted: false, pinned: false, msgs: [], unread: 0,
        };
        setChats(prev => sortChats([...prev, newChat]));
        return newChat.id;
    }, []);

    const createGroup = useCallback((name, memberIds) => {
        const members = memberIds.map(id => chats.find(c => c.id === id)?.name).filter(Boolean);
        members.push(user?.name || "You");
        const newGroup = {
            id: Date.now(), name, avatar: "👥", avatarType: "emoji", bgColor: "#8b5cf6",
            online: false, lastSeen: "", isGroup: true, members,
            muted: false, pinned: false, unread: 0,
            msgs: [{ id: 1, text: "Group created 🎉", sender: "system", time: now(), status: "read" }],
        };
        setChats(prev => sortChats([newGroup, ...prev]));
        return newGroup.id;
    }, [chats, user]);

    const filteredChats = search
        ? chats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        : chats;

    return {
        chats: filteredChats,
        activeChat,
        input, setInput,
        replyTo, setReplyTo,
        search, setSearch,
        openChat, closeChat,
        sendMessage,
        deleteMessage,
        clearChat,
        deleteChat,
        togglePin,
        toggleMute,
        addContact,
        createGroup,
    };
}