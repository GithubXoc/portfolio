interface NavDotsProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const sections = ['Home', 'About', 'Projects', 'Contact'];

const NavDots: React.FC<NavDotsProps> = ({ activeIndex, setActiveIndex }) => {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <ul className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <li key={section}>
            <button
              onClick={() => setActiveIndex(index)}
              className="relative flex items-center group"
            >
              <span
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-accent border-accent scale-125'
                    : 'bg-transparent border-gray-400 group-hover:border-accent'
                }`}
              ></span>
              <span className={`absolute right-full mr-4 px-2 py-1 bg-gray-800 text-accent text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
                {section}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavDots;