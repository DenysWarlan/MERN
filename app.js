const express = require('express');
const config = require("config");
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.route');
const coursesRoutes = require('./routes/courses.route');


const app = express();

app.use(express.json({ extended: true }))

const PORT = config.get('port') || 5000;

app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRoutes);

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true

        });

        app.listen(PORT, () => console.log(`Server running: ${PORT}`));
    } catch (e) {
        console.log(`Server error: ${e.message}`);
        process.exit(1);
    }
}
start()

