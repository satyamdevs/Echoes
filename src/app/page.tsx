'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('./Dashboard');
    });
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center py-12 px-4">
      loading
    </div>
  );
}