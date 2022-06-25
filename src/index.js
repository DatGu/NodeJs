const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const morgan = require('morgan');

const route = require('./routes');
const port = 3001;

app.use(express.static('src/resources/public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Template engine
app.engine('handlebars', handlebars.engine()); //app sẽ sử dụng engine có tên là handlebars
app.set('view engine', 'handlebars'); // app sẽ set view engine sử dụng là handlebars
app.set('views', path.join(__dirname, 'resources/views')); //Thay đổi đường dẫn mặc định của views thành resources/views

//Định nghĩa chương trình app sẽ ghi log dạng tiêu chuẩn
app.use(morgan('combined'));

            route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
