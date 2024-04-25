"use client";
import Image from "next/image";
import TaskBar from "../../components/taskBar/TaskBar";
import Modal from "../../components/ModalTask/ModalTask";
import { defaultTasks } from "../../utils/defaultTasks";
import { elementsTaskStyle } from "../../utils/elementsTaskStyle";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ModalTask from "../../components/ModalTask/ModalTask";
import ModalBoard from "@/app/components/ModalBoard/ModalBoard";

export default function Page({ params }: any) {
    const [isClient, setIsClient] = useState(false)
    const [showModalTask, setShowModalTask] = useState(false);
    const [showModalBoard, setShowModalBoard] = useState(false);
    const [taskList, setTaskList] = useLocalStorage('tasks', []);
    const [taskId, setTaskId] = useState("");

    useEffect(() => {
        setIsClient(true);
        if (!taskList?.length) setTaskList(defaultTasks);
        else setTaskList(taskList);
        showModalTask ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = ""
    }, [taskList, setTaskList, showModalTask])

    return (
        (taskList && isClient) ? <main className="flex flex-col items-center justify-between p-[20px] mt-[48px] text-[#030616]">
            <div className="w-[552px]">
                <div className="flex w-full cursor-pointer" onClick={() => { setShowModalBoard(true) }}>
                    <Image className="mr-[10px]" width={40} height={40} src="/images/Logo.svg" alt="Logo" />
                    <h1 className="text-[40px] font-normal mr-[10px]">My Task Board</h1>
                    <Image className="" width={25} height={25} src="/images/Edit_duotone.svg" alt="Edit Image" />
                </div>
                <div className="mb-[40px]">
                    <h2 className="ml-[50px] text-[16px] text-normal mt-[6px]">Tasks to keep organised</h2>
                </div>
                {
                    taskList.map((task: any) => (
                        <div className="cursor-pointer" key={task.id} onClick={() => {
                            setShowModalTask(true)
                            setTaskId(task.id)
                        }}>
                            <TaskBar
                                bgColor={elementsTaskStyle(task.status, "bgColor")}
                                logoColor="bg-[#f8fafc]"
                                secondLogoColor={elementsTaskStyle(task.status, "secondLogoColor")}
                                firstLogo={task.icon}
                                Text={task.title}
                                Paragraph={task.description}
                                secondLogo={elementsTaskStyle(task.status, "secondLogo")}
                            />
                        </div>
                    ))
                }
                <div className="cursor-pointer" onClick={() => {
                    setShowModalTask(true)
                    setTaskId("")
                }}>
                    <TaskBar
                        bgColor="bg-[#F5E8D5]"
                        logoColor="bg-[#E9A23B]"
                        secondLogoColor=""
                        firstLogo="/images/Add_round_duotone.svg"
                        Text="Add new task"
                        Paragraph=""
                        secondLogo=""
                    />
                </div>
            </div>
            <div id="modal-root"></div>
            {showModalTask && <ModalTask title="Task Details" taskId={taskId} setTask={setTaskList} tasks={taskList} onClose={() => setShowModalTask(false)} />}
            {showModalBoard && <ModalBoard title="Board Details" onClose={() => setShowModalBoard(false)} />}
        </main>
            :
            <></>
    );
}