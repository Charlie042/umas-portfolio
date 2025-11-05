type MenuBarProps = {
  onClick: () => void;
};

const MenuBar = ({ onClick }: MenuBarProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-end gap-[6px] cursor-pointer"
    >
      <span className="w-7 h-0.5 bg-black rounded-full"></span>
      <span className="w-6 h-0.5 bg-black rounded-full"></span>
      <span className="w-5 h-0.5 bg-black rounded-full"></span>
    </div>
  );
};

export default MenuBar;
