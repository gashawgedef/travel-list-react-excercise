

const initialItems=[
  {id:1,description:"passports",quantity:2, packed:false},
  {id:1,description:"Socks",quantity:12, packed:false}
];
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
  return (
     <ul className="list">  
     {initialItems.map((item)=>(
   <Item item={item}/>
     ))}
     
   </ul>
     
     );
  

}


function Item(item){
  return <li>{item.description}</li>
}
function Stats(){
 return(
  <footer className="stats">
    You have X items on your list and you already packed 
  </footer>
 )
}
