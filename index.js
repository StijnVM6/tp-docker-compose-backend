import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

console.log("Starting app...");

app.use(
	cors({
		origin: "*",
	})
);

app.get("/api", (req, res) => {
	res.json({ message: "My backend..." });
});

app.listen(PORT, () => {
	console.log(`Backend running on http://localhost:${PORT}`);
});
