import './Modal.css';
import React, { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import ReactDOM from "react-dom";
import Image from "next/image";

type Props = {
    taskId: string;
    setTask: any;
    tasks: any;
    onClose: Function;
    title: string;
};

const Modal = ({ taskId, setTask, tasks, onClose, title }: Props) => {
    const ModalRoot = document.getElementById("modal-root") as HTMLElement;
    let editTask: any[] = [];
    taskId !== "" ? editTask = tasks.filter((task: any) => task.id === taskId) : editTask = []
    const icons = ['👨🏻‍💻', '💬', '☕️', '🏋️', '📚', '⏰'];
    const status = [
        { icon: '/images/Time_atack_duotone.svg', label: 'In Progress', color: '#E9A23B' },
        { icon: '/images/Done_round_duotone.svg', label: 'Completed', color: '#32D657' },
        { icon: '/images/close_ring_duotone.svg', label: "Won't do", color: '#DD524C' },
    ];
    const [formState, setFormState] = useState({
        id: editTask.length > 0 ? editTask[0].id : uuid(),
        icon: editTask.length > 0 ? editTask[0].icon : "",
        title: editTask.length > 0 ? editTask[0].title : "",
        description: editTask.length > 0 ? editTask[0].description : "",
        status: editTask.length > 0 ? editTask[0].status : ""
    });
    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
    };
    function handleChange(e: any) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        let taskEdit = "";
        if (editTask.length > 0) {
            taskEdit = tasks.map((task: any) => {
                if (task.id === editTask[0].id) {
                    return formState;
                } else {
                    return task;
                }
            });
            setTask(taskEdit);
        }
        else {
            setTask([...tasks, formState]);
        }
        onClose();
    }
    const handleDelete = (e: any) => {
        e.preventDefault();
        setTask(tasks.filter((task: any) => task.id !== taskId));
        onClose();
    }
    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        {title && <h1 className="font-semibold">{title}</h1>}
                        <a className="border p-[8px] rounded-[12px]" href="#" onClick={handleCloseClick}>
                            <Image width="20" height="20" src="/images/close_ring_duotone-1.svg" alt="Close Icon" />
                        </a>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mt-[16px]">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Task name</label>
                                <input className="w-full border-[1px] border-[#cdd5e0] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3]"
                                    name="title" type="text" placeholder="Enter a task name" defaultValue={editTask.length > 0 ? editTask[0].title : ""} onChange={handleChange} required />
                            </div>
                            <div className="mt-[20px]">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Description</label>
                                <textarea className="w-full h-[200px] border-[1px] border-[#cdd5e0] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3] resize-none"
                                    name="description" placeholder="Enter a short description" defaultValue={editTask.length > 0 ? editTask[0].description : ""} onChange={handleChange}></textarea>
                            </div>
                            <div className="mt-[20px]">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Icon</label>
                                <div className="flex gap-[12px]">
                                    {
                                        icons.map((icon, index) => (
                                            <span key={icon}>
                                                <input type="radio" id={"icon" + index} name="icon" value={icon} onChange={handleChange} defaultChecked={editTask.length > 0 ? editTask[0].icon === icon : formState.icon === icon} className="hidden peer" />
                                                <label htmlFor={"icon" + index}
                                                    className="w-[44px] h-[44px] flex justify-center items-center mt-[6px] text-[20px] rounded-[12px] bg-[#e3e8ef] cursor-pointer peer-checked:bg-[#F5D565]">
                                                    {icon}
                                                </label>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Status</label>
                                <div className="grid grid-cols-2 gap-x-[16px] gap-y-[6px] w-full">
                                    {status.map((status, index) => (
                                        <div className="cursor-pointer" key={index}>
                                            <input type="radio" id={"status" + index} name="status" value={status.label} onChange={handleChange} defaultChecked={editTask.length > 0 ? editTask[0].status === status.label : formState.status === status.label} className="hidden peer/status" />
                                            <label htmlFor={"status" + index} className="w-full flex p-[2px] items-center justify-between cursor-pointer rounded-[12px] border border-[#e3e8ef] peer-checked/status:border-[#3662E3]">
                                                <div className="flex items-center">
                                                    <div className={"p-[10px] rounded-[12px] mr-[10px] bg-[" + status.color + "]"}>
                                                        <Image width="20" height="20" src={status.icon} alt="Status Icon" />
                                                    </div>
                                                    <label className="cursor-pointer" htmlFor={"status" + index}>{status.label}</label>
                                                </div>
                                                <label htmlFor={"status" + index} className="bg-[#3662E3] rounded-[50%] mr-[10px] hidden done-icon cursor-pointer">
                                                    <Image width="20" height="20" src="/images/Done_round.svg" alt="Status Icon" />
                                                </label>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bottom-buttons flex justify-end mt-[100px] text-[#fff]">
                                <button className="bg-[#97A3B6] flex px-[30px] py-[10px] rounded-[22px] mr-[16px] cursor-pointer" onClick={handleDelete}>
                                    <label className="mr-[5px] text-[14px] cursor-pointer">Delete</label>
                                    <Image width="20" height="20" src="/images/Trash.svg" alt="Status Icon" />
                                </button>
                                <button className="bg-[#3662E3] flex px-[30px] py-[10px] rounded-[22px] cursor-pointer" onClick={handleSubmit}>
                                    <label className="mr-[5px] text-[14px] cursor-pointer">Save</label>
                                    <Image width="20" height="20" src="/images/Done_round.svg" alt="Status Icon" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        ModalRoot, null
    );
};

export default Modal;