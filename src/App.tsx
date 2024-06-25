import { useEffect, useState } from "react";
import Button from "./component/Button";
import Input from "./component/Input";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {dataAtom} from './atom.ts'
import Card from "./component/Card.tsx";

 interface todoData {
  title: string;
  description: string;
  done: boolean
 }

export default function App() {
  const [data, setData] = useState<todoData>({
    title: "",
    description: "",
    done: false
  })
     
    const atomData = useSetRecoilState(dataAtom);
    const atomValue = useRecoilValue(dataAtom)

    const handleCreateTodo = () => {
      if(data.title == "" || data.description == "") {
        return ;
      }
      atomData(prevValue => [...prevValue, data]);
      setData({ title: "", description: "", done: false })
      localStorage.setItem('todos', JSON.stringify(atomValue));
      
    };


    useEffect(()=>{
      const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    if (storedTodos.length > 0) {
      console.log(storedTodos);
      atomData(storedTodos);
    }

    },[])
  return (
    <div className="h-screen flex justify-center items-end">
      <div className="overflow-hidden h-[80%] w-[90%] border-2 rounded-lg">
        <div className="text-center text-2xl font-bold mt-4">To-do List</div>
        <div className="flex  flex-col justify-center gap-4 mt-4 sm:ml-[10%] sm:mr-[10%] md:ml-[20%] md:mr-[20%] ">

          <div className="flex items-center ml-5 justify-around">
            <div className="text-xl font-medium">Title</div>
            <Input value={data.title} placeholder="Title" onChange={
                (e)=> {
                  setData({...data, title: e.target.value});
                }
            }/>
          </div>
          <div className="flex items-center justify-around mr-3">
            <div className="text-xl font-medium">Description</div>
            <Input value={data.description} placeholder="Description" onChange={(e)=>{
               setData({...data, description: e.target.value});
            }}/>
          </div>
          <div className="w-[100%] text-center">
          <Button  value="Create Todo" onClick={handleCreateTodo}
          className="bg-blue-600 p-1.5 w-[50%] rounded-lg text-white text-xl font-bold active:bg-blue-400 active:text-gray-300 md:w-[30%]"  />
          </div>
        </div>
      <Card />
      </div>
    </div>
  )
}