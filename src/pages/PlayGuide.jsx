import { NavLink } from "react-router";
import bg from "../assets/gameImages/background-image.jpg"
const PlayGuide = ()=>{
    return(
        <div style={{backgroundImage:`url(${bg})`}} className="w-[100%] h-[100vh] flex flex-col gap-2 justify-center items-center">
             <p className="text-3xl font-semibold text-blue-700">HOW TO PLAY?</p>
             <p className="text-xl font-semibold text-blue-600">This is a simple Typing Game To play it Follow the steps</p>
             <ul className="p-10 border-2 border-blue-900 text-blue-900 bg-white/20 list-disc rounded-lg shadow-lg text-lg font-semibold text h-[65vh] overflow-y-auto">
                <li>Go to <NavLink to="/" className="text-blue-500 underline">Home</NavLink>.</li>
                <li>Click on Play Button.</li>
                <li>On the game page you will see 4 stages for the current level.</li>
                <li>To complete First level you need to pass all 4 stages.</li>
                <li>To complete a statge Enter The target text (showing on the top) in the input box and press enter.</li>
                <li>If you entered the correct text than you will reach next stag otherwise you will lose one life.</li>
                <li>Once you will complete all 4 stages you will reach next level</li>
                <li>Complete All stages in the same way to reach higher levels</li>
                <li>The score will be calculated as 10 (for each level)+(10% of speed at the time of completing the level)</li>
                <li>Score will be rounded off to the nearest integer</li>
                <li>difficulty will increase based on the increasing levels</li>
             </ul>
        </div>
    )
}

export default PlayGuide;