// index.ts

const express = require("express")

const port = process.env.PORT || 3001;

const app = express();

app.get("/api", (req: any, res: any) => {
    res.json({ message: "Healthcheck does Pass"})
})

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});

