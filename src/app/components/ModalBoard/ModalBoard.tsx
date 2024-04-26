import { useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

type Props = {
    setBoardDetail: any,
    boardDetail: any,
    onClose: Function;
    title: string;
};

const ModalBoard = ({ setBoardDetail, boardDetail, onClose, title }: Props) => {
    const ModalRoot = document.getElementById("modal-root") as HTMLElement;
    const [formState, setFormState] = useState({
        title: boardDetail.length > 0 ? boardDetail[0].title : "",
        description: boardDetail.length > 0 ? boardDetail[0].description : "",
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
        setBoardDetail([formState]);
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
                                <label className="font-medium text-[12px] text-[#97A3B6]">Board Title</label>
                                <input className="w-full border-[1px] border-[#cdd5e0] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3]"
                                    name="title" type="text" placeholder="Enter a board title" defaultValue={boardDetail.length > 0 ? boardDetail[0].title : ""} onChange={handleChange} required />
                            </div>
                            <div className="mt-[20px]">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Board Description</label>
                                <input className="w-full border-[1px] border-[#cdd5e0] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3]"
                                    name="description" type="text" placeholder="Enter a board description" defaultValue={boardDetail.length > 0 ? boardDetail[0].description : ""} onChange={handleChange} required />
                            </div>
                            <div className="bottom-buttons flex justify-end mt-[100px] text-[#fff]">
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

export default ModalBoard;