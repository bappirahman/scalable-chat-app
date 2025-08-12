import { ISODateString } from "next-auth";
import { CustomUser } from "../user";

export interface CustomSession {
  user?: CustomUser;
  expires: ISODateString;
}
