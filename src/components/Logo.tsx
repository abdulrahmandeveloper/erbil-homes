const Logo = ({ background }: { background: "white" | "black" }) => {
  return (
    <h1
      className={`font-bold text-2xl p-3 ${
        background === "black" ? "text-white" : "text-black"
      }`}
    >
      Erbil<span className="text-emerald-400">Houses</span>
    </h1>
  );
};

export default Logo;
