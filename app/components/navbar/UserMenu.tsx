"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

import MenuItems from "./MenuItems";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const router = useRouter();
    // Start of passing the functions to open the modal from useRegisterModal
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    // End of passing the functions for the modal *****************

    // start of OPEN / CLOSE  ********************
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => {
            return !value;
        });
    }, []);
    // end of OPEN / CLOSE ***********************************

    // start of Clicking Airbnb your home******************
    // if we're not logged in, it will ask us to do it
    // if we have logged in, then we will be able to open then Rent modal.
    const onRent = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        // Open Rent Modal
        rentModal.onOpen();
    }, [currentUser, loginModal, rentModal]);
    // end of CLicking Airbnb your home **********************

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onRent}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                >
                    Airbnb, your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItems
                                    onClick={() => router.push("/trips")}
                                    label="My trips"
                                />
                                <MenuItems
                                    onClick={() => router.push("/favorites")}
                                    label="My favorites"
                                />
                                <MenuItems
                                    onClick={() => router.push("/reservations")}
                                    label="My reservations"
                                />
                                <MenuItems
                                    onClick={() => {}}
                                    label="My properties"
                                />
                                <MenuItems
                                    onClick={rentModal.onOpen}
                                    label="Airbnb my home"
                                />
                                <MenuItems onClick={signOut} label="Logout" />
                            </>
                        ) : (
                            <>
                                <MenuItems
                                    onClick={loginModal.onOpen}
                                    label="Log in"
                                />
                                <MenuItems
                                    onClick={registerModal.onOpen}
                                    label="Sign up"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
