import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const Landing = () => {
    return (
        <div className="relative rounded-xl bg-white w-full h-[882px] overflow-hidden text-left text-5xl text-black font-inter">
            <TextField
                className="[border:none] bg-[transparent] absolute top-[342px] left-[373px]"
                sx={{ width: 310 }}
                color="primary"
                variant="filled"
                type="text"
                name="Email"
                label="Email"
                placeholder="Email"
                size="medium"
                margin="none"
            />
            <TextField
                className="[border:none] bg-[transparent] absolute top-[446px] left-[373px]"
                sx={{ width: 310 }}
                color="primary"
                variant="filled"
                type="text"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility">
                                <Icon>visibility</Icon>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                name="Password"
                label="Password"
                placeholder="Password"
                size="medium"
                margin="none"
            />
            <div className="absolute top-[302px] left-[410px] font-light inline-block w-[318px] h-7">
                Email
            </div>
            <img
                className="absolute top-[303px] left-[380px] w-[30px] h-[29px] object-cover"
                alt="mail box"
                src="/image-14@2x.png"
            />
            <h4 className="m-0 absolute top-[405px] left-[415px]" />
            <img
                className="absolute top-[405px] left-[380px] w-[30px] h-[30px] object-cover"
                alt="Key"
                src="/image-13@2x.png"
            />
            <a className="[text-decoration:none] absolute top-[529px] left-[436px] font-light text-[inherit] inline-block w-[265px] h-[51px]">
                or Sign Up !!!!!!
            </a>
            <h2 className="m-0 absolute top-[204px] left-[380px] text-[48px] font-normal font-motley-forces text-mediumspringgreen inline-block w-[341px] h-[73px] mix-blend-multiply">
                Communify
            </h2>
            <img
                className="absolute top-[209px] left-[625px] w-9 h-[41px] object-cover"
                alt="technologist"
                src="/image-15@2x.png"
            />
            <img
                className="absolute top-[0px] left-[0px] w-[1224px] h-[938px] object-cover opacity-[0.1]"
                alt="background"
                src="/emojiffffff960x5402x-1@2x.png"
            />
        </div>
    );
};

export default Landing;
