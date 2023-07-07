import appleRocket from "../images/apple-rocket.png"
import appleMemoji from "../images/memoji-2.png"
const ChatModule = () => {
    const handleSubmit = () => {
        console.log("I just go clicked")
    }
    return (
        <>
            <div>
                <div
                    className="absolute top-[29px] left-[273px] rounded-xl bg-gainsboro w-[543px] h-[81px]"
                    id="username_header"
                />
                <div className="absolute top-[18px] left-[262px] rounded-xl bg-gray-300 w-[566px] h-[720px] mix-blend-normal" style={{ background: "#171717EB", }} />

                <h4
                    className="m-0 absolute top-[47px] left-[344px] text-[inherit] text-2xl font-bold font-inherit inline-block w-[271px] h-11 mix-blend-normal text-white"
                    id="username"
                >
                    Kiko
                </h4>
                <h2
                    className="m-0 absolute top-[74px] left-[344px] text-[13px] font-thin font-inherit inline-block w-[231px] h-10 text-white"
                    id="name"
                >
                    Kirtan Sheth
                </h2>

                <img
                    className="absolute top-[34px] left-[278px] w-[71px] h-[71px] object-cover"
                    alt=""
                    src={appleMemoji}
                />
                <input
                    className="absolute top-[680px] left-[277px] rounded-3xs w-[470px] h-[49px] text-white p-3 bord  rounded-md"
                    style={{ backgroundColor: "#262626" }}
                    alt=""
                />
                <div className="absolute top-[680px] left-[766px] w-[50px] h-[50px] bg-green-400 rounded-[50%] ">
                    <button onClick={handleSubmit} >
                        <img
                            className="absolute top-[9px] left-[10px] w-[33px] h-[33px] object-cover"
                            alt=""
                            src={appleRocket}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ChatModule;
