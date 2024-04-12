import React, { useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import './Modal.css';

type Props = {
    onClose: Function;
    title: string;
};

const Modal = ({ onClose, title }: Props) => {
    const icons = ['👨🏻‍💻', '💬', '☕️', '🏋️', '📚', '⏰'];
    const status = [
        { icon: '/images/Time_atack_duotone.svg', label: 'In Progress', color: '#E9A23B' },
        { icon: '/images/Done_round_duotone.svg', label: 'Completed', color: '#32D657' },
        { icon: '/images/close_ring_duotone.svg', label: "Won't do", color: '#DD524C' },
    ];
    const ModalRoot = document.getElementById("modal-root") as HTMLElement;
    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
    };
    const [activeIcon, setActiveIcon] = useState();

    const [formState, setFormState] = useState({
        taskName: "",
        description: ""
    });

    function handleChange(e: any) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log(formState);
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        let formData = new FormData();

        for (let [key, value] of Object.entries(formState)) {
            formData.append(key, value);
        }
        console.log(formData);
    }
    const modalContent = (
        <div className="modal-overlay">
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
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
                                    name="taskName" type="text" placeholder="Enter a task name" onChange={handleChange} required />
                            </div>
                            <div className="mt-[20px]">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Description</label>
                                <textarea className="w-full h-[200px] border-[1px] border-[#cdd5e0] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3] resize-none"
                                    name="description" placeholder="Enter a short description" onChange={handleChange}></textarea>
                            </div>
                            <div className="mt-[20px]">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Icon</label>
                                <div className="flex gap-[12px]">
                                    {
                                        icons.map((icon, index) => (
                                            <span key={icon}>
                                                <input type="radio" id={"icon-button" + index} name="icon-button" value={icon} className="hidden peer" />
                                                <label htmlFor={"icon-button" + index}
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
                                            <input type="radio" id={"status-button" + index} name="status-button" value={status.label} className="hidden peer/status" />
                                            <label htmlFor={"status-button" + index} className="w-full flex p-[2px] items-center justify-between cursor-pointer rounded-[12px] border border-[#e3e8ef] peer-checked/status:border-[#3662E3]">
                                                <div className="flex items-center">
                                                    <div className={"p-[10px] rounded-[12px] mr-[10px] bg-[" + status.color + "]"}>
                                                        <Image width="20" height="20" src={status.icon} alt="Status Icon" />
                                                    </div>
                                                    <label className="cursor-pointer" htmlFor={"status-button" + index}>{status.label}</label>
                                                </div>
                                                <label htmlFor={"status-button" + index} className="bg-[#3662E3] rounded-[50%] mr-[10px] hidden done-icon cursor-pointer">
                                                    <Image width="20" height="20" src="/images/Done_round.svg" alt="Status Icon" />
                                                </label>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bottom-buttons flex justify-end mt-[100px] text-[#fff]">
                                <button className="bg-[#97A3B6] flex px-[30px] py-[10px] rounded-[22px] mr-[16px] cursor-pointer">
                                    <label className="mr-[5px] text-[14px] cursor-pointer">Delete</label>
                                    <Image width="20" height="20" src="/images/Trash.svg" alt="Status Icon" />
                                </button>
                                <button className="bg-[#3662E3] flex px-[30px] py-[10px] rounded-[22px] cursor-pointer">
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