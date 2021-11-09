const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        des: { type: String },
        image: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        level: { type: String },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Course', Course);
// !!! mongoose.model('ModelName', mySchema);
// ModelName: đây là tên sẽ lưu vào db, nó sẽ tự convert Course => courses
// nếu chưa có nó sẽ tạo collection mới với tên courses
// mySchema: tên schema mà mình định nghĩa ở phía trên
