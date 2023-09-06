const initialItems = [
  { id: 1, description: "passports", quantity: 2, packed: false },
  { id: 1, description: "Socks", quantity: 12, packed: false },
];
function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>🏆Far Away💪</h1>;
}

function Form() {
  function handleSubmit(e){
    e.preventDefault();
    console.log(e);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({length:20},(_,i)=>i+1).map
        ((num)=>(
          <option value={num} key={num}>
            {num}

          </option>

          ))}
      </select>
      <input type="text" placeholder="Item..."/> 
      <button>Add</button>
    </form>
  );
}

function PackagingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item}  key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

function Item(item) {
  return <li>{item.description}</li>;
}
function Stats() {
  return (
    <footer className="stats">
      You have X items on your list and you already packed
    </footer>
  );
}
