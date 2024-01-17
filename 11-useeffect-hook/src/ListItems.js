import ItemList from "./ItemList";
function ListItems({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <ItemList
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ListItems;
