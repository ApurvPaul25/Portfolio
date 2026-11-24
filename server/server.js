import express from "express"
import cookieParser from "cookie-parser";
import visitorRoutes from "./routes/visitorRoutes.js";

import connectDB from "../src/db/db.js"
import noteModel from "./models/note.model.js"

const app = express()

app.use(express.json())
app.use(cookieParser());

await connectDB()

app.use("/api/visitor", visitorRoutes);


app.post("/notes", async (req, res)=>{
    const data = (req.body)
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "Note created Successfully"
    })
})
app.get("/notes", async (req, res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message: "Notes fetched Successfully",
        notes: notes
    })
})
app.get("/notes/:id", async (req, res)=>{
    const id = req.params.id
    const note = await noteModel.findOne({_id: id})
    res.status(200).json({
        message: "Notes fetched Successfully",
        note: note
    })
})
app.patch("/notes/:id", async (req, res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id: id}, {description: description})
    res.status(200).json({
        message: "Note updated Successfully"
    })
})
app.delete("/notes/:id", async (req, res)=>{
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "Note deleted Successfully"
    })
})

app.listen(3000)