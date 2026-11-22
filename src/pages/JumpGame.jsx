import bg from "../assets/gameImages/background-image.jpg"
import station from "../assets/gameImages/platform_crystal_stone.png"
import hero from "../assets/gameImages/hero.png"
const JumpGame = ()=>{
return(
    <div style={{backgroundImage:`url(${bg})`}} className="h-[100vh] bg-cover bg-center px-[10rem]">
        <div className="h-[100vh] flex">
        <div className="w-[25%] h-[100%]">
            <div className="pt-[160%] flex flex-col items-center relative">
                <input type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-2 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                <img src={hero} alt="" className="absolute bottom-[-5%]" />
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[140%] flex flex-col items-center relative">
                <input type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-2 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                <img src={hero} alt="" className="absolute bottom-[-5%]" />
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[120%] flex flex-col items-center relative">
                <input type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-2 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                <img src={hero} alt="" className="absolute bottom-[-5%]" />
            </div>
        </div>
        <div className="w-[25%] h-[100%]">
            <div className="pt-[100%] flex flex-col items-center relative">
                <input type="text" className="border border-zinc-200 rounded-lg shadow-lg bg-white font-bold text-lg p-2 w-[70%] text-center absolute bottom-[-28%] h-[2.5rem]" />
                <img src={station} alt="" className="w-[85%] absolute bottom-[-15%]" />
                <img src={hero} alt="" className="absolute bottom-[-5%]" />
            </div>
        </div>
        </div>
    </div>
)
}

export default JumpGame;