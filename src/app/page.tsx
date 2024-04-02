import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-[20px] mt-[48px] text-[#030616]">
      <div className="w-[552px]">
        <div className="flex w-full">
          <Image className="mr-[10px]" width={40} height={40} src="/images/Logo.svg" alt="Logo" />
          <h1 className="text-[40px] font-normal mr-[10px]">My Task Board</h1>
          <Image className="" width={25} height={25} src="/images/Edit_duotone.svg" alt="Edit Image" />
        </div>
        <div>
          <h2 className="ml-[50px] text-[16px] text-normal mt-[6px]">Tasks to keep organised</h2>
        </div>
        <div className="flex mt-[40px]">
          <Image className="" width={40} height={40} src="/images/close_ring_duotone-1.svg" alt="Clock" />
          <h2 className="text-[20px] font-semibold">Task in Progress</h2>
          <Image className="" width={40} height={40} src="/images/Time_atack_duotone.svg" alt="Time Icon" />
        </div>
      </div>
    </main>
  );
}
