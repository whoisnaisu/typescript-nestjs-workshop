const express = require('express');
const router = express.Router();
// 0) ส่วนนี้คือ data หรือ logic นะ
const Todo: Todo[] = []; // Todo model

// 1) ลองคิดว่าส่วนนี้เป็นอะไร ระหว่าง logic กับ data แล้วลอง map กับ MVC concept ดูครับ
export type Todo = {
  id: string;
  title: string;
  isComplete: boolean;
  userId: string
};

// 2) ลองคิดว่าส่วนนี้เป็นอะไร ระหว่าง logic กับ data แล้วลอง map กับ MVC concept ดูครับ
router.get('/todos', (req, res, next) => {
  return Todo;
});

// 3) ลองคิดว่าส่วนนี้เป็นอะไร ระหว่าง logic กับ data แล้วลอง map กับ MVC concept ดูครับ
router.post('/todos', (req, res, next) => {
  // 4) ลองพยายามแยกส่วนดูครับ ว่าส่วนไหนเป็น data, logic บ้าง
  const todo = new Todo({
    id: uuid(),
    title: req.body.task,
    isComplete: req.body.status,
    userId: req.body.userId
  });

  Todo.push(todo);
  const todo = Todo.filter(({ id }) => id === todo.id);
  return todo;
});

// ให้แปลง code ด้านบนเป็นแบบ MVC ลงไปใน src -> todos -> todos.controller.ts (ทำไปพร้อมกัน)
