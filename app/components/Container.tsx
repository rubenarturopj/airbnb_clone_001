"use client"; // to make it client component. this is important because we're gonna import this Container in other client components;

// to extract the children, this info is the one passed between <Container> tags in Navbar.jsx
interface ContainerProps {
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            {children}
        </div>
    );
};

export default Container;
