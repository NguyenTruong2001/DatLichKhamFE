"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      router.push("/private/booking");
    } else {
      setError("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-sm w-full space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">Đăng nhập hệ thống</h1>
        <Input placeholder="Tên đăng nhập" value={username} onChange={e => setUsername(e.target.value)} required />
        <Input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <Button type="submit" className="w-full">Đăng nhập</Button>
      </form>
    </div>
  );
} 