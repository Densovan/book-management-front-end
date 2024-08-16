import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableBookIssue from "../../components/Tables/TableBookIssue";

const Member = () => {
  return (
    <>
      <Breadcrumb pageName="Book Issue" />
      <div className="flex flex-col gap-10">
        <TableBookIssue />
      </div>
    </>
  );
};

export default Member;
