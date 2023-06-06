const Navbar2 = () => {
    return (
        <div className="relative rounded-xl bg-white w-full h-[882px] overflow-hidden text-left text-mini text-white font-roboto">
            <div className="absolute top-[16px] left-[25px] rounded-xl bg-gray-200 w-56 h-[850px]" />
            <img
                className="absolute top-[42px] left-[46px] rounded-[50px] w-[68px] h-[68px] object-cover"
                alt="Avatar"
                loading="lazy"
                src="/rectangle@2x.jpg"
            />
            <a className="absolute top-[52px] left-[122px] text-[24px] font-bold text-[inherit] inline-block w-[109px] h-6 [text-decoration:none]">
                <p className="m-0">Nint#123</p>
                <p className="m-0">&nbsp;</p>
            </a>
            <p className="m-0 absolute top-[84px] left-[122px] text-[13px] font-light inline-block w-[119px] h-[21px]">
                Ninad Trivedi
            </p>
            <img
                className="absolute top-[150px] left-[46px] w-[31px] h-[31px] object-cover"
                alt=""
                src="/image-1@2x.jpg"
            />
            <a className="absolute top-[156px] left-[90px] font-medium text-[inherit] inline-block w-[151px] h-[25px] [text-decoration:none]">
                Private Chats
            </a>
            <a className="absolute top-[203px] left-[90px] font-medium text-[inherit] inline-block w-[151px] h-[25px] [text-decoration:none]">
                Channels
            </a>
            <a className="absolute top-[250px] left-[90px] font-medium text-[inherit] inline-block w-[151px] h-[25px] [text-decoration:none]">
                Settings
            </a>
            <img
                className="absolute top-[190px] left-[46px] w-[31px] h-[31px] object-cover"
                alt=""
                src="/image-6@2x.jpg"
            />
            <img
                className="absolute top-[240px] left-[46px] w-[31px] h-[31px] object-cover"
                alt=""
                src="/image-7@2x.jpg"
            />
        </div>
    );
};

export default Navbar2;
