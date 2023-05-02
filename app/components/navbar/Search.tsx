"use client";

import { BiSearch } from "react-icons/bi";
import useSearchModal from "@/app/hooks/useSearchModal";
import { useSearchParams } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import { useMemo } from "react";
import { differenceInDays } from "date-fns";

const Search = () => {
    const searchModal = useSearchModal(); // to use the searchMOdal
    const params = useSearchParams(); // to extract params from URL
    const { getByValue } = useCountries(); // to get the extract the exact location

    const locationValue = params?.get("locationValue"); // to get the location from the URL
    const startDate = params?.get("startDate"); // to get the startDate from the URL
    const endDate = params?.get("endDate"); // to get the endDate from the URL
    const guestCount = params?.get("guestCount"); // to get the guestCount from the URL

    // this will be in charge of looking in the URL if there is a Param for Location
    // if there is, it will return the label; if there isn't it will return "Anywhere"
    const locationLabel = useMemo(() => {
        if (locationValue) {
            return getByValue(locationValue as string)?.label;
        }

        return "Anywhere";
    }, [locationValue, getByValue]);

    // this will be in charge of looking in the URL if there is a Param for start and end date
    // if there is, it will return the days; if there isn't it will return "Any Week"
    const durationLabel = useMemo(() => {
        if (startDate && endDate) {
            const start = new Date(startDate as string);
            const end = new Date(endDate as string);
            let diff = differenceInDays(end, start);

            // if the difference between these dates is 0, then change diff to 1
            // which means 1 day, we cannot make reservations for 0 days
            if (diff === 0) {
                diff = 1;
            }
            // return this date like this:
            return `${diff} Days`;
        }
        // if there are no params for dates, then return "any week"
        return "Any Week";
    }, [startDate, endDate]);

    // this will be in charge of looking in the URL if there is a Param for number of guests
    //if there is, it will return this number; otherwise it will return "Add guests"
    const guestLabel = useMemo(() => {
        if (guestCount) {
            return `${guestCount} Guests`;
        }

        return "Add Guests";
    }, [guestCount]);

    return (
        <div
            onClick={searchModal.onOpen}
            className="
                border-[1px] 
                w-full 
                md:w-auto 
                py-2 
                rounded-full 
                shadow-sm 
                hover:shadow-md 
                transition 
                cursor-pointer
            "
        >
            <div
                className="
                flex 
                flex-row 
                items-center 
                justify-between
            "
            >
                <div
                    className="
                        text-sm 
                        font-semibold 
                        px-6
                    "
                >
                    {locationLabel}
                </div>
                <div
                    className="
                        hidden 
                        sm:block 
                        text-sm 
                        font-semibold 
                        px-6 
                        border-x-[1px] 
                        flex-1 
                        text-center
                    "
                >
                    {durationLabel}
                </div>
                <div
                    className="
                        text-sm 
                        pl-6 
                        pr-2 
                        text-gray-600 
                        flex 
                        flex-row 
                        items-center 
                        gap-3
                    "
                >
                    <div
                        className="
                            hidden 
                            sm:block
                        "
                    >
                        {guestLabel}
                    </div>
                    <div
                        className="
                            p-2 
                            bg-rose-500 
                            rounded-full 
                            text-white
                        "
                    >
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
