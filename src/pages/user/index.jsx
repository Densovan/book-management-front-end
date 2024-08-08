import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableUser from "../../components/Tables/TableUser";

const User = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <TableUser />
      </div>
    </>
  );
};

export default User;
