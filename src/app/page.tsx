import Image from "next/image";
import TaskBar from "@/components/taskBar/TaskBar";

export default function Home() {
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
        <TaskBar
          bgColor="bg-[#F5D565]"
          logoColor="bg-[#f8fafc]"
          secondLogoColor="bg-[#E9A23B]"
          firstLogo="/images/reloj.png"
          Text={<h2 className='text-[20px] font-semibold'>Task in Progress</h2>}
          secondLogo="/images/Time_atack_duotone.svg" />
        <TaskBar
          bgColor="bg-[#A0ECB1]"
          logoColor="bg-[#f8fafc]"
          secondLogoColor="bg-[#32D657]"
          firstLogo="/images/levantamiento-de-pesas.png"
          Text={<h2 className='text-[20px] font-semibold'>Task Completed</h2>}
          secondLogo="/images/done_round_duotone.svg" />
        <TaskBar
          bgColor="bg-[#F7D4D3]"
          logoColor="bg-[#f8fafc]"
          secondLogoColor="bg-[#DD524C]"
          firstLogo="/images/cafe.png"
          Text={<h2 className='text-[20px] font-semibold'>Task Won’t Do</h2>}
          secondLogo="/images/close_ring_duotone.svg"
        />
        <TaskBar
          bgColor="bg-[#E3E8EF]"
          logoColor="bg-[#f8fafc]"
          secondLogoColor=""
          firstLogo="/images/pila-de-libros.png"
          Text={<h2 className='text-[20px] font-semibold'>Task To Do</h2>}
          secondLogo=""
        />
        <TaskBar
          bgColor="bg-[#F5E8D5]"
          logoColor="bg-[#E9A23B]"
          secondLogoColor=""
          firstLogo="/images/Add_round_duotone.svg"
          Text={<h2 className='text-[20px] font-semibold'>Add new task</h2>}
          secondLogo=""
        />
      </div>
    </main>
  );
}