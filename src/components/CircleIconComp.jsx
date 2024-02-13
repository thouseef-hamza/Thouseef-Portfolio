import { AiOutlineUser } from "react-icons/ai";

const CircleIconComp = ({filled,onClick}) => {
  return (
    <>
        <div
          onMouseEnter={onClick}
          onMouseLeave={() => onClick(false)}
          className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
        >
          thousi
        </div>
    </>
  );
}

export default CircleIconComp