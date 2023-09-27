import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link"; // Import the Link component from Next.js

export function AvatarDemo() {
  return (
    <div className="absolute left-10 top-10 h-20 w-20 ...">
      {/* Wrap the Avatar component in a Link */}
      <Link href="/leaderboard">
        <Avatar className="h-18 w-18">
          <AvatarImage src="logo.png" alt="logo" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}
