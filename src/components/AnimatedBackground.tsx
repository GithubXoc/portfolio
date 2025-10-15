const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900"></div>
      <div className="absolute top-[-20%] left-[-20%] w-[40%] h-[40%] bg-accent/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
       <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-pink-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    </div>
  );
};
export default AnimatedBackground;