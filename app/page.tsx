"use-client"
import { ModeToggle } from "@/components/theme-toggle-button";
import { AvatarDemo } from "@/components/quiz-logo";
import { UserButton } from "@clerk/nextjs";
import { Quiz } from "@/components/quiz-componenet";

export default function Home() {
  return (
    <main>
      <div className="absolute right-10 top-10 h-16 w-16 ...">
        <UserButton afterSignOutUrl="/" />
      </div>
      <AvatarDemo />

      <div className="absolute bottom-0 right-1 h-10 w-16 ...">
        <ModeToggle />
      </div>
      <div className="flex justify-center items-center h-screen">
        <Quiz />
      </div>
    </main>
  );
}
