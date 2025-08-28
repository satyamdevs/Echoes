'use client'
import { useState, useEffect } from "react";
import Header from "../components/header";
import axios from "axios";

type UserResponse = {
    username: string
    data: UserID
}

type UserID = {
    username: string
}


export default function Page() {
    const [user, setUser] = useState<UserID | null>(null);
    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const response = await axios.get<UserResponse>("/api/users/user_profile")
                if (isMounted) {
                    setUser(response.data.data)
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
            <Header
                Name={user?.username}
            />
        </div>
    );
}