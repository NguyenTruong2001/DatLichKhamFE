"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";

const sampleStaff = [
  { id: 1, name: "Nguyễn Thị D", position: "Lễ tân", phone: "0934567890" },
  { id: 2, name: "Phạm Văn E", position: "Quản lý", phone: "0945678901" },
  { id: 3, name: "Trần Thị F", position: "Kế toán", phone: "0956789012" },
];

export default function StaffManagementPage() {
  const [staff] = useState(sampleStaff);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Quản lý Nhân viên</h1>
      <div className="mb-4 flex justify-end">
        <Button>Thêm nhân viên</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th className="text-left p-2">Họ tên</th>
            <th className="text-left p-2">Chức vụ</th>
            <th className="text-left p-2">Số điện thoại</th>
            <th className="text-left p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((nv) => (
            <tr key={nv.id} className="border-t">
              <td className="p-2">{nv.name}</td>
              <td className="p-2">{nv.position}</td>
              <td className="p-2">{nv.phone}</td>
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