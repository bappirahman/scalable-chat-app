export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  provider?: string;
  token: string;
}
