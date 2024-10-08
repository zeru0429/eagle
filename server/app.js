const express = require("express");
const os = require("os");
const cors = require("cors");
const appRoutes = require("./routes/index");
const path = require("path");

// configet dotenv
const dotenv = require("dotenv");
dotenv.config();

const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

const server = express();

// middle ware  to use json
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// cors
server.use(cors({ origin: "http://localhost:5173", credentials: true }));
// server.use(cors({origin: '*',credentials: true}));
server.use("/uploads", express.static(path.join(__dirname, "uploads")));

//test route
server.get("/", async (req, res) => {
  res.send("test url");
});

//main route
server.use(appRoutes);

server.listen(port, getCurrentIPAddress(), (err) => {
  if (err) console.log(err);
  console.log(`server is runing on http://${getCurrentIPAddress()}:${port}`);
});

function getCurrentIPAddress() {
  const interfaces = os.networkInterfaces();
  for (let interfaceName in interfaces) {
    const interfaceInfo = interfaces[interfaceName];
    for (let i = 0; i < interfaceInfo.length; i++) {
      const alias = interfaceInfo[i];
      if (alias.family === "IPv4" && !alias.internal) {
        return alias.address;
      }
    }
  }
  return "Unable to determine IP address";
}
