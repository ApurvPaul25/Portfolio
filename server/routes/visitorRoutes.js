import express from "express"
import Visitor from "../models/Visitor"

const router = express.Router()
const COOKIE_NAME = "portfolio_visitor"

router.post("/coin-drop", async(req, res) => {
    let visitorId = req.cookies?.[COOKIE_NAME]

    try{
        if(!visitorId){
            visitorId = crypto.randomUUID()
        }

        const existingVisitor = await Visitor.findOne({visitorId})

        if(existingVisitor){
            res.cookie(COOKIE_NAME, visitorId, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 365 * 24 * 60 * 60 * 1000,
                path: "/"
            })

            return res.json({
                isNewVisitor: false,
                visitorNumber: null
            })
        }
        const counter = await VisitorCounter.findOneAndUpdate(
            {_id: "global_visitors"},
            {$inc: {count: 1}},
            {
                new: true,
                upsert: true,
                setDfaultsOnInsert: true
            }
        )

        try {
            await Visitor.create({
                visitorId, visitorNumber: counter.count
            })
        } catch (error) {
            if(error.code === 11000){
                await VisitorCounter.updateOne(
                    {_id: "global-visitors"},
                    {$inc: {count: -1}}
                )

                return res.json({
                    isNewVisitor: false,
                    visitorNumber: null
                })
            }

            await VisitorCounter.updateOne(
                {_id: "global_visitors"},
                {$inc: {count: -1}}
            )
            throw error
        }

        res.cookie(COOKIE_NAME, visitorId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSize: "lax",
            maxAge: 365 * 24 * 60 * 60 * 1000,
            path: "/"
        })

        return res.json({
            isNewVisitor: true,
            visitorNumber: counter.count
        })
    } catch(error){
        console.error("Visitor registration error:", error)

        return res.status(500).json({
            message: "Could not register visitor"
        })
    }
})

export default router