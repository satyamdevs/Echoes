"use client"
import { Button } from "@/app/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react";
import { Dialog, DialogTrigger } from "@/app/components/ui/dialog"
import { DialogDemo } from "@/app/SignUp/page"
import toast from "react-hot-toast"
import axios from "axios"

export default function Page() {
    const Router = useRouter();
    const [user , setUser] = React.useState({
        email: "",
        password: ""
    });
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login successful");
            setUser({ email: "", password: "" });
            Router.push("/Home"); 
        } catch (error) {
            console.error('Error during login:', error);
            toast.error("Login failed");
        }
    };
    useEffect(() => {
        if(!user.email || !user.password) {
            toast.error("Please fill in all fields");
        }
    }, [user]);

    return (
      <div className="w-full h-screen flex justify-center items-center mx-auto  p-6 bg-black  shadow">
              <Card className="w-full max-w-sm bg-black text-white border border-white p-3 pt-8 pb-8">
                  <CardHeader>
                      <CardTitle className="text-xl mb-1">Login to your account</CardTitle>
                      <CardDescription className="text-gray-400 mb-2">
                          Enter your email below to login to your account
                      </CardDescription>
                      <CardAction>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button type="button" className="text-blue-400">
                                    Sign Up
                                </Button>
                            </DialogTrigger>
                            < DialogDemo/>
                        </Dialog>
                      </CardAction>
                  </CardHeader>
                  <CardContent>
                      <form>
                          <div className="flex flex-col gap-6">
                              <div className="grid gap-2">
                                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                                  <Input
                                      id="email"
                                      type="email"
                                      placeholder="m@example.com"
                                      value={user.email}
                                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                                      required
                                      className="bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                                  />
                              </div>
                              <div className="grid gap-2">
                                  <div className="flex items-center">
                                      <Label htmlFor="password" className="text-gray-300">Password</Label>
                                      <a
                                          href="#"
                                          className="ml-auto inline-block text-sm text-blue-400 underline-offset-4 hover:underline"
                                      >
                                          Forgot your password?
                                      </a>
                                  </div>
                                  <Input 
                                    id="password" 
                                    type="password"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })} 
                                    placeholder="********"
                                    required 
                                    className="bg-gray-700 text-white border-gray-600 placeholder-gray-400" />
                              </div>
                          </div>
                      </form>
                  </CardContent>
                  <CardFooter className="flex-col gap-2">
                      <Button type="submit" onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Login
                      </Button>
                  </CardFooter>
              </Card>
      </div>
  )
}
