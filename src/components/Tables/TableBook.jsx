// import dayjs from "dayjs";
// import { useEffect, useState } from "react";
// import {
//   useGetBooks,
//   useAddBook,
//   useDeleteBook,
//   useUpdateBook,
// } from "../../hooks/useBook";
// import Loader from "../Loader";
// import AddBook from "../Modal/BookModal/AddBooks";
// import { addBookService } from "../../service/bookService";
// import DeleteBookModal from "../Modal/BookModal/DeleteBook";
// import EditBook from "../Modal/BookModal/EditBook";

// const TableOne = () => {
//   const [bookId, setBookId] = useState();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const {
//     deleteBook,
//     loading: deleteBookLoading,
//     error: deleteBookError,
//   } = useDeleteBook();
//   const {
//     addBook,
//     loading: addBookLoading,
//     error: addBookError,
//   } = useAddBook();

//   const {
//     updateBook,
//     loading: updateBookLoading,
//     error: updateBookError,
//   } = useUpdateBook();

//   const [shouldRefetch, setShouldRefetch] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     genre: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     try {
//       await addBook(formData).then((res) => {
//         res;
//       });
//       setFormData({
//         title: "",
//         author: "",
//         genre: "",
//       });

//       setIsModalOpen(false);
//       setShouldRefetch(true);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle network or other errors
//     }
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => setIsModalOpen(false);
//   const openEditModal = () => {
//     setIsEditModalOpen(true);
//   };
//   const closeEditModal = () => setIsEditModalOpen(false);
//   const openDeleteModal = () => {
//     setIsDeleteModalOpen(true);
//   };
//   const closeDeleteModal = () => setIsDeleteModalOpen(false);
//   const { error, loading, books, refetch } = useGetBooks(shouldRefetch);
//   useEffect(() => {
//     if (shouldRefetch) {
//       refetch();
//       setShouldRefetch(false); // Reset refetch state
//     }
//   }, [shouldRefetch, refetch]);
//   if (loading) {
//     return <Loader />;
//   }
//   const handleDeleteClick = (id) => {
//     setBookId(id);
//     openDeleteModal();
//   };
//   const handleDeleteBook = async () => {
//     try {
//       await deleteBook(bookId);
//       closeDeleteModal();
//       setShouldRefetch(true);
//     } catch (error) {
//       console.error("Error deleting book:", error);
//     }
//   };

//   const handleUpdateClick = (id) => {
//     setBookId(id);
//     openEditModal();
//   };

//   return (
//     <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
//       <div className="flex justify-between items-center">
//         <h4 className="<b-6 text-xl font-semibold text-black ">Top Books</h4>
//         <button
//           onClick={openModal}
//           className="bg-[#1c2434] text-white px-4 py-2 rounded-xl"
//         >
//           Add Book
//         </button>
//       </div>

//       <AddBook isOpen={isModalOpen} onClose={closeModal}>
//         <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
//           <label className="block mb-2 text-sm font-medium text-gray-900 ">
//             Title
//           </label>
//           <input
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             type="text"
//             className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             required
//           />
//           <label className="block mb-2 text-sm font-medium text-gray-900 ">
//             Author
//           </label>
//           <input
//             name="author"
//             value={formData.author}
//             onChange={handleChange}
//             type="text"
//             className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             required
//           />
//           <label className="block mb-2 text-sm font-medium text-gray-900 ">
//             Genre
//           </label>
//           <input
//             name="genre"
//             value={formData.genre}
//             onChange={handleChange}
//             type="text"
//             className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             required
//           />
//           <button
//             type="submit"
//             class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             {addBookLoading ? "Submiting..." : "Submit"}
//           </button>
//         </form>
//       </AddBook>
//       <EditBook isOpen={isEditModalOpen} onClose={closeEditModal}>
//         <form onSubmit={handleSubmitEdit} class="max-w-sm mx-auto">
//           <label className="block mb-2 text-sm font-medium text-gray-900 ">
//             Title
//           </label>
//           <input
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             type="text"
//             className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             required
//           />
//           <label className="block mb-2 text-sm font-medium text-gray-900 ">
//             Author
//           </label>
//           <input
//             name="author"
//             value={formData.author}
//             onChange={handleChange}
//             type="text"
//             className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             required
//           />
//           <label className="block mb-2 text-sm font-medium text-gray-900 ">
//             Genre
//           </label>
//           <input
//             name="genre"
//             value={formData.genre}
//             onChange={handleChange}
//             type="text"
//             className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             required
//           />
//           <button
//             type="submit"
//             class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             {addBookLoading ? "Submiting..." : "Submit"}
//           </button>
//         </form>
//       </EditBook>
//       <DeleteBookModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
//         <div className="flex gap-4 ">
//           <button
//             onClick={handleDeleteBook}
//             className="bg-red-400 text-red-800 py-2 px-4 rounded-full"
//           >
//             {deleteBookLoading ? "Deleting..." : "Delete"}
//           </button>
//           <button
//             onClick={closeDeleteModal}
//             className="bg-blue-400 text-blue-800 py-2 px-4 rounded-full"
//           >
//             Cancel
//           </button>
//         </div>
//       </DeleteBookModal>

