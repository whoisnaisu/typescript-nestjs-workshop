import { save, Connector } from "./save";

export type newUserDTO = {
  full_name: string;
  age: number;
  email: string;
  password: string;
  address: string;
  phone: string;
  personal_website: string;
};

const connector: Connector = {
  title: "ไม่ต้องสนใจ 'ค่า (value)' ของตัวแปรนี้",
};

function saveNewUser(detail: newUserDTO) {
  // 2) ถ้าเราจะเรียกใช้ save() function เราต้องการอะไรบ้าง และต้องส่งอะไรเข้าไปบ้าง
  // code here..
  const data: newUserDTO = {
    full_name: "string",
    age: 55,
    email: "string@gmail.com",
    password: "string",
    address: "string",
    phone: "string",
    personal_website: "string",
  };
  save(connector, data);
}
