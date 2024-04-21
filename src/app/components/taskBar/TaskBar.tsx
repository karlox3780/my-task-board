import Image from "next/image";

type Props = {
    bgColor: string;
    logoColor: string;
    secondLogoColor: string;
    firstLogo: string;
    Text: string;
    Paragraph: string;
    secondLogo: string;
};

export default function TaskBar({ bgColor, logoColor, secondLogoColor, firstLogo, Text, Paragraph, secondLogo }: Props) {
    return (
        <div className={`${bgColor} rounded-[16px] mt-[20px] p-[16px] `}>
            <div className={`flex items-center justify-between`}>
                <div className="flex items-center">
                    {
                        firstLogo.includes("/")
                            ?
                            <div className={`${logoColor} p-[10px] rounded-[8px] mr-[20px]`}>
                                <Image className="h-[20px] w-[20px]" width={20} height={20} src={firstLogo} alt="Clock" />
                            </div>
                            :
                            <div className={`${logoColor} rounded-[8px] mr-[20px]`}>
                                <div className="flex items-center justify-center h-[40px] w-[40px] text-[20px]">
                                    {firstLogo}
                                </div>
                            </div>
                    }
                    <h2 className='text-[20px] font-semibold'>{Text}</h2>
                </div>
                {
                    (secondLogo && secondLogoColor) && <div className={`${secondLogoColor} p-[10px] rounded-[8px]`}>
                        <Image className="" width={20} height={20} src={secondLogo} alt="Time Icon" />
                    </div>
                }
            </div>
            <p className="task-paragraph">{Paragraph}</p>
        </div>
    );
}