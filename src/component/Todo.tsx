
import { GiCheckMark } from "react-icons/gi";
import { atom, useRecoilState } from "recoil";
import { dataAtom } from "../atom";
interface dataProps {
    title: string;
    description: string;
    done: boolean;
}
export default  function  Todo({data}: {data:dataProps}) {
     let  mark = "";
     data.done == true ? mark ="text-red-500 font-medium" : mark="text-white font-medium"
      
     const [atomData,setAtomData ] = useRecoilState(dataAtom);
        function changeMark() {
            const updatedData = atomData.map(item => 
                item.title === data.title ? { ...item, done: !item.done } : item
            );
            setAtomData(updatedData);
            localStorage.setItem('todos', JSON.stringify(updatedData));
        }
        function deleteData() {
            const newData = atomData.filter(item => item.title !== data.title);
            setAtomData(newData);
            localStorage.setItem('todos', JSON.stringify(newData));
        }

    return (
        <div className="border-2 m-1 shadow-xl p-2 h-[30%] flex flex-col gap-3">
            <div className="flex items-center justify-around">
                <div className="flex items-center gap-2"><div className="text-xl font-bold">Title</div> : <div>{data.title}</div></div>

                <div><button onClick={changeMark} className="border-2 bg-gray-300 p-1 border-black rounded-lg"><GiCheckMark className={mark} /></button></div>
            </div>
            <div className="flex items-center justify-around">
                <div className="flex  gap-2 w-[60%]"><div className="text-xl font-bold">Description</div> : <div>{data.description}</div></div>
                <div><button onClick={deleteData} className="bg-gray-400 rounded-lg p-2 active:bg-black active:text-white">Delete</button></div>
            </div>
        </div>
    )
}