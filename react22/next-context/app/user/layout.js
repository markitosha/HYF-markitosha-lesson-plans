import Navbar from "./Navbar";
import { UserProvider } from "@/app/user/context/UserContext";

export default function Layout({ children }) {
    return (
        <UserProvider>
            <Navbar />
            <div className={'p-8'}>
                {children}
            </div>
        </UserProvider>
    );
}
