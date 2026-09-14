/* import merge from "lodash/merge";
console.log("lodash merge function:", merge) ; */

//=======================================
/* import z from "zod";
console.log("zod function", z) */

//=======================================
/* import mongoose from "mongoose";
console.log("mongoose funciton", mongoose) */

//=======================================
import { dateNow } from "../packages/utils/date.ts";
// import { dateNow } from "@pw/utils";
import express from "express";
// import express from "C:\\Users\\User\\Desktop\\pc-server";
// import express from "../../pc-server/";

import type { user } from "@pw/types";

const app = express();
const port = Number(process.env.PORT) || 3100;
app.disable("x-powered-by");

const data: user = {
  name:  "test",
  age: 90,
  email: "test@t.com"
}

app.get("/", (req, res) => {
  res.end(`app2 date: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log("port running on ipv4 and ipv6 3000");
});
