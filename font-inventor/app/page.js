import LoginScreen from "@/components/Auth/LoginScreen";

export default function Home() {
  return (
    <div class="w-full h-screen flex">
      <img
        // src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        src="/images/imageLogin.png"
        alt="background"
        class="object-cover object-center h-screen w-7/12"
      />

      <LoginScreen />
    </div>
  );
}
