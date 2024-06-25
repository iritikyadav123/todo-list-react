import { useRecoilValue } from "recoil"
import { dataAtom } from "../atom"
import Todo from "./Todo";

export default  function  Card() {
    const data = useRecoilValue(dataAtom);
    console.log(data);
    return (
        <div className="static h-[62%] ml-5 md:ml-15 mt-2 w-[90%] border-2 md:w-[60%] lg:w-[40%] scrollbar-webkit scrollbar">
                {data.map((item) => (
                   <Todo key={item.description} data = {item} />
                ))}
        </div>
    )
}