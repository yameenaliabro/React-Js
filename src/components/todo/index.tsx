import { Checkbox, message } from 'antd';
import React, { useCallback, useState } from 'react'

interface TodoType {
    task: string,
    isCompleted: boolean
}
function TodoApplication() {
    const [todos, settodos] = useState<TodoType[]>([])
    const [task, settask] = useState("")

    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        if (task === "") {
            message.info("Please enter the todo ")
            return;
        }
        e.preventDefault();
        const todo = {
            task,
            isCompleted: false
        }
        settodos([...todos, todo])
        settask("")
        try {
        } catch (error: any) {
            message.error(error)
        }
    }, [task, todos])
    console.log("🚀 ~ TodoApplication ~ todos:", todos)

    return (
        <div className='flex items-center flex-col'>
            <h1>Todo Application</h1>
            <div className='flex flex-col gap-x-[20px] bg-slate-700 p-[20px]  min-w-[400px] max-w-[500px]'>
                <form
                    onSubmit={onSubmit}
                    className='flex justify-end  gap-x-[20px] bg-slate-700 p-[20px]  min-w-[400px]'>
                    <input
                        type='text'
                        placeholder='entet the todo'
                        className='outline-none w-full rounded-md py-[8px] pl-[20px]'
                        value={task}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => settask(e.target.value)}
                    />
                    <button type='submit' className='bg-blue-800 px-[20px] py-[8px] rounded-md text-white'>AddTodo</button>
                </form>
                <ul className='flex flex-col justify-start w-full gap-x-[20px] gap-y-[13px]'>
                    {todos.map((item) => {
                        return (
                            <div className='flex flex-row justify-start w-full ml-[20px] px-[5px] gap-y-[30px]'>
                                <Checkbox>{item.isCompleted}</Checkbox>
                                <li className='text-white'>{item.task}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoApplication