import { Button, Checkbox, Input, Modal, Popconfirm, Spin, message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
interface TodoType {
    task: string,
    isCompleted: boolean
    id: string
}
function TodoApplication() {
    const [todos, settodos] = useState<TodoType[]>([])
    const [loading, setLoading] = useState(false);
    const [task, settask] = useState("")
    const [visible, setVisible] = useState(false)
    const [currentTask, setCurrentTask] = useState<any>()

    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        try {
            if (task === "") {
                message.info("Please enter the todo ")
                return;
            }
            e.preventDefault();
            const todo = {
                task,
                isCompleted: false
            }

            const response = await addDoc(collection(db, "todos"), todo)
            console.log("🚀 ~ response ~ response:", response)
            settask("")
            setLoading(false)
        } catch (error: any) {
            message.error(error)
        }
    }, [task, todos])


    const deleteTask = useCallback(async (id: string) => {
        console.log("🚀 ~ deleteTask ~ id:", id)
        setLoading(true)
        try {
            const response = await deleteDoc(doc(db, "todos", id))
            console.log("🚀 ~ deleteTask ~ response:", response)
            // settodos(prev => prev.filter((item) => item.id !== id))
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            message.error(error)
        }
    }, [])

    const onCancel = useCallback(() => {
        setVisible(false);
    }, [])

    const showModal = useCallback((item: TodoType) => {
        setCurrentTask(item)
        setVisible(true);
    }, [])

    const handleEditTodo = useCallback(() => {
        const updateTodo = todos.map(todo =>
            todo.id === currentTask?.id ? { ...todo, task: currentTask.task } : todo
        )
        settodos(updateTodo);
        setVisible(false);
        setCurrentTask(null as any)
    }, [currentTask, todos]);

    const handleChangeTask = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!currentTask) return;
        setCurrentTask((prevTask: TodoType) => ({ ...prevTask, task: e.target.value }));
    }, [currentTask]);

    const toggleTodoCompletion = useCallback((id: string) => {
        settodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    }, []);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "todos"));
                const response = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                settodos(response as []);
                setLoading(false);
            } catch (error: any) {
                message.error(error)
                setLoading(false);
            }
        }
        getData();
    }, [])

    console.log("todos >>== ", todos)

    return (
        <div className='flex items-center flex-col h-[100vh]'>
            <h1 className='text-[23px] font-semibold mb-[40px] mt-5'>Todo Application</h1>
            <div className='flex flex-col gap-x-[20px] bg-slate-700 p-[20px]  min-w-[500px]  max-w-[600px] rounded-md'>
                <Spin spinning={loading}>
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
                        {todos?.map((item) => {
                            return (
                                <div className='flex flex-row justify-start w-full gap-x-[20px]  ml-[20px] px-[5px] gap-y-[30px]' key={item.id}>
                                    <Checkbox checked={item?.isCompleted} onChange={() => toggleTodoCompletion(item?.id)} />
                                    {
                                        item.isCompleted ?
                                            <del className='text-white whitespace-nowrap'>{item?.task?.length > 35 ? item?.task?.slice(0., 35) + "..." : item?.task}</del>
                                            :
                                            <li className='text-white whitespace-nowrap'>{item?.task?.length > 35 ? item?.task?.slice(0., 35) + "..." : item?.task}</li>
                                    }
                                    <div className='flex justify-end w-full px-[10px] gap-x-[12px]'>
                                        <FaEdit
                                            className='text-[23px] rounded-md cursor-pointer text-blue-600'
                                            style={{ cursor: `${item.isCompleted ? "not-allowed" : "pointer"}` }}
                                            onClick={item.isCompleted ? () => { } : () => showModal(item)}
                                        />
                                        <Popconfirm title="Are you sure you want to delete this task?" onConfirm={(() => deleteTask(item?.id))}>
                                            <MdDelete className='text-[23px] text-red-500 cursor-pointer rounded-md' />
                                        </Popconfirm>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </Spin>
            </div>
            <Modal open={visible} onCancel={onCancel} title="Edit Task" footer={
                <div className='flex gap-x-[20px] justify-end mt-[20px]'>
                    <Button type='primary' onClick={handleEditTodo}>Submit</Button>
                    <Button>Cancel</Button>
                </div>

            }>
                <Input
                    type='text'
                    placeholder='enter the task'
                    size='large'
                    value={currentTask?.task}
                    onChange={handleChangeTask} />
            </Modal>
        </div>
    )
}

export default TodoApplication