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
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
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
          <Item item={item} />
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
