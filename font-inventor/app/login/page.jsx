import LoginScreen from "@/components/Auth/LoginScreen";
import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-screen flex bg-slate-800">
      <Image
        width={800}
        height={800}
        src="/images/imageLogin.png"
        alt="background"
        className="object-cover object-center h-screen w-7/12"
      />
      <LoginScreen />
    </div>
  );
}