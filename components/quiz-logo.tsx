import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="absolute left-10 top-10 h-20 w-20 ...">
    <Avatar  className="h-18 w-18">
      <AvatarImage src="logo.png" alt="logo" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>
  )
}
