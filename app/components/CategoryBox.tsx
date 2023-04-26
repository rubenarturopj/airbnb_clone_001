"use client";
// This component or file is used to create the categories icons and desriptions
// AND TO MODIFY THE URL (SEARCH PARAMS);

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons/lib";
import querystring from "query-string";

interface CategoryBoxProps {
    label: string;
    icon: IconType;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    label,
    icon: Icon,
    selected,
}) => {
    // this will help us render new listings when we click on an category
    const router = useRouter(); // to navigate through pages in Next.js
    const params = useSearchParams(); // to search for params in the URL
    // function to handle the clicking of a category
    const handleClick = useCallback(() => {
        let currentQuery = {};

        //check if we have params at all, because params can be type null
        if (params) {
            // we'll create an object out of all our current parameters
            // in the future we're gonna have lots of parameters because we're going to
            // store a bunch of things in our URL, including: search location, start and end
            // date of future vacations, number of guests, number of rooms.
            // we want to be careful and not remove any of those parameters every time we click
            // on a category.
            currentQuery = querystring.parse(params.toString());

            // when we click in a category the current label is going to be assign as the
            // parameter in our URL
            const updatedQuery: any = {
                ...currentQuery,
                category: label,
            };

            // now, imagine you have selected a category and it's showing you the listing.
            // if you click again on the same category, it should remove the selection
            // and reset the categories.
            if (params?.get("category") === label) {
                delete updatedQuery.category;
            }

            // to generate a new URL with the newest query, and "/" as our path name and
            // we also filtered out all of the empty options ({skipNull:tue})
            const url = querystring.stringifyUrl(
                {
                    url: "/",
                    query: updatedQuery,
                },
                { skipNull: true }
            );

            // to push the url to the router
            router.push(url);
        }
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`
                flex 
                flex-col 
                items-center 
                justify-center 
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                ${selected ? "border-b-neutral-800" : "border-transparent"}
                ${selected ? "text-neutral-800" : "text-neutral-500"}
            `}
        >
            <Icon size={26} />
            <div className="font-medium text-sm">{label}</div>
        </div>
    );
};

export default CategoryBox;
