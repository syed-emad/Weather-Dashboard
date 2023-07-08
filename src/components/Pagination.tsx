import ReactPaginate from "react-paginate";
interface Props {
  currentPage: number;
  totalPages: number;
  displayRange?: number;
  onPageChange: (page: { selected: number }) => void;
}
export const Pagination = ({
  currentPage,
  totalPages,
  displayRange = 3,
  onPageChange,
}: Props) => {
  return (
    <>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        forcePage={currentPage}
        pageCount={totalPages}
        onPageChange={(page) => onPageChange(page)}
        breakLabel={"..."}
        pageRangeDisplayed={displayRange}
        marginPagesDisplayed={displayRange}
        activeLinkClassName={
          "bg-blue-50 border-blue-900 hover:bg-blue-300 text-gray-900"
        }
        pageLinkClassName={
          "px-4 py-2 m-1 border-t-2 hover:bg-gray-100 text-gray-500  "
        }
        nextLinkClassName={"px-4 py-2 m-1  "}
        previousLinkClassName={"px-4 py-2 m-1  "}
        breakLinkClassName={"px-4 py-2  "}
        containerClassName={"flex"}
      />
    </>
  );
};
