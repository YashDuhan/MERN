/*
You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404
*/

// App.config
const express = require("express");
const app = express();
const port = 3000;

// File config
const fs = require("fs");
const path = require("path");

// GET REQUEST

//Default route
app.get("/", function (req, res) {
  res.json("Port Working");
});

// Open a file
app.get("/file/:fileName", function (req, res) {
  const name = req.params.fileName;
  const filePath = path.join(__dirname, "/file", name);
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      res.status(404).send("File not found");
    } else {
      res.json(data);
    }
  });
});

// List files
app.get("/file", function (req, res) {
  const filesDirPath = path.join(__dirname, "file");
  fs.readdir(filesDirPath, function (err, files) {
    if (err) {
      return res.status(404).json({
        error: "Failed to retrieve files",
      });
    }
    // Return the list of files as JSON
    res.json(files);
  });
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
