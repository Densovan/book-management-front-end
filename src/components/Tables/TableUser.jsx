// import React, { useState } from "react";
// import BrandOne from "../../images/brand/brand-01.svg";
// import BrandTwo from "../../images/brand/brand-02.svg";
// import BrandThree from "../../images/brand/brand-03.svg";
// import BrandFour from "../../images/brand/brand-04.svg";
// import BrandFive from "../../images/brand/brand-05.svg";
// import AddUser from "../Modal/UserModal/AddUser";
// import { useGetUsers } from "../../hooks/useUser";
// import dayjs from "dayjs";

// const brandData = [
//   {
//     logo: BrandOne,
//     name: "Google",
//     visitors: 3.5,
//     revenues: "5,768",
//     sales: 590,
//     conversion: 4.8,
//   },
//   {
//     logo: BrandTwo,
//     name: "Twitter",
//     visitors: 2.2,
//     revenues: "4,635",
//     sales: 467,
//     conversion: 4.3,
//   },
//   {
//     logo: BrandThree,
//     name: "Github",
//     visitors: 2.1,
//     revenues: "4,290",
//     sales: 420,
//     conversion: 3.7,
//   },
//   {
//     logo: BrandFour,
//     name: "Vimeo",
//     visitors: 1.5,
//     revenues: "3,580",
//     sales: 389,
//     conversion: 2.5,
//   },
//   {
//     logo: BrandFive,
//     name: "Facebook",
//     visitors: 3.5,
//     revenues: "6,768",
//     sales: 390,
//     conversion: 4.2,
//   },
// ];

// const TableUser = () => {
//   const { loading, error, users } = useGetUsers();
//   console.log(users);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => {
//     setIsModalOpen(true), console.log("click");
//   };
//   const closeModal = () => setIsModalOpen(false);
//   return (
//     <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
//       <div className="flex justify-between items-center">
//         <h4 className="mb-6 text-xl font-semibold text-black ">Top Users</h4>
//         <button
//           onClick={openModal}
//           className="bg-[#1c2434] text-white px-4 py-2 rounded-xl"
//         >
//           Add User
//         </button>
//       </div>

//       <AddUser isOpen={isModalOpen} onClose={closeModal}>
//         <form class="max-w-sm mx-auto">
//           <div class="mb-5">
//             <label
//               for="email"
//               class="block mb-2 text-sm font-medium text-gray-900 "
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               for="password"
//               className="block mb-2 text-sm font-medium text-gray-900 "
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               for="password"
//               className="block mb-2 text-sm font-medium text-gray-900 "
//             >
//               Password
//             </label>
//             <input
//               type="text"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Submit
//           </button>
//         </form>

//         {/* <p className="mt-2">This is the content inside the modal.</p> */}
//         {/* <button
//           onClick={closeModal}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Close Modal
//         </button> */}
//       </AddUser>

//       <div className="flex flex-col">
//         <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
//           <div className="p-2.5 xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Source
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Visitors
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Revenues
//             </h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Sales
//             </h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Conversion
//             </h5>
//           </div>
//         </div>

//         {users.map((user, key) => (
//           <div
//             className={`grid grid-cols-3 sm:grid-cols-5 ${
//               key === users.length - 1
//                 ? ""
//                 : "border-b border-stroke dark:border-strokedark"
//             }`}
//             key={key}
//           >
//             <div className="flex items-center gap-3 p-2.5 xl:p-5">
//               <div className="flex-shrink-0">
//                 <img
//                   className="w-8 h-8 rounded-full"
//                   src="https://github.com/shadcn.png"
//                   alt="user"
//                 />
//               </div>
//               {/* <p className="hidden text-black  sm:block">{user?.name}</p> */}
//             </div>

//             <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="text-black ">{user?.name}</p>
//             </div>

//             <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="text-meta-3 flex gap-2">
//                 {user.role.map((res, i) => (
//                   <div key={i}>
//                     <p
//                       className={`${
//                         res === "admin"
//                           ? "text-green-900 bg-green-400 px-2 py-0.5 rounded-full text-xs"
//                           : "text-blue-900 bg-blue-400 px-2 py-0.5 rounded-full text-xs"
//                       }`}
//                     >
//                       {res}
//                     </p>
//                   </div>
//                 ))}
//               </p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <p className="text-black">
//                 {dayjs(user?.createdAt).format("DD-MM-YYYY")}
//               </p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <button className="text-white bg-blue-500 px-3 py-1 rounded-xl">
//                 Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableUser;

