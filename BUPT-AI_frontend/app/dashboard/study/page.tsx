"use client";

import { AppShell } from "@/components/layout/app-shell";
import { CourseSelector } from "@/components/dashboard/course-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockMaterials = [
  {
    id: "intro",
    title: "Introduction and course overview",
    type: "Lecture notes",
    duration: "15 min read",
  },
  {
    id: "topic1",
    title: "Topic 1 &ndash; Core concepts and definitions",
    type: "Slides + text",
    duration: "25 min read",
  },
  {
    id: "topic2",
    title: "Topic 2 &ndash; Visual diagrams and examples",
    type: "Visual notes",
    duration: "30 min read",
  },
];

const mockConversation = [
  {
    from: "student",
    text: "Explain this topic in a simple way.",
  },
  {
    from: "tutor",
    text: "I will break the lecturer&apos;s notes into smaller steps and connect the diagrams to real life examples for you.",
  },
];

export default function StudyPage() {
  return (
    <AppShell>
      <div className="flex w-full flex-col gap-6">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Study session
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Choose your course, open the uploaded materials, and chat with the
            AI tutor. The bot will use lecturer notes and related resources to
            give detailed explanations (mocked for now).
          </p>
        </section>

        <CourseSelector />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <section className="flex flex-col gap-3 rounded-2xl border border-border bg-white/80 p-4 shadow-sm sm:p-5">
            <header className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold tracking-tight text-slate-900">
                  Course materials
                </h2>
                <p className="text-xs text-muted-foreground">
                  Select the material you want to read or review.
                </p>
              </div>
              <span className="rounded-full bg-primary-soft/80 px-2 py-1 text-[11px] font-medium text-primary">
                Visual + text based
              </span>
            </header>

            <ul className="flex flex-col gap-2">
              {mockMaterials.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-2 rounded-xl border border-border/70 bg-white px-3 py-2 text-xs hover:border-primary/60 hover:bg-primary-soft/30"
                >
                  <div>
                    <p className="font-medium text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {item.type} &bull; {item.duration}
                    </p>
                  </div>
                  <Button type="button" size="sm" variant="outline">
                    Open
                  </Button>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-3 rounded-2xl border border-border bg-white/80 p-4 shadow-sm sm:p-5">
            <header className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold tracking-tight text-slate-900">
                  Ask the tutor
                </h2>
                <p className="text-xs text-muted-foreground">
                  Type your questions and the chatbot will give detailed
                  explanations using your course materials.
                </p>
              </div>
              <span className="rounded-full bg-secondary/20 px-2 py-1 text-[11px] font-medium text-secondary">
                Chat mock
              </span>
            </header>

            <div className="flex min-h-[220px] flex-col gap-2 rounded-xl border border-border/70 bg-muted/60 p-3 text-xs">
              {mockConversation.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[90%] rounded-2xl px-3 py-2 ${
                    message.from === "student"
                      ? "self-end bg-primary text-white"
                      : "self-start bg-white text-slate-900 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <form className="flex items-center gap-2 pt-1">
              <Input
                name="question"
                placeholder="Ask the tutor to break down a concept, give more examples, or summarise a section..."
                className="h-10 text-xs sm:text-sm"
              />
              <Button type="button" size="sm">
                Send
              </Button>
            </form>

            <footer className="mt-1 rounded-xl bg-primary-soft/40 p-3 text-[11px] text-muted-foreground">
              When the backend is connected, this area will stream real AI
              responses, highlight key sentences from lecturer notes, and show
              small diagrams next to the explanations.
            </footer>
          </section>
        </div>

        <section className="grid gap-4 rounded-2xl border border-border bg-white/80 p-4 text-xs text-muted-foreground shadow-sm sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)] sm:p-5">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Today&apos;s study summary
            </h2>
            <p className="mt-1">
              Estimated time spent reading: <span className="font-semibold text-slate-900">45 minutes</span> across{" "}
              <span className="font-semibold text-slate-900">2 materials</span>.
            </p>
            <p className="mt-1">
              The real system will calculate this from your reading sessions and
              display weekly and semester level trends.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-sm font-semibold text-slate-900">
              Share your achievement
            </h3>
            <p>
              A share button will let you post a simple card with your today&apos;s
              study time and completed topics to friends or study groups.
            </p>
            <Button type="button" size="sm" variant="outline">
              Preview share card (mock)
            </Button>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

