import Image from "next/image";
import { ReactNode } from "react";

type Props = {
    bgColor: string;
    logoColor: string;
    secondLogoColor: string;
    firstLogo: string;
    Text: ReactNode;
    secondLogo: string;
};

export default function TaskBar({ bgColor, logoColor, secondLogoColor, firstLogo, Text, secondLogo }: Props) {
    return (
        <div className={`flex p-[16px] rounded-[16px] mt-[20px] ${bgColor} items-center justify-between`}>
            <div className="flex items-center">
                <div className={`${logoColor} p-[10px] rounded-[8px] mr-[20px]`}>
                    <Image className="h-[20px] w-[20px]" width={20} height={20} src={firstLogo} alt="Clock" />
                </div>
                {Text}
            </div>
            {
                (secondLogo && secondLogoColor) && <div className={`${secondLogoColor} p-[10px] rounded-[8px]`}>
                    <Image className="" width={20} height={20} src={secondLogo} alt="Time Icon" />
                </div>
            }
        </div>
    );
}