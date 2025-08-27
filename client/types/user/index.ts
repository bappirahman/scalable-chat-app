export interface CustomUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string;
  token?: string;
}

export interface UserAvatarProps {
  name?: string | null;
  image?: string | null;
}
