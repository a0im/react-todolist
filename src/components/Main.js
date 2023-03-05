import { Link } from "react-router-dom";
import "./hiddenScroll.css";
export default function Main({weekArr}) {
  const {eng,kor} = weekArr
 
  return(
      <div className="flex flex-wrap  max-h-fit m-[30px] overflow-y-scroll no-scrollbar shadow-inner shadow-slate-400" >
        <h2 className="text-white w-[220px] mx-[10px] block rounded-md bg-[#52c1de] text-[36px] font-bold justify-items-left text-center leading-[150px]  h-[150px] mt-[10px]">
          요일 선택
        </h2>
      {
        eng.map((day , i) =>(
          <p  key={i} className="w-1/2" >
            <Link to={`/week/${day}`} className="hover:bg-[#52c1de] hover:text-white transition ease-in duration-330 rounded-md block text-[36px] justify-items-left text-center leading-[150px] h-[150px] bg-white m-[10px]" >
              {kor[i]}
            </Link>
          </p>
        ))
      }
    </div>
  )
}