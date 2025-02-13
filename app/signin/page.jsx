"use client";

import { useRouter } from "next/navigation";

export default function Login() {
      const router = useRouter();
    
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white flex items-center justify-center flex-col gap-10 p-10 rounded-lg text-center w-1/2">

        <div className="flex justify-center mb-2">
        <img src="/logo.png" className="w-12 h-12" />
        </div>

        <h2 className="text-3xl drop-shadow-xs font-semibold">
          Capture your life one dot at a time—track your days, uncover
          patterns, and reflect on your journey with ease and simplicity.
        </h2>

        <button onClick={()=>router.push("/birth")} className="border-2 border-gray-400 text-[#624504] bg-[#FEF6E4] flex items-center justify-center gap-2 px-20 py-3 rounded-md  hover:bg-[#fce8f0] transition">
          <img src="/google.png" alt="Google" className="w-5 h-5" />
          <span className=" font-medium">Continue with GOOGLE</span>
        </button>
      </div>
    </div>
  );
}
