"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";

const sampleDoctors = [
  { id: 1, name: "BS. Nguyễn Văn A", specialty: "Nội tổng quát", phone: "0901234567" },
  { id: 2, name: "BS. Trần Thị B", specialty: "Nhi khoa", phone: "0912345678" },
  { id: 3, name: "BS. Lê Văn C", specialty: "Ngoại tổng quát", phone: "0923456789" },
];

export default function DoctorManagementPage() {
  const [doctors] = useState(sampleDoctors);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Quản lý Bác sĩ</h1>
      <div className="mb-4 flex justify-end">
        <Button>Thêm bác sĩ</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th className="text-left p-2">Họ tên</th>
            <th className="text-left p-2">Chuyên khoa</th>
            <th className="text-left p-2">Số điện thoại</th>
            <th className="text-left p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="border-t">
              <td className="p-2">{doctor.name}</td>
              <td className="p-2">{doctor.specialty}</td>
              <td className="p-2">{doctor.phone}</td>
              <td className="p-2 flex gap-2">
                <Button size="sm" variant="outline">Sửa</Button>
                <Button size="sm" variant="destructive">Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
} 