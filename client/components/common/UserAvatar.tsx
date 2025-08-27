import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserAvatarProps } from "@/types/user";

function UserAvatar({ name, image }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={image || undefined} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
