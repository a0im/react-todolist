import { MdCheckBoxOutlineBlank, MdCheckBox,  } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";

function TodoListItem({ todo, onRemove, onToggle }) {
  const { id, text, checked, date } = todo;

  return (
    <div className="flex bg-white mb-[15px] p-[10px] justify-between">
      <div className="flex text-[30px]" onClick={() => onToggle(id)}>
        {checked 
        ? <MdCheckBox className="text-[#52c1de]"/> 
        : <MdCheckBoxOutlineBlank />}
        <div className={`text-[20px] ml-[30px] relative
        ${checked ?'checked' : 'visible'}`}>{text}</div>
      </div>
        <time className="text-[16px] leading-[30px] text-gray-400 ml-auto mr-[40px]">{date}</time>
      <div className="text-[30px]" onClick={() => onRemove(id)}>
        <HiXMark />
      </div>
    </div>
  );
}

export default TodoListItem;
