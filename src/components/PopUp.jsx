const PopUp = ({text1="text1",text2="text2",setShowPopup=()=>{},triggerFunction=()=>{},headingStyle="",ShowCancel = true})=>{
    return(
        <div className="fixed w-[100%] h-[100vh] bg-black/50 flex justify-center items-center z-[999]">
            <div className="w-[25rem] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                <div className="p-4 mb-4 flex flex-col gap-5">
                  <p className={`text-2xl font-semibold text-center ${headingStyle}`}>{text1}</p>
                  <p className="text-lg text-center">{text2}</p>
                </div>
                <div className="flex justify-center gap-8 px-2 w-[100%]">
                    {ShowCancel&&<button onClick={()=>setShowPopup(false)} className=" w-[5rem] border-2 border-blue-500 rounded-lg text-lg text-blue-500 bg-white font-semibold cursor-pointer p-2 shagow-lg">Cancel</button>}
                    <button onClick={triggerFunction} className="w-[5rem] bg-blue-500 text-white text-lg p-2 font-semibold rounded-lg shadow-lg cursor-pointer">Ok</button>
                </div>

            </div>
        </div>
    )
}
export default PopUp;