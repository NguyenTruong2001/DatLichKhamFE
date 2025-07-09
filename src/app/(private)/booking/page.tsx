"use client";
import { useState } from "react";
import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const doctors = [
  { id: 1, name: "BS. Nguyễn Văn A" },
  { id: 2, name: "BS. Trần Thị B" },
  { id: 3, name: "BS. Lê Văn C" },
];

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Đặt lịch thành công! (demo)");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Đặt lịch khám</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Họ và tên" required />
        <Input name="phone" placeholder="Số điện thoại" required type="tel" />
        <div>
          <label className="block mb-1 font-medium">Chọn ngày khám</label>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Chọn giờ khám</label>
          <Select value={time} onValueChange={setTime} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn giờ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="08:00">08:00</SelectItem>
              <SelectItem value="09:00">09:00</SelectItem>
              <SelectItem value="10:00">10:00</SelectItem>
              <SelectItem value="14:00">14:00</SelectItem>
              <SelectItem value="15:00">15:00</SelectItem>
              <SelectItem value="16:00">16:00</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Chọn bác sĩ</label>
          <Select value={doctor} onValueChange={setDoctor} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn bác sĩ" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((d) => (
                <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Textarea name="note" placeholder="Ghi chú (nếu có)" />
        <Button type="submit" className="w-full">Đặt lịch</Button>
      </form>
    </div>
  );
} 