"use client"

export const Background = () => {

  return (
    <section className="w-full min-h-screen flex flex-col ">

      {/* HERO */}
      <div className="flex-1 flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-24 py-10">
        <div className="w-full max-w-3xl space-y-5">

          {/* identity line */}
          <p className="text-sm sm:text-base md:text-lg font-medium text-zinc-400 tracking-wide">
            Souptik Sen · 17 · Kolkata, India
          </p>

          {/* headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight">
            <span className="text-purple-400">
              Backend Heavy
            </span>{" "}
            Full-stack engineer building{" "}
            <span className="text-purple-400">
              AI-driven products
            </span>
          </h1>

          {/* description */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl sm:max-w-2xl leading-relaxed">
            Working on production-grade systems with queues, Redis, microservices,
            and real-time architecture. Building AI pipelines using embeddings, RAG,
            and long-term memory systems.
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Backend Systems",
              "Microservices",
              "Realtime Architecture",
              "AI Pipelines"
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs sm:text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 sm:px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 items-stretch sm:items-center">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-5 py-2.5 bg-white text-black rounded-md hover:bg-zinc-200"
            >
              Projects
            </a>

            <a
              href="/resume.pdf"
              download="Souptik_Sen_Resume.pdf"
              className="w-full sm:w-auto text-center px-5 py-2.5 border border-zinc-700 text-zinc-300 rounded-md hover:bg-zinc-900"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}