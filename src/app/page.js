import Image from "next/image";
import bg from "../../public/background/test2.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation/navi";
import Wizard from "@/components//models/Wizard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src = {bg} alt="background-image" fill className="w-full h-full object-cover object-center "/> 

      <div className = "w-full h-screen"> 
        <Navigation>
        </Navigation>  
          
        <RenderModel>
          <Wizard /> 
        </RenderModel>
        
          
        
         {/* navigation and 3d model */}

      </div>
    </main>
  );
}
