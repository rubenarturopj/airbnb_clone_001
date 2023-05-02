"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

import Modal from "./Modal";

import useSearchModal from "@/app/hooks/useSearchModal";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import queryString from "query-string";
import { formatISO } from "date-fns";
import Heading from "../Heading";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";

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

    // when submitting or clicking next // to control the modal
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

    // to control the TEXT of the buttons in the modal
    const actionLabel = useMemo(() => {
        // if we are on the last step about to hit submit, the display "Search"
        if (step === STEPS.INFO) {
            return "Search";
        }

        // if we are not on the last step, show a button with the text "Next"
        return "Next";
    }, [step]);

    // to control the TEXT and the moment of appereance of the "Back" button
    const secondaryActionLabel = useMemo(() => {
        // if we are in the very first part of the modal, dont' show a button saying "back"
        if (step === STEPS.LOCATION) {
            return undefined;
        }

        // if we are not in the first part of the modal, display a button saying "back"
        return "Back";
    }, [step]);

    // start of controlling the content of the modal depending on the STEP we are on *******
    // STEP 0: LOCATION. this is the first part of the modal
    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Where do you wanna go?"
                subtitle="Find the perfect location!"
            />
            <CountrySelect
                value={location}
                onChange={(value) => setLocation(value as CountrySelectValue)}
            />
            <hr />
            <Map center={location?.latlng} />
        </div>
    );

    // STEP 1: DATE -- middle section of the modal
    if (step === STEPS.DATE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="When do you plan to go?"
                    subtitle="Make sure everyone is free!"
                />
                <Calendar
                    onChange={(value) => setDateRange(value.selection)}
                    value={dateRange}
                />
            </div>
        );
    }

    // STEP 2: INFO -- final section of the modal, ready to submit
    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="More information"
                    subtitle="Find your perfect place!"
                />
                <Counter
                    onChange={(value) => setGuestCount(value)}
                    value={guestCount}
                    title="Guests"
                    subtitle="How many guests are coming?"
                />
                <hr />
                <Counter
                    onChange={(value) => setRoomCount(value)}
                    value={roomCount}
                    title="Rooms"
                    subtitle="How many rooms do you need?"
                />
                <hr />
                <Counter
                    onChange={(value) => {
                        setBathroomCount(value);
                    }}
                    value={bathroomCount}
                    title="Bathrooms"
                    subtitle="How many bahtrooms do you need?"
                />
            </div>
        );
    }
    // end of controlling the content of the modal depending on the STEP we are on **********

    return (
        <Modal
            isOpen={searchModal.isOpen}
            title="Filters"
            actionLabel={actionLabel}
            onSubmit={onSubmit}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
            onClose={searchModal.onClose}
            body={bodyContent}
        />
    );
};

export default SearchModal;
