import { useState, useRef, useCallback, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Main from "./components/Main";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '월요일은 vue공부하기',
      checked: true,
      week : 'mon',
      date : '2022-12-16'
    },
    {
      id: 2,
      text: '쫑구랑 산책가기',
      checked: false,
      week : 'mon',
      date : '2022-12-16'
    },
    {
      id: 3,
      text: 'javascript 공부',
      checked: true,
      week : 'tue',
      date : '2022-12-16'
    },
    {
      id: 4,
      text: '딸기 먹기',
      checked: true,
      week : 'wed',
      date : '2022-12-16'
    },
    {
      id: 5,
      text: '쫑구랑 산책가기',
      checked: true,
      week : 'fri',
      date : '2022-12-16'
    },
    {
      id: 6,
      text: 'react공부하기',
      checked: true,
      week : 'sat',
      date : '2022-12-16'
    },
    {
      id: 7,
      text: 'jquery공부하기',
      checked: false,
      week : 'sun',
      date : '2022-12-16'
    }
  ]);

  const weekArr = {
    eng : ['mon','tue','wed','thur','fri','sat','sun'],
    kor : ['월요일','화요일','수요일','목요일','금요일','토요일','일요일']
    }

    const timeString = useMemo(()=>{
      const today = new Date();
      let {year,month,date} = {
        year: today.getFullYear(),  
        month: today.getMonth() + 1, 
        date: today.getDate(), 
      };
    
      return `${year}-${month}-${date}`

    },[])


  const nextId = useRef(todos.length); 

  const onInsert = useCallback(
    (value) => {
      const {text,week} = value
      const todo = {
        id: nextId.current,
        checked: false,
        text,
        week,
        date : timeString
      };

      setTodos(todos.concat(todo));
      nextId.current += 1; 
      console.log(todos);
    },[todos])


    const onRemove = useCallback(
      id => {
        let filterTodo = todos.filter((todo)=> todo.id != id)
        setTodos(filterTodo)
      },[todos])


    const onToggle = useCallback(
      id => {
        let updateTodo = todos.map((todo) => {
          todo.id === id && (todo.checked = !todo.checked) 
          return todo
        })
        setTodos(updateTodo)
      },[todos])
//basename={process.env.PUBLIC_URL}

  return (
    <div className='w-[100vw] h-[100vh] bg-gray-300'>
      <div className='w-[540px] bg-gray-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header onInsert={onInsert} weekArr={weekArr}/>
          <Routes>
            <Route path='/' element={<Main weekArr={weekArr}/>}/>
            <Route path='/week/:day' element={<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
