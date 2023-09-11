import mongoose from "mongoose"

export interface Todo{
    title: string,
    description: string,
    dueDate: string
    status:boolean
}

const TodoSchema = new mongoose.Schema<Todo>({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    dueDate: {
        type:String
    },
    status: {
        type:Boolean
    }
})

export default mongoose.model("todo",TodoSchema)