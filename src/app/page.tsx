import { MainLayout } from "@/layouts";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout title={""}  >
      <div className="flex flex-col gap-7 justify-center items-center">
        <h1 className="text-[20px] font-bold text-cian-blue">Identificación de Homero Simpson</h1>
              
        <div className=" flex flex-col gap-5 content-center">
          <div className="bg-homer-blue w-[500px] h-[400px] rounded-md p-5 border-2 border-black">
            <h1 className="text-black text-center text-[35px] mb-4 font-bold tracking-[15px]">MEXICO</h1>
            
            <div className="flex gap-4">
              <div className="flex-col mb-4">

                <Image
                  src="/assets/FotoHomero.jpg"
                  alt="Foto de Homero"
                  width={180} height={134}
                  className="border-2 border-black"
                  sizes="100vw"
                />
              </div>

              <div className="flex-col">
                <h1 className="text-black text-[30px] font-courier font-bold">HOMER SANCHEZ</h1>
                <h1 className="text-black text-[15px]">NAME</h1>
                <h1 className="text-black text-[30px] font-courier font-bold">MEXICANA</h1>
                <h1 className="text-black text-[15px]">NATIONALITY</h1>
                <h1 className="text-black text-[30px] font-courier font-bold">20 MARCH</h1>
                <h1 className="text-black text-[15px]">DATE OF ISSUE</h1>
                <h1 className="text-black text-[30px] font-courier font-bold">MEXICO</h1>
                <h1 className="text-black text-[15px]">AUTHORITY</h1>

              </div> 
            </div> 

          </div>
        </div>
        
      </div>
    </MainLayout>
  );
}
