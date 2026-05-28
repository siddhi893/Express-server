const express = require("express")
const os = require("os")

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from express")
})

app.get('/health', (req, res) => {
    res.status(200).json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            hostname: os.hostname(),
            platform: os.platform(),
            memoryUsage: process.memoryUsage(),
            nodeVersion: process.version
        });
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})
