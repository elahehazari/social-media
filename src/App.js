function App() {
  return (
    <div className="mainPage">
      <div className="header">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="4"
          maxlength="8"
          size="10"
        ></input>
        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="4"
          maxlength="8"
          size="10"
        ></input>
      </div>
    </div>
  );
}

export default App;
