export default function ToggleCell(props) {
  function handleClick() {
    console.log("click");
    props.setSort(props.sortKey);
    props.setDirection((old) => (old === "asc" ? "desc" : "asc"));
  }
  return <th onClick={handleClick}>{props.title}</th>;
}
