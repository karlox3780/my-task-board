"use client";
import Image from "next/image";
import TaskBar from "../../components/taskBar/TaskBar";
import Modal from "../../components/Modal/Modal";
import { defaultTasks } from "../../utils/defaultTasks";
import { elementsTaskStyle } from "../../utils/elementsTaskStyle";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Page({ params }: any) {
    const [showModal, setShowModal] = useState(false);
    const [taskList, setTaskList] = useLocalStorage('tasks', []);
    let tasks;

    if (!taskList?.length) tasks = defaultTasks;
    else tasks = JSON.parse(taskList);
    
    return (
        <main className="flex flex-col items-center justify-between p-[20px] mt-[48px] text-[#030616]">
            <div className="w-[552px]">
                <div className="flex w-full">
                    <Image className="mr-[10px]" width={40} height={40} src="/images/Logo.svg" alt="Logo" />
                    <h1 className="text-[40px] font-normal mr-[10px]">My Task Board</h1>
                    <Image className="" width={25} height={25} src="/images/Edit_duotone.svg" alt="Edit Image" />
                </div>
                <div className="mb-[40px]">
                    <h2 className="ml-[50px] text-[16px] text-normal mt-[6px]">Tasks to keep organised</h2>
                </div>
                {
                    tasks.map((task: any) => (
                        <TaskBar
                            key={task.id}
                            bgColor={elementsTaskStyle(task.status, "bgColor")}
                            logoColor="bg-[#f8fafc]"
                            secondLogoColor={elementsTaskStyle(task.status, "secondLogoColor")}
                            firstLogo={task.icon}
                            Text={task.title}
                            Paragraph={task.description}
                            secondLogo={elementsTaskStyle(task.status, "secondLogo")} />
                    ))
                }
                <div className="cursor-pointer" onClick={() => setShowModal(true)}>
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
            {showModal &&
                <Modal title="Task Details" onClose={() => setShowModal(false)} />
            }
        </main>
    );
}