import {
  Check,
  Eye,
  EyeSlash,
  GameController,
  SketchLogo,
} from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Input } from "./Form/input";
import { useState } from "react";

import showPwdImg from "../images/show-password.svg";
import hidePwdImg from "../images/hide-password.svg";

export function Login() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <form
      className="relative flex flex-col space-y-6 h-[566px] w-[500px] bg-zinc-900 mx-auto mt-[100px] rounded-lg 
     shadow-cyan-800 shadow-lg"
    >
      <div className="flex justify-center">
        <strong className="mt-4 text-2xl text-cyan-400 mb-10">
          Entrar na Diamond
        </strong>
      </div>
      <div className="flex justify-evenly">
        <strong className="pl-2 pr-[80px] text-xl text-cyan-700 ">Nome:</strong>
        <Input id="name" placeholder="Nome" type="text" />
      </div>
      <hr className="relative mx-8 border-y border-cyan-600" />
      <div className="flex justify-evenly">
        <strong className="pl-2 pr-[86px] text-xl text-cyan-700">Email:</strong>
        <Input className="" id="email" placeholder="Email" type="email" />
      </div>
      <hr className="relative mx-8 border-y border-cyan-600" />
      <div className="flex justify-evenly">
        {/* {/* <div className="absolute pt-1">
          <button formAction="none" onClick={() => setShowPassword()}>
            {showPassword ? <Eye size={32} /> : <EyeSlash size={32} />}
          </button>
        </div> */}
        <strong className="pl-2 pr-[48px] text-xl text-cyan-700 ">
          Password:
        </strong>
        <Input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          id="password"
          placeholder="Password"
          type={isRevealPwd ? "text" : "password"}
        />
        <img
          className="absolute w-6 h-6 ml-[390px] mt-2"
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd((prevState) => !prevState)}
        />
      </div>
      <hr className="relative mx-8 border-y border-cyan-600" />
      <div className="pl-8 absolute pt-[365px]">
        <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-700">
          <Checkbox.Indicator>
            <Check className="w-4 h-4 text-emerald-400" />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <div className="flex justify-items-start pl-8">
        <strong className="pl-8 pr-20 text-sm text-cyan-700">
          Inscreva-se para receber e-mails de novidades da Diamond sobre
          produtos, ofertas!
        </strong>
      </div>
      <hr className="relative mx-8 border-y border-cyan-600" />
      <div className="px-12">
        <button
          type="submit"
          className="bg-cyan-700 w-40 px-5 h-12 rounded-md 
          font-semibold flex items-center gap-3 hover:bg-cyan-900"
        >
          <SketchLogo size={24} />
          Login
        </button>
      </div>
      <button></button>
    </form>
  );
}
