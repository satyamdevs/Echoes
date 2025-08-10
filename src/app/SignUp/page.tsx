'use client'
import { Button } from "../components/ui/button"
import { useState } from "react"
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
export function DialogDemo() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [User , setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const onSignUp = async () => {
        try {
        const response = await axios.post("/api/users/signup", User);
        console.log("Signup success", response.data);
        toast.success("User created successfully");
        setUser({ username: "", email: "", password: "" });
        setOpen(false);

        } catch (error) {
            console.error('Error during sign up:', error);
            toast.error("Failed to create user");
        } 
    };

    return (
        <DialogContent className="sm:max-w-[425px] bg-[#181818] text-white border border-[#333]">
            <DialogHeader>
                <DialogTitle className="text-xl">Register</DialogTitle>
                <DialogDescription className="text-gray-400 mt-1">
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            <form>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className="text-white">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={User.username}
                            onChange={(e) => setUser({ ...User, username: e.target.value })}
                            required
                            className="bg-[#222] text-white border border-[#444] focus:border-[#555]"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="Email" className="text-white">Email ID</Label>
                        <Input
                            id="email"
                            type="email"
                            value={User.email}
                            required
                            placeholder="you@example.com"
                            name="email"
                            onChange={(e) => setUser({ ...User, email: e.target.value })}
                            className="bg-[#222] text-white border border-[#444] focus:border-[#555]"
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password" className="text-gray-300">Password</Label>
                        </div>
                        <Input 
                            id="password"  
                            type="password" 
                            required 
                            value={User.password}
                            onChange={(e) => setUser({ ...User, password: e.target.value })}
                            placeholder="********"
                            name="password"
                            className="222 text-white border-[#444] focus:border-[#555] placeholder-gray-400" />
                    </div>
                </div>
            </form>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline" className="bg-[#222] text-white border border-[#444] hover:bg-[#333]">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                <Button 
                    onClick={(e) => {
                        e.preventDefault();
                        onSignUp();
                    }}
                    className="bg-white text-black hover:bg-gray-200">Save</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}
