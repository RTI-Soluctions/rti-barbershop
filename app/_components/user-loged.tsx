"use client";

import { LogInIcon, LogOutIcon, User2Icon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const UserLoged = () => {
  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <div className="flex items-center justify-between px-5">
          <div className="flex items-center gap-4 mt-6">
            <Avatar>
              <AvatarImage src={data.user?.image || ""} />
              <AvatarFallback>Imagem de {data.user?.name}</AvatarFallback>
            </Avatar>
            <h3 className="">{data.user.name}</h3>
          </div>
          <Button
            onClick={handleLogoutClick}
            className="h-10 w-10 mt-6"
            variant="outline"
            size="icon"
          >
            <LogOutIcon size={22} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 px-5">
          <div className="flex items-center gap-4 mt-6">
            <Avatar className="border border-solid border-secondary items-center flex justify-center">
              <User2Icon className="" />
            </Avatar>
            <h3 className="">Olá, faça seu login!</h3>
          </div>
          <Button
            onClick={handleLoginClick}
            className="h-10 w-full p-4 gap-2 flex justify-start"
            variant="outline"
            size="lg"
          >
            <LogInIcon size={22} />
            <p>Fazer Login</p>
          </Button>
        </div>
      )}
    </>
  );
};

export default UserLoged;
