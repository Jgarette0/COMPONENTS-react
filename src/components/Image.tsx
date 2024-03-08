import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarProfile() {
  return (
    <Avatar className="flex flex-col justify-center place-items-center  h-20 w-20 border-2 mt-5">
      <AvatarImage src="https://github.com/Jgarette0.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default AvatarProfile;
