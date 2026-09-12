/* import merge from "lodash/merge";
console.log("lodash merge function:", merge) ; */

//=======================================
/* import z from "zod";
console.log("zod function", z) */

//=======================================
// import mongoose from "mongoose";
// console.log("mongoose funciton", mongoose)

//=======================================
/* import { Logger } from "C:\\Users\\User\\Desktop\\et\\src\\logger.ts";
Logger.logger("test logger") */

//=======================================
import { dateNow } from "../packages/utils/date";
import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.end(`app1 date: ${dateNow}`)
})

app.listen(3000, () => {
    console.log("port running on ipv4 and ipv6 3000")
})