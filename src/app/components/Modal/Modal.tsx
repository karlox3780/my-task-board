import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import Image from "next/image";

type Props = {
    onClose: Function;
    title: string;
};

const Modal = ({ onClose, title }: Props) => {
    const icons = ['👨🏻‍💻', '💬', '☕️', '🏋️', '📚', '⏰'];
    const ModalRoot = document.getElementById("modal-root") as HTMLElement;
    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
    };
    const [activeIcon, setActiveIcon] = useState();

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
                        <div className="mt-[16px]">
                            <label className="font-medium text-[12px] text-[#97A3B6]">Task name</label>
                            <input className="w-full border-[1px] border-[#cdd5e0] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3]" type="text" placeholder="Enter a task name" />
                        </div>
                        <div className="mt-[20px]">
                            <label className="font-medium text-[12px] text-[#97A3B6]">Description</label>
                            <textarea className="w-full h-[200px] border-[1px] border-[#cdd5e0] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3] resize-none" placeholder="Enter a short description"></textarea>
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
                        </div>
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