"use strict";
exports.__esModule = true;
var save_1 = require("./save");
var connector = {
    title: "ไม่ต้องสนใจ 'ค่า (value)' ของตัวแปรนี้",
    ss: ''
};
function saveNewUser(detail) {
    // 2) ถ้าเราจะเรียกใช้ save() function เราต้องการอะไรบ้าง และต้องส่งอะไรเข้าไปบ้าง
    // code here..
    var data = {
        full_name: "string",
        age: 55,
        email: "string@gmail.com",
        password: "string",
        address: "string",
        phone: "string",
        personal_website: "string"
    };
    (0, save_1.save)(connector, data);
}
