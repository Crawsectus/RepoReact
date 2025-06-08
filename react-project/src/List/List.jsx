function List(props) {
    const lista=props.items
    const titulo=props.category
    const fruitsList = lista.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp; {item.calories}
        </li>);
    return (
        <div>
            <h3>{titulo}</h3>
            <ul>{fruitsList}</ul>
        </div>
    );
}
export default List;