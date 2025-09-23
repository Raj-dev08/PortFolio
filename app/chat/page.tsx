"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Skeleton } from "@/components/ui/skeleton"

export default function ChatPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

  useEffect(()=>{
    const sendInitialMessage = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "Greet the visitor" , previousContext:"" }),
        })
        const data = await res.json()
        setMessages((prev) => [...prev, { sender: "ai", text: data.reply }])
      } catch (err) {
        console.error(err)
        setMessages((prev) => [...prev, { sender: "ai", text: "Error contacting AI." }])
      } finally { setLoading(false) }
    }
    sendInitialMessage()
  },[])

  useEffect(() => { scrollToBottom() }, [messages])

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages((prev) => [...prev, { sender: "user", text: input }])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input , previousContext: messages.filter(msg => msg.sender === "user").map(msg => msg.text).join("\n") }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { sender: "ai", text: data.reply }])
    } catch (err) {
      console.error(err)
      setMessages((prev) => [...prev, { sender: "ai", text: "Error contacting AI." }])
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Your AI Assistant</h1>

      <div className="w-full max-w-4xl flex-1 overflow-y-auto mb-4 p-4 bg-gray-800 rounded-xl shadow-inner space-y-3">
        
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`max-w-[80%] p-3 rounded-2xl break-words shadow-md text-xs sm:text-lg font-mono font-semibold overflow-x-scroll no-scrollbar ${
              msg.sender === "user"
                ? "bg-purple-600 self-end text-white ml-auto"
                : "bg-gray-700 self-start text-gray-200"
            }`}
          >
            {msg.sender === "ai" ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
        {loading && (
           <div className="flex flex-col animate-pulse space-y-2">           
              <Skeleton className="h-4 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />           
          </div>
        )
        }
      </div>


      <form onSubmit={sendMessage} className="w-full max-w-4xl flex gap-2 p-2 fixed bottom-1 bg-transparent backdrop-blur-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 text-md rounded-full px-4 py-2 text-white bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-500 sm:px-6 sm:py-2 px-4 rounded-full hover:bg-purple-600 transition font-semibold text-md sm:text-md"
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  )
}
