import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableOne from "../../components/Tables/TableOne";

const Books = () => {
  return (
    <>
      <Breadcrumb pageName="Books" />
      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </>
  );
};

export default Books;
