import bg from "../assets/gameImages/background-image.jpg"
import station from "../assets/gameImages/platform_crystal_stone.png"
import hero from "../assets/gameImages/hero.png"
import { useEffect, useRef, useState } from "react"
const JumpGame = ()=>{
    const [stage,setStage] = useState(1);
    const [text,setText] = useState("vaishali")

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    
    const refs = [inputRef1,inputRef2,inputRef3,inputRef4]

    const getText = ()=>{
        return "generatedText"+stage
    }

    const startGame = ()=>{
        setStage(1);
        setText(getText());
    }

    const levelUp = ()=>{
        startGame();
    }

    const stageUp = ()=>{
        if (stage == 4){
            levelUp();
            return;
        }
        setStage((pre)=>pre+1);
        setText(getText);
    }
    useEffect(()=>{
           startGame();
    },[])

    useEffect(()=>{
       switch(stage){
        case 1:
            inputRef1.current.focus();
        case 2:
            inputRef2.current.focus();
        case 3:
            inputRef3.current.focus();
        case 4:
            inputRef4.current.focus();
       }
    },[stage])

return(
    <div style={{backgroundImage:`url(${bg})`}} className="h-[100vh] bg-cover bg-center px-[10rem]" >
        <p className="font-semibold text-3xl text-center w-[100%] pt-5">{text}</p>
        <div className="h-[80vh] flex" >
        <div className="w-[25%] h-[100%]" >
            <div className="pt-[160%] flex flex-col items-center relative">
                <input hidden ={stage!=1} onKeyDown={(e)=>{if(e.key == "Enter")stageUp();}} ref={inputRef1} type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-1 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
               {stage==1&&<img src={hero} alt="" className="absolute bottom-[-5%]" />}
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[140%] flex flex-col items-center relative">
                <input onKeyDown={(e)=>{if(e.key == "Enter")stageUp();}} hidden={stage!=2} ref={inputRef2} type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-1 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                {stage==2&&<img src={hero} alt="" className="absolute bottom-[-5%]" />}
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[120%] flex flex-col items-center relative">
                <input onKeyDown={(e)=>{if(e.key == "Enter")stageUp();}} hidden={stage!=3} ref = {inputRef3} type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-1 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                {stage==3&&<img src={hero} alt="" className="absolute bottom-[-5%]" />}
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[100%] flex flex-col items-center relative">
                <input onKeyDown={(e)=>{if(e.key == "Enter")stageUp();}} hidden={stage!=4} ref = {inputRef4} type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-1 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                {stage==4&&<img src={hero} alt="" className="absolute bottom-[-5%]" />}
            </div>
        </div>
        </div>
    </div>
)
}

export default JumpGame;