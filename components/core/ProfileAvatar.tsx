import { Menu } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { SignOut, UserPlus } from "phosphor-react";
import { FC } from "react";

export const ProfileAvatar: FC = () => {
    const { data: session } = useSession({ required: true })
    
    return <Menu as="div" className="flex items-center justify-center">
    <Menu.Button className="avatar">
        <div className="w-10 rounded-full">
            <Image src={session?.user?.image!} width={40} height={40} alt="User avatar" />
        </div>
    </Menu.Button>
    <Menu.Items as="ul" className="dropdown-content menu absolute top-[110%] right-0 gap-2 rounded-md bg-base-300 p-2 shadow">
        <Menu.Item as="li" onClick={() => signOut()}>
            <span className="opacity-75"> 
                <SignOut className="h-6 w-6" />
                Sign out
            </span>
        </Menu.Item>
    </Menu.Items>
  </Menu>
}