function Todo() {
  function callFun() {
    alert("Button clicked!");
  }
  return (
    
      <div>
        <h1>Todo</h1>
        <img src="https://plus.unsplash.com/premium_photo-1675731118661-15dc54c11130?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D" alt="strawberry" />
        <ul>
          <li>58</li>
          <li>45</li>
          <li>63</li>
        </ul>
        <button onClick={callFun}>click</button>
      </div>
    
  )
}

export default Todo;