//       <div className="flex flex-col">
//         <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
//           <div className="p-2.5 xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Title
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Author
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Genre
//             </h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Created Date
//             </h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Action
//             </h5>
//           </div>
//         </div>

//         {books.map((book, key) => (
//           <div
//             className={`grid grid-cols-3 sm:grid-cols-5 ${
//               key === books.length - 1
//                 ? ""
//                 : "border-b border-stroke dark:border-strokedark"
//             }`}
//             key={key}
//           >
//             <div className="flex items-center gap-3 p-2.5 xl:p-5">
//               <div className="flex-shrink-0">{book.title}</div>
//             </div>

//             <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="text-black ">{book.author}</p>
//             </div>

//             <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="text-meta-3">{book.genre}</p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <p className="text-black ">
//                 {dayjs(book.created_at).format("DD-MM-YYYY")}
//               </p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => handleUpdateClick(book)}
//                   className="text-white bg-blue-500 px-3 py-1 rounded-xl"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteClick(book.id)}
//                   className="text-red-900 bg-red-300 px-3 py-1 rounded-xl"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableOne;

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  useGetBooks,
  useAddBook,
  useDeleteBook,
  useUpdateBook,
} from "../../hooks/useBook";
import Loader from "../Loader";
import AddBook from "../Modal/BookModal/AddBooks";
import DeleteBookModal from "../Modal/BookModal/DeleteBook";
import EditBook from "../Modal/BookModal/EditBook";

const TableBook = () => {
  const [bookId, setBookId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
  });
  const [editBookData, setEditBookData] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const {
    deleteBook,
    loading: deleteBookLoading,
    error: deleteBookError,
  } = useDeleteBook();
  const {
    addBook,
    loading: addBookLoading,
    error: addBookError,
  } = useAddBook();
  const {
    updateBook,
    loading: updateBookLoading,
    error: updateBookError,
  } = useUpdateBook();
  const { error, loading, books, refetch } = useGetBooks(shouldRefetch);

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
      await addBook(formData);
      setFormData({
        title: "",
        author: "",
        genre: "",
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
      await updateBook({ id: bookId, ...editBookData });
      closeEditModal();
      setShouldRefetch(true);
    } catch (error) {
      console.error("Error updating book:", error);
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
    setBookId(id);
    openDeleteModal();
  };

  const handleDeleteBook = async () => {
    try {
      await deleteBook(bookId);
      closeDeleteModal();
      setShouldRefetch(true);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleUpdateClick = (book) => {
    setEditBookData({
      title: book.title,
      author: book.author,
      genre: book.genre,
    });
    setBookId(book.id);
    openEditModal();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold text-black">Top Books</h4>
        <button
          onClick={openModal}
          className="bg-[#1c2434] text-white px-4 py-2 rounded-xl"
        >
          Add Book
        </button>
      </div>

      <AddBook isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Author
          </label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            type="text"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Genre
          </label>
          <input
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            type="text"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {addBookLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </AddBook>

      <EditBook isOpen={isEditModalOpen} onClose={closeEditModal}>
        <form onSubmit={handleSubmitEdit} className="max-w-sm mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            name="title"
            value={editBookData.title}
            onChange={(e) =>
              setEditBookData((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            type="text"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Author
          </label>
          <input
            name="author"
            value={editBookData.author}
            onChange={(e) =>
              setEditBookData((prev) => ({
                ...prev,
                author: e.target.value,
              }))
            }
            type="text"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Genre
          </label>
          <input
            name="genre"
            value={editBookData.genre}
            onChange={(e) =>
              setEditBookData((prev) => ({
                ...prev,
                genre: e.target.value,
              }))
            }
            type="text"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {updateBookLoading ? "Updating..." : "Update"}
          </button>
        </form>
      </EditBook>

      <DeleteBookModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <div className="flex gap-4">
          <button
            onClick={handleDeleteBook}
            className="bg-red-400 text-red-800 py-2 px-4 rounded-full"
          >
            {deleteBookLoading ? "Deleting..." : "Delete"}
          </button>
          <button
            onClick={closeDeleteModal}
            className="bg-blue-400 text-blue-800 py-2 px-4 rounded-full"
          >
            Cancel
          </button>
        </div>
      </DeleteBookModal>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Title
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Author
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Genre
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

        {books.map((book, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === books.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={book.id}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">{book.title}</div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black">{book.author}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{book.genre}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black">
                {dayjs(book.created_at).format("DD-MM-YYYY")}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleUpdateClick(book)}
                  className="text-white bg-blue-500 px-3 py-1 rounded-xl"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(book.id)}
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

export default TableBook;
