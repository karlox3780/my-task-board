import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import Image from "next/image";

type Props = {
    onClose: Function;
    title: string;
};

const Modal = ({ onClose, title }: Props) => {
    const ModalRoot = document.getElementById("modal-root") as HTMLElement;
    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="modal-overlay">
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        {title && <h1 className="font-semibold">{title}</h1>}
                        <a className="border p-[8px] rounded-[8px]" href="#" onClick={handleCloseClick}>
                            <Image width="20" height="20" src="/images/close_ring_duotone-1.svg" alt="Close Icon" />
                        </a>
                    </div>
                    <div className="modal-body">
                        <div>
                            <label className="font-medium text-[12px]">Task name</label>
                            <input className="w-full border-[1px] border-[#cdd5e0] rounded-[8px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3]" type="text" placeholder="Enter a task name" />
                        </div>
                        <div>
                            <label className="font-medium text-[12px]">Description</label>
                            <textarea className="w-full border-[1px] border-[#cdd5e0] rounded-[8px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3]" placeholder="Enter a short description"></textarea>
                        </div>
                        <div></div>
                        <div></div>
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