const express = require('express');
const router = express.Router();

// 1) สิ่งนี้ควรถูกย้ายไปไว้ที่ไหนนะ แล้วต้องดูยังไงนะว่าเป็น logic หรือ data
// hint: ลองดูที่ service สิ
type User = {
  id: string
  organizationId: string
  email: string;
  password: string;
  name: string;
};

// 2) ส่วนนี้คือ logic หรือ data
// hint: ลองดู service
const Users: User[] = []; // User model

// 3) ส่วนนี้คือ logic หรือ data นะ
router.get('/users', (req, res, next) => {
  return Users;
});

// 4) ส่วนนี้คือ logic หรือ data นะ 
// ทั้ง function นี้อาจจะมีหลายๆ ส่วนรวมกันอยู่นะ
router.post('/users', (req, res, next) => {
  // 5) save user
  const new_user: User = {
    email: 'test@mail.com',
    password: '1234',
    name: 'test user',
  };

  Users.push(new_user);

  // เอาเฉพาะตัวล่าสุด
  const user = Users.filter(({ email }) => email === new_user.email);
  // 6) return user
  return user;
});

// ให้แปลง code ด้านบนเป็นแบบ MVC ใส่ file -> src -> users -> users.controller.ts
