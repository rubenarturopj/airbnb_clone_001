"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

import Modal from "./Modal";

import useSearchModal from "@/app/hooks/useSearchModal";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";
import { CountrySelectValue } from "../inputs/CountrySelect";
import queryString from "query-string";
import { formatISO } from "date-fns";

enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2,
}

const SearchModal = () => {
    const router = useRouter(); // to navigate through the page
    const params = useSearchParams(); // to get params from URL
    const searchModal = useSearchModal();

    const [location, setLocation] = useState<CountrySelectValue>();
    const [step, setStep] = useState(STEPS.LOCATION);
    const [guestCount, setGuestCount] = useState(1);
    const [roomCount, setRoomCount] = useState(1);
    const [bathroomCount, setBathroomCount] = useState(1);
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });

    // import map, the [location] array gives always an error beacuse this package is not
    // well optimized YET for Next.js 13
    const Map = useMemo(
        () =>
            dynamic(() => import("../Map"), {
                ssr: false,
            }),
        [location]
    );

    // to go forwards one step steps
    const onBack = useCallback(() => {
        setStep((value) => value - 1);
    }, []);

    // to go back one step
    const onNext = useCallback(() => {
        setStep((value) => value + 1);
    }, []);

    // when submitting
    const onSubmit = useCallback(async () => {
        // first let's check if we are NOT on the last step of the modal,
        // if we're not, then move to the next step
        if (step !== STEPS.INFO) {
            return onNext();
        }

        // if we are in the last step of the modal
        let currentQuery = {};

        // if the URL has params, get those params into string
        if (params) {
            currentQuery = queryString.parse(params.toString());
        }

        // create a new query
        const updatedQuery: any = {
            ...currentQuery,
            locationValue: location?.value,
            guestCount,
            roomCount,
            bathroomCount,
        };

        // to get the start date of the reservation transformed into ISO string
        if (dateRange.startDate) {
            updatedQuery.startDate = formatISO(dateRange.startDate);
        }

        // to get the end date of the reservation transformed into ISO string
        if (dateRange.endDate) {
            updatedQuery.endDate = formatISO(dateRange.endDate);
        }

        // create the new URL with the new query --> the url has the params for searching
        const url = queryString.stringifyUrl(
            {
                url: "/",
                query: updatedQuery,
            },
            { skipNull: true }
        );

        // reset the steps
        setStep(STEPS.LOCATION);
        // close search modal
        searchModal.onClose();
        // redirect
        router.push(url);
    }, [
        step,
        searchModal,
        location,
        router,
        guestCount,
        roomCount,
        dateRange,
        onNext,
        bathroomCount,
        params,
    ]);

    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={searchModal.onOpen}
            title="Filters"
            actionLabel="Search"
        />
    );
};

export default SearchModal;
