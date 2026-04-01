"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Skeleton } from "@/components/ui/skeleton"
import { X } from "lucide-react"

type Msg = {
  sender: "user" | "ai"
  text: string
}

export default function ChatPage({
  open,
  setOpen
}: {
  open?: boolean,
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  // size states
  const [height, setHeight] = useState(520)
  const [width, setWidth] = useState(420)

  const startY = useRef<number | null>(null)
  const startHeight = useRef<number>(520)

  const startX = useRef<number | null>(null)
  const startWidth = useRef<number>(420)

  const endRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () =>
    endRef.current?.scrollIntoView({ behavior: "smooth" })

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

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

      setMessages((prev) => [...prev, { sender: "ai", text: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error contacting AI." }
      ])
    } finally {
      setLoading(false)
    }
  }

  // HEIGHT RESIZE (bottom drag)
  const onHeightResize = (e: React.MouseEvent) => {
    startY.current = e.clientY
    startHeight.current = height

    const onMove = (ev: MouseEvent) => {
      if (startY.current === null) return

      const delta =  ev.clientY - startY.current
      let newHeight = startHeight.current + delta

      if (newHeight < 300) newHeight = 300
      if (newHeight > window.innerHeight * 0.8)
        newHeight = window.innerHeight * 0.8

      setHeight(newHeight)
    }

    const onUp = () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
  }

  // WIDTH RESIZE (left drag)
  const onWidthResize = (e: React.MouseEvent) => {
    startX.current = e.clientX
    startWidth.current = width

    const onMove = (ev: MouseEvent) => {
      if (startX.current === null) return

      const delta = startX.current - ev.clientX
      let newWidth = startWidth.current + delta

      if (newWidth < 300) newWidth = 300
      if (newWidth > window.innerWidth * 0.9)
        newWidth = window.innerWidth * 0.9

      setWidth(newWidth)
    }

    const onUp = () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
  }

  if (!open) return null

  return (
    <div className="fixed top-2/3 transform -translate-y-2/3 right-6 z-50 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex overflow-hidden"
        style={{
          width: `min(${width}px,90vw)`,
          height: `min(${height}px, 66vh)`
        }}
      >
        {/* LEFT RESIZE HANDLE */}
        <div
          onMouseDown={onWidthResize}
          className="w-2 cursor-ew-resize bg-zinc-900 hover:bg-zinc-700 transition"
        />

        {/* MAIN CONTENT */}
        <div className="flex flex-col flex-1 h-full">
          {/* HEADER */}
          <div className="border-b border-zinc-800 px-4 py-3 shrink-0 flex justify-between">
            <div>
                <h1 className="text-sm font-medium">AI Assistant</h1>
                <p className="text-[11px] text-zinc-400">
                AI can hallucinate, verify important info
                </p>
            </div>
            <button
              onClick={() => setOpen?.(false)}
                className="p-1 rounded hover:bg-red-600 transition"
            >
                <X className="w-4 h-4" />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-4 no-scrollbar">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] text-sm px-4 py-2 rounded-2xl border ${
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
              </div>
            ))}

            {loading && (
              <div className="space-y-2 max-w-[60%]">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* INPUT */}
          <form
            onSubmit={sendMessage}
            className="border-t border-zinc-800 p-3 flex gap-2 shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-sm outline-none"
            />
            <button
              disabled={loading}
              className="px-4 py-2 bg-zinc-800 rounded-xl text-sm disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>

        {/* BOTTOM RESIZE HANDLE */}
        <div
          onMouseDown={onHeightResize}
          className="absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize bg-zinc-900 hover:bg-zinc-700 transition"
        />
      </motion.div>
    </div>
  )
}