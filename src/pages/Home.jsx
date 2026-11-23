import { NavLink } from "react-router"
import bg from "../assets/gameImages/background-image.jpg"

const Home = ()=>{
    return(
        <div className="w-[100%] h-[100vh] flex flex-col gap-4 justify-center items-center" style={{backgroundImage:`url(${bg})`}}>
            <NavLink className="text-xl font-bold text-blue-500 hover:scale-105 transaction-transform duration-300 bg-white p-2 rounded-lg shadow-lg w-[25%] text-center" to="/play">PLAY</NavLink>
            <NavLink className="text-xl font-bold text-blue-500 hover:scale-105 transaction-transform duration-300 bg-white p-2 rounded-lg shadow-lg w-[25%] text-center" to="/play-guide">HOW TO PLAY</NavLink>
            <NavLink className="text-xl font-bold text-blue-500 hover:scale-105 transaction-transform duration-300 bg-white p-2 rounded-lg shadow-lg w-[25%] text-center" to="/about">ABOUT</NavLink>
        </div>
    )
}

export default Home