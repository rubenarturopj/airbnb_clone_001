// this is going to check wether we're in server side rendering or not

"use client"; // if we're using state, then it's client component. Client side vs Server side

import { useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <>{children}</>;
};

export default ClientOnly;
