function ListItems({ list }) {
  if (!list.length) {
    return <p>A lista está vazia.</p>;
  }

  const keys = Object.keys(list[0]);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            {keys.map((key) => (
              <td key={key}>{JSON.stringify(item[key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListItems;
