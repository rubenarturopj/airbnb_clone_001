"use client";

import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import CountrySelect from "../inputs/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";
import { setConstantValue } from "typescript";
import Input from "../inputs/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
}

const RentModal = () => {
    const router = useRouter(); // to nacigate through the page
    const rentModal = useRentModal();

    // start of connecting our categories we just crated with our form ***********
    // Building the LISTING table in the database (check prisma.schema)
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category: "",
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: "",
            price: 1,
            title: "",
            description: "",
        },
    });

    const category = watch("category");
    const location = watch("location");
    const guestCount = watch("guestCount");
    const roomCount = watch("roomCount");
    const bathroomCount = watch("bathroomCount");
    const imageSrc = watch("imageSrc");

    const Map = useMemo(
        () =>
            dynamic(() => import("../Map"), {
                ssr: false,
            }),
        [location]
    );

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };
    // end of connecting out categories with the form ***********

    // start of STEP control *************
    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);

    // cada que apretemos el boton continuar o hacia atras vamos a sumarle o restarle al value
    // asi vamos a establecer la navegacion: cada paso tiene un valor en numero
    const onBack = () => {
        setStep((value) => {
            return value - 1;
        });
    };

    const onNext = () => {
        setStep((value) => {
            return value + 1;
        });
    };

    // this will happen every time we click NExt button
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // we are going to check if we are in the last step
        if (step !== STEPS.PRICE) {
            return onNext();
        }

        // but if we are in the last step where we set up the price
        setIsLoading(true);

        // caling axios
        axios
            .post("/api/listings", data)
            .then(() => {
                toast.success("Listing Created!");
                router.refresh();
                reset();
                setStep(STEPS.CATEGORY);
                rentModal.onClose();
            })
            .catch(() => {
                toast.error("Something went wrong.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // el primer punto de control. Si step es igual a 5, creame el boton next
    // "Next" button creation
    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return "Create";
        }
        return "Next";
    }, [step]);

    // "back" button creation, si step es igual a 0, crea el boton Back
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return "Back";
    }, [step]);
    // end of STEP control ***********

    // Start of body content *******************
    // we'll use LET instead of CONST because we want this value to be changed dynamically
    // this is the first return and that's why it's not set in a conditional rendering.
    // STEP 0
    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Which of these best describes your place?"
                subtitle="Pick a category"
            />
            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-3
                max-h-[50vh]
                overflow-y-auto
                "
            >
                {categories.map((item) => {
                    return (
                        <div key={item.label} className="col-span-1">
                            <CategoryInput
                                onClick={(category) =>
                                    setCustomValue("category", category)
                                }
                                selected={category === item.label}
                                label={item.label}
                                icon={item.icon}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
    // end of Body content ***********************

    // start of Next/Back steps (on the modal) after having selected the category ************
    // when you click NEXT/BACK buttons, you add or sustract to the value. ********************
    //
    // Step 1. If step is equal to 1, then overwrite the previous return and return it instead.
    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Where is your place located?"
                    subtitle="Help guests find you!"
                />
                <CountrySelect
                    value={location}
                    onChange={(value) => setCustomValue("location", value)}
                />
                <Map center={location?.latlng} />
            </div>
        );
    }
    // Step 2. If step is equal to 2
    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Share some basics about your place"
                    subtitle="What amenitis do you have?"
                />
                <Counter
                    title="Guests"
                    subtitle="How many guests do you allow?"
                    value={guestCount}
                    onChange={(value) => setCustomValue("guestCount", value)}
                />
                <hr />
                <Counter
                    title="Rooms"
                    subtitle="How many rooms do you have?"
                    value={roomCount}
                    onChange={(value) => setCustomValue("roomCount", value)}
                />

                <hr />
                <Counter
                    title="Bathrooms"
                    subtitle="How many bathrooms do you have?"
                    value={bathroomCount}
                    onChange={(value) => setCustomValue("bathroomCount", value)}
                />
            </div>
        );
    }
    // STEP 3. If STEP is equal to 3 (IMAGE)
    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Add a photo of your place"
                    subtitle="Show guests what your place looks like!"
                />
                <ImageUpload
                    value={imageSrc}
                    onChange={(value) => setCustomValue("imageSrc", value)}
                />
            </div>
        );
    }
    // STEP 4. If STEP is equal to 4 (STEP.DESCRIPTION)
    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="How would you describe your place?"
                    subtitle="Short and sweet works best!"
                />
                <Input
                    id="title"
                    label="Title"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                <Input
                    id="description"
                    label="Description"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        );
    }
    // STEP 5. If STEP is equal to 5 (STEP.PRICE)
    if (step === STEPS.PRICE) {
        bodyContent = (
            <div>
                <Heading
                    title="Now, set your price"
                    subtitle="How much do you charge per night?"
                />
                <Input
                    id="price"
                    label="Price"
                    formatPrice
                    type="number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        );
    }
    // end of Next/Back steps (on the modal) *************************************************

    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title="Airbnb your home!"
            body={bodyContent}
        />
    );
};

export default RentModal;
