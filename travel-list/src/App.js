
function App() {
  return (
    <div className="App">

   <Logo/>
   <Form/>
   <PackagingList/>
   <Stats/>
    </div>
  );
}

export default App;

function Logo(){
  return <h1>🏆Far Away💪</h1>
}

function Form(){
  return(
    <div className="add-form">
      <h3>What do you need for your trip?</h3>

    </div>
  )
}


function PackagingList(){
  return  <div className="list">  PackagingList </div>;
  

}

function Stats(){
 return(
  <footer className="stats">
    You have X items on your list and you already packed 
  </footer>
 )
}
