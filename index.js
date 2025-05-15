// const express = require('express');
import express from "express";
const app = express();
const PORT = 3001;

app.get("/api", (req, res) => {
	res.json({ message: "My backend..." });
});

app.listen(PORT, () => {
	console.log(`Backend running on http://localhost:${PORT}`);
});
