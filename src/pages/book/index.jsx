import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableBook from "../../components/Tables/TableBook";

const Books = () => {
  return (
    <>
      <Breadcrumb pageName="Books" />
      <div className="flex flex-col gap-10">
        <TableBook />
      </div>
    </>
  );
};

export default Books;
