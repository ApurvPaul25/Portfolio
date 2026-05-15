import { tool } from "@langchain/core/tools"
import {ToolNode} from "@langchain/langgraph/prebuilt"
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph"
import {ChatOpenAI} from "@langchain/openai"
import {z} from "zod"

const toolNode = new ToolNode(tools)

const multiply = tool(
    async({a, b})=>{
        return (a*b).toString()
    },
    {
        name: "multiply",
        description: "Multiplies two numbers together",
        schema: z.object({
            a: z.number().describe("First Number"),
            b: z.number().describe("Second Number")
        })
    }
)

const add = tool(
    async({a,b})=>{
        return (a+b).toString()
    },
    {
        name: "add",
        description: "Adds two numbers together",
        schema: z.object({
            a: z.number().describe("First Number"),
            b: z.number().describe("Second Number")
        })
    }
)

const substract = tool(
    async({bigger,smaller})=>{
        const result = bigger-smaller
        return `The difference is ${result}`
    },
    {
        name: "substract",
        description: "Subtracts one number from another",
        schema: z.object({
            bigger: z.number().describe("Larger Number"),
            smaller: z.number().describe("Smaller Number")
        })
    }
)


const llm = new ChatOpenAI({
    apiKey: OPENAI_API_KEY,
    modelName: "gpt-4o"
})
const tools = [add, multiply, substract]
const toolsByName = Object.fromEntries(tools.map((tool)=>[tool.name, tool]))
const llmWithTools = llm.bindTools(tools)




const workflow = new StateGraph(MessagesAnnotation)
        .addNode("agent", async(state)=>{
            const response = await llmWithTools.invoke(state.messages)
            return {messages: [response]}
        })
        .addNode("tools". toolNode)
        .addEdge("__start__", "agent")
        .addConditionalEdges("agent", shouldContinue)
        .addEdge("tools", "agent")

const app = workflow.compile()



export default function AICompoent(){

const runAgent = async()=>{
    const result = await app.invoke({
         messages: [{
                role: "user",
                content: "Hello!"
            }]
    })
        console.log(result)
    }
return(
        <button onClick={runAgent}>Run the AI Agent</button>
    )
}
