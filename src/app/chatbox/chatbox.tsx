"use client";
import { useState, useRef, useEffect, FormEvent } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
type Message = {
    role: "user" | "ai";
    content: string;
};

export default function ChatAI() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    // Tự cuộn xuống cuối mỗi khi có tin nhắn mới
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { role: "user", content: input }]);
        setInput("");
        setLoading(true);

        try {
            const res = await axios.post<{ reply: string }>("/api/chat", { message: input });
            setMessages((prev) => [...prev, { role: "ai", content: res.data.reply || "" }]);
        } catch (err) {
            setMessages((prev) => [...prev, { role: "ai", content: "Có lỗi xảy ra vui lòng thử lại" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Chat bubble / toggle */}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
                {open ? (
                    <div className="flex flex-col w-80 h-[500px] bg-white shadow-lg rounded-xl overflow-hidden">
                        {/* Header */}
                        <div className="flex justify-between items-center bg-green-500 text-white px-4 py-2 font-bold">
                            Chat AI
                            <button onClick={() => setOpen(false)} className="text-xl font-bold">✖</button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2 bg-gray-100 min-h-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`px-3 py-1.5 rounded-2xl max-w-[80%] break-words ${msg.role === "user" ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}>
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                h1: ({ node, ...props }) => <h1 className="text-lg font-bold" {...props} />,
                                                h2: ({ node, ...props }) => <h2 className="text-md font-semibold" {...props} />,
                                                li: ({ node, ...props }) => <li className="ml-4 list-disc" {...props} />,
                                                table: ({ node, ...props }) => <table className="table-auto border-collapse border border-gray-300" {...props} />,
                                                th: ({ node, ...props }) => <th className="border border-gray-300 px-2 py-1" {...props} />,
                                                td: ({ node, ...props }) => <td className="border border-gray-300 px-2 py-1" {...props} />,
                                            }}
                                        >
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}

                            {/* Loading 3 chấm lượn sóng */}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="px-3 py-1.5 rounded-2xl bg-gray-300 flex items-end space-x-1 h-6">
                                        <span className="dot animate-wave animation-delay-0"></span>
                                        <span className="dot animate-wave animation-delay-200"></span>
                                        <span className="dot animate-wave animation-delay-400"></span>
                                    </div>
                                </div>
                            )}

                            <div ref={chatEndRef} />
                        </div>

                        {/* Footer */}
                        <form onSubmit={handleSubmit} className="flex p-2 space-x-2 bg-gray-100">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Nhập câu hỏi..."
                                disabled={loading}
                                className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:bg-gray-200"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
                            >
                                Gửi
                            </button>
                        </form>
                    </div>
                ) : (
                    <button
                        onClick={() => setOpen(true)}
                        className="w-16 h-16 rounded-full text-white shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                        <Image src="/chatbox.png" alt="Chatbox" width={32} height={32} />
                    </button>

                )}
            </div>

            {/* Tailwind animation 3 chấm lượn sóng */}
            <style jsx global>{`
        .dot {
          width: 6px;
          height: 6px;
          background-color: #000;
          border-radius: 50%;
          display: inline-block;
        }
        .animate-wave {
          animation: wave 1s infinite;
        }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        @keyframes wave {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        /* Tailwind scroll bar */
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: #e5e7eb; border-radius: 6px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background-color: #9ca3af; border-radius: 6px; }
      `}</style>
        </>
    );
}
