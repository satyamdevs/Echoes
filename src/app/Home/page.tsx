'use client'
import { useState, useEffect } from "react";
import Header from "../components/header";
import axios from "axios";

type UserID = {
    username: string
}

export default function Page() {
    const [user, setUser] = useState<UserID | null>(null);
    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const response = await axios.get<UserID>("/api/users/user_profile")
                if (isMounted) {
                    setUser(response.data)
                }
            } catch (err) {
                console.log("Error", err)
            }
        }
            fetchData();
            return () => {
                isMounted = false; // cleanup
            };
        }, []);

    return (
        <div className="bg-black h-screen">
            <Header />
            {/* <h1 className="text-white">
                hi, {user?.data.username || "guest"}
            </h1> */}
        </div>
    );
}