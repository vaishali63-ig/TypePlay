import { NavLink } from "react-router";
import bg from "../assets/gameImages/background-image.jpg"

const About = ()=>{
    return(
        <div style={{backgroundImage:`url(${bg})`}} className="h-[100vh] w-[100%] flex gap-2 flex-col justify-center items-center">
            <p className="text-3xl font-semibold text-blue-700">ABOUT TYPE-PLAY</p>
            <p className="text-xl font-semibold text-blue-600">Welcome to TYPE-PLAY</p>
            <div className="p-4 w-[60%] bg-white/20 rounded-lg shadow-lg border-2 border-blue-900 text-blue-900 text-lg font-semibold">
                <p>Type-Play is a fun typing gmae to improve typing speed. I have made this game to make typing practic more interesting through different stages</p>
                <p>Typing is a importent skill but practicing it dosen't have to be boring. Type-Play makes learning and improving your typing skills a little more fun</p>
                <p>Ready To Play? <NavLink to="/" className="text-black underline">let's go</NavLink></p>
            </div>
        </div>
    )
}

export default About;