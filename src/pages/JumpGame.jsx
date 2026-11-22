import bg from "../assets/gameImages/background-image.jpg"
import station from "../assets/gameImages/platform_crystal_stone.png"
import hero from "../assets/gameImages/hero.png"
import { useEffect, useRef, useState } from "react"
import { generate } from "random-words"
const JumpGame = ()=>{
    const [stage,setStage] = useState(1);
    const [text,setText] = useState([])
    const [level,setLevel] = useState(1)
    const [input,setInput] = useState("")
    const [score,setScore] = useState(0);
    const [accuracy,setAccuracy] = useState(100)

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const inputParaRef = useRef(null)


    const getText = ()=>{
        if (level<=2){
        return generate({
            minLength:level,
            maxLength:level+4,
            exactly:1
        })
    }else{
        const words = generate({
            minLength:1,
            maxLength: 12,
            exactly:level - 1
        })
        return words
    }
    }

    const checkInput = ()=>{
        const isCorrectInput = input.trim(" ") === text.join(" ");
        return isCorrectInput
    }

    const calculateScore = ()=>{
        return;
    }

    const calculateAccuracy = ()=>{
        return
    }

    const startGame = ()=>{
        setStage(1);
        setInput("")
        setText(getText());
    }

    const levelUp = ()=>{
        setLevel(pre=>pre+1)
        const scr = calculateScore();
        setScore(scr)
        startGame();
    }

    const stageUp = ()=>{
        if(!checkInput()){
            alert("your input does not metch with target please check in in the top box and correct")
            return;
        }
        if (stage == 4){
            levelUp();
            return;
        }
        console.log(text)
        setStage((pre)=>pre+1);
        setInput("")
        setText(getText());
    }
    useEffect(()=>{
           startGame();
    },[])

    const scrollToSpan = (idx)=>{
        const container = inputParaRef.current
        const element = container.querySelector(`#word-${idx}`)
        if (!element) return;
        container.scrollTo({
            top: element.offsetTop - container.offsetTop,
            behavior: "smooth"
        })
    }

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

    useEffect(()=>{
        const lastIndex = input.split(" ")?.length-1
        scrollToSpan(lastIndex)
        const acr = calculateAccuracy();
        setAccuracy(acr)
    },[input])

return(
    <div style={{backgroundImage:`url(${bg})`}} className="h-[100vh] bg-cover bg-center px-[10rem]" >
        <div className="flex justify-between items-center">
            <div>
                <p className="text-xl font-semibold">LEVEL: {level}</p>
                <p className="text-xl font-semibold">STAGE: {stage}</p>
            </div>
            <p ref={inputParaRef} className="bg-white/20 text-justify rounded-lg font-bold w-[70%] text-xl text-center p-1 mt-4 h-[5rem] overflow-y-auto hide-scrollbar">{text.map((w,i)=>{
            const currWord = input?.split(" ")?.[i];
            const isCorrect = currWord == w
            const isTypingWord = input?.split(" ").length == i+1
            return(
                <span className={`${isCorrect?"text-blue-500":(currWord || currWord=="") && !isTypingWord?"text-red-500":""}`} id={`word-${i}`}>{w} </span>
            )
            })}</p>
            <div>
                <p className="text-xl font-semibold">SCORE: {score}</p>
                <p className="text-xl font-semibold">ACCURACY: {accuracy}</p>
            </div>
        </div>
        <div className="h-[80vh] flex" >
        <div className="w-[25%] h-[100%]" >
            <div className="pt-[160%] flex flex-col items-center relative">
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} hidden ={stage!=1} onKeyDown={(e)=>{if(e.key == "Enter")stageUp();}} ref={inputRef1} type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-1 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
               {stage==1&&<img src={hero} alt="" className="absolute bottom-[-5%]" />}
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[140%] flex flex-col items-center relative">
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>{if(e.key == "Enter")stageUp();}} hidden={stage!=2} ref={inputRef2} type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-1 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                {stage==2&&<img src={hero} alt="" className="absolute bottom-[-5%]" />}
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[120%] flex flex-col items-center relative">
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>{if(e.key == "Enter")stageUp();}} hidden={stage!=3} ref = {inputRef3} type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-1 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                {stage==3&&<img src={hero} alt="" className="absolute bottom-[-5%]" />}
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[100%] flex flex-col items-center relative">
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>{if(e.key == "Enter")stageUp();}} hidden={stage!=4} ref = {inputRef4} type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-1 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                {stage==4&&<img src={hero} alt="" className="absolute bottom-[-5%]" />}
            </div>
        </div>
        </div>
    </div>
)
}

export default JumpGame;