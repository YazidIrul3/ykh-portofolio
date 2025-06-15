// pages/api/download-cv.js
import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const filePath = path.resolve("./public", "cv.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  res.setHeader("Content-Disposition", 'attachment; filename="cv.pdf"');
  res.setHeader("Content-Type", "application/pdf");
  res.send(fileBuffer);
}