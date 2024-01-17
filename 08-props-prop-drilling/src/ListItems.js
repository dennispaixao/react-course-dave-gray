import { FaTrashAlt } from "react-icons/fa";
function ListItems({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            onChange={() => handleCheck(item.id)}
            type="checkbox"
            checked={item.checked}
          />
          <label
            style={
              item.checked
                ? {
                    textDecoration: "line-through",
                  }
                : null
            }
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"
          />
        </li>
      ))}
    </ul>
  );
}

export default ListItems;
