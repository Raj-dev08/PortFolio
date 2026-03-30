"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Skeleton } from "@/components/ui/skeleton"

type Msg = {
  sender: "user" | "ai"
  text: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () =>
    endRef.current?.scrollIntoView({ behavior: "smooth" })

  useEffect(() => {
    const init = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: "Greet the visitor",
            previousContext: ""
          })
        })

        const data = await res.json()
        setMessages([{ sender: "ai", text: data.reply }])
      } catch {
        setMessages([{ sender: "ai", text: "Failed to load assistant." }])
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = input

    setMessages((prev) => [...prev, { sender: "user", text: userMsg }])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          previousContext: messages
            .filter((m) => m.sender === "user")
            .map((m) => m.text)
            .join("\n")
        })
      })

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: data.reply }
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error contacting AI." }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-zinc-100">

      {/* HEADER */}
      <div className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-lg font-medium">AI Assistant</h1>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed border ${
                msg.sender === "user"
                  ? "bg-zinc-800 border-zinc-700"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              {msg.sender === "ai" ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.text}
                </ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </motion.div>
        ))}

        {loading && (
          <div className="space-y-2 max-w-md">
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-4 w-[50%]" />
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* INPUT */}
      <form
        onSubmit={sendMessage}
        className="border-t border-zinc-800 p-4 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm outline-none focus:border-zinc-600"
        />

        <button
          disabled={loading}
          className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm transition disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  )
}