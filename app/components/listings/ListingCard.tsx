"use client";

import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import { SafeListing, SafeUser } from "@/app/types";
import useCountries from "@/app/hooks/useCountries";
import { useCallback, useMemo } from "react";

import Image from "next/image";
import Button from "../Button";
import ClientOnly from "../ClientOnly";
import HeartButton from "../HeartButton";

interface ListingCardProps {
    data: SafeListing;
    reservation?: Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser,
}) => {
    const router = useRouter();
    const { getByValue } = useCountries(); // to use the countries package

    // in the DB we're just storing the initals of the location, not the full name of the country.
    // We are going to get that here below.
    const location = getByValue(data.locationValue);

    // start of handle cancel --- when we cancel ************************
    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onAction?.(actionId);
        },
        [onAction, actionId, disabled]
    );
    // end of handle cancel ************************************

    // for price
    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }

        return data.price;
    }, [reservation, data.price]);

    // for reservation date
    const reservationDate = useMemo(() => {
        if (!reservation) {
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, "PP")} - ${format(end, "PP")}`;
    }, [reservation]);

    return (
        <div
            onClick={() => router.push(`/listings/${data.id}`)}
            className="col-span-1 cursor-pointer group"
        >
            <div className="flex flex-col gap-2 w-full">
                <div
                    className="
                        aspect-square 
                        w-full 
                        relative 
                        overflow-hidden 
                        rounded-xl
                    "
                >
                    <Image
                        fill
                        className="
                            object-cover 
                            h-full 
                            w-full 
                            group-hover:scale-110 
                            transition
                        "
                        src={data.imageSrc}
                        alt="Listing"
                    />
                    <div
                        className="
                            absolute
                            top-3
                            right-3
                        "
                    >
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {location?.region}, {location?.label}
                </div>
                <div className="font-light text-neutral-500">
                    {reservationDate || data.category}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">$ {price}</div>
                    {!reservation && <div className="font-light">night</div>}
                </div>
                {onAction && actionLabel && (
                    <Button
                        disabled={disabled}
                        small
                        label={actionLabel}
                        onClick={handleCancel}
                    />
                )}
            </div>
        </div>
    );
};

export default ListingCard;
