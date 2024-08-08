import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableMember from "../../components/Tables/TableMember";

const Member = () => {
  return (
    <>
      <Breadcrumb pageName="Members" />
      <div className="flex flex-col gap-10">
        <TableMember />
      </div>
    </>
  );
};

export default Member;
