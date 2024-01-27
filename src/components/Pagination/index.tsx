import usePage from "../../hooks/usePage";
function Pagination() {
  const { prePage, nextPage } = usePage();
  return (
    <>
      <button onClick={prePage}>Pre</button>
      <button onClick={nextPage}>Next</button>
    </>
  );
}

export default Pagination;
