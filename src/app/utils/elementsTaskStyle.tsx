export function elementsTaskStyle(status: string, type: string) {
    let elementStyle = "";
    switch (status) {
        case "In Progress":
            if (type === "bgColor") { elementStyle = "bg-[#F5D565]"; } else if (type === "secondLogoColor") { elementStyle = "bg-[#E9A23B]"; }
            else { elementStyle = "/images/Time_atack_duotone.svg"; }
            break;
        case "Completed":
            if (type === "bgColor") { elementStyle = "bg-[#A0ECB1]"; } else if (type === "secondLogoColor") { elementStyle = "bg-[#32D657]"; }
            else {
                elementStyle = "/images/done_round_duotone.svg";
            }
            break;
        case "Won't do":
            if (type === "bgColor") { elementStyle = "bg-[#F7D4D3]"; } else if (type === "secondLogoColor") { elementStyle = "bg-[#DD524C]"; }
            else {
                elementStyle = "/images/done_round_duotone.svg";
            }
            break;
        default:
            if (type === "bgColor") { elementStyle = "bg-[#E3E8EF]"; } else if (type === "secondLogoColor") { elementStyle = ""; }
            else {
                elementStyle = "";
            }
            break;
    }
    return elementStyle;
}