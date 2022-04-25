export default function ToggleCell(props) {
  function handleClick() {
    console.log("click");
    props.setSort(props.sortKey);
    props.setSortDirection((old) => (old === "asc" ? "desc" : "asc"));
  }
  return <th onClick={handleClick}>{props.title}</th>;
}
