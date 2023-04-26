"use client";

import { IconType } from "react-icons";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected,
    onClick,
}) => {
    return (
        <div>
            <div>hola</div>
        </div>
    );
};

export default CategoryInput;
