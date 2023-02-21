const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})
mongoose.connect('/blog',(req,resp)=>{
    console.log(req.url,req.method)
    resp.json(blog)
})

app.listen(3000, () => console.log('Server running......'));

