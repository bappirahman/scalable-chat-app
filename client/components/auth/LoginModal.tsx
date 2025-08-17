import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import google from "@/public/images/google.png";
import Image from "next/image";
import { signIn } from "next-auth/react";

function LoginModal() {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Getting Started</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to quick chat</DialogTitle>
            <DialogDescription>
              Sign in to start chatting instantly. Connect with friends and
              colleagues in real time.
            </DialogDescription>
          </DialogHeader>
          <Button variant="outline" onClick={handleLogin}>
            <Image src={google} alt="google logo" height={25} width={25} />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LoginModal;