import React, { useState, useEffect } from "react";
import {
  useGetUsers,
  useAddUser,
  useUpdateUser,
  // useDeleteUser,
} from "../../hooks/useUser";
import dayjs from "dayjs";
import AddUser from "../Modal/UserModal/AddUser";
import EditUser from "../Modal/UserModal/EditUser";
import Loader from "../Loader";
// import DeleteUserModal from "../Modal/UserModal/DeleteUser";

const TableUser = () => {
  const [userId, setUserId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [editUserData, setEditUserData] = useState({
    email: "",
    name: "",
    role: [],
  });

  const { error, loading, users, refetch } = useGetUsers(shouldRefetch);
  const {
    addUser,
    loading: addUserLoading,
    error: addUserError,
  } = useAddUser();
  const {
    updateUser,
    loading: updateUserLoading,
    error: updateUserError,
  } = useUpdateUser();
  // const {
  //   deleteUser,
  //   loading: deleteUserLoading,
  //   error: deleteUserError,
  // } = useDeleteUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(formData);
      setFormData({
        email: "",
        name: "",
        password: "",
      });
      setIsModalOpen(false);
      setShouldRefetch(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ id: userId, ...editUserData });
      closeEditModal();
      setShouldRefetch(true);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  useEffect(() => {
    if (shouldRefetch) {
      refetch();
      setShouldRefetch(false);
    }
  }, [shouldRefetch, refetch]);

  if (loading) {
    return <Loader />;
  }

  const handleDeleteClick = (id) => {
    setUserId(id);
    openDeleteModal();
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(userId);
      closeDeleteModal();
      setShouldRefetch(true);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateClick = (user) => {
    setEditUserData({
      email: user.email,
      name: user.name,
      role: user.role,
    });
    setUserId(user.id);
    openEditModal();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center">
        <h4 className="mb-6 text-xl font-semibold text-black">Top Users</h4>
        <button
          onClick={openModal}
          className="bg-[#1c2434] text-white px-4 py-2 rounded-xl"
        >
          Add User
        </button>
      </div>

      <AddUser isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {addUserLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </AddUser>

      <EditUser isOpen={isEditModalOpen} onClose={closeEditModal}>
        <form onSubmit={handleSubmitEdit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              disabled
              type="email"
              id="email"
              name="email"
              value={editUserData.email}
              onChange={(e) =>
                setEditUserData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editUserData.name}
              onChange={(e) =>
                setEditUserData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={editUserData.role.join(", ")}
              onChange={(e) =>
                setEditUserData((prev) => ({
                  ...prev,
                  role: e.target.value.split(",").map((role) => role.trim()),
                }))
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {updateUserLoading ? "Updating..." : "Update"}
          </button>
        </form>
      </EditUser>

      {/* <DeleteUserModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <p className="text-center">
          Are you sure you want to delete this user?
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handleDeleteUser}
            className="text-white bg-red-500 px-4 py-2 rounded-xl"
          >
            {deleteUserLoading ? "Deleting..." : "Delete"}
          </button>
          <button
            onClick={closeDeleteModal}
            className="text-white bg-gray-500 px-4 py-2 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </DeleteUserModal> */}

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Avatar
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Role
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Created Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {users.map((user, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === users.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={user.id}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="user"
                />
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black">{user.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3 flex gap-2">
                {user.role.map((res, i) => (
                  <div key={i}>
                    <p
                      className={`${
                        res === "admin"
                          ? "text-green-900 bg-green-400 px-2 py-0.5 rounded-full text-xs"
                          : "text-blue-900 bg-blue-400 px-2 py-0.5 rounded-full text-xs"
                      }`}
                    >
                      {res}
                    </p>
                  </div>
                ))}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black">
                {dayjs(user.createdAt).format("DD-MM-YYYY")}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleUpdateClick(user)}
                  className="text-white bg-blue-500 px-3 py-1 rounded-xl"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(user.id)}
                  className="text-red-900 bg-red-300 px-3 py-1 rounded-xl"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableUser;
