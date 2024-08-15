// import React from "react";

// const AddUser = ({ isOpen, onClose, children }) => {
//   //   if (!isOpen) return null;
//   console.log("hello world");
//   console.log(isOpen, onClose, "hello");

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg max-w-sm w-full">
//         <div className="p-4 border-b border-gray-200">
//           <button
//             className="text-gray-500 hover:text-gray-700"
//             onClick={onClose}
//           >
//             &times;
//           </button>
//         </div>
//         <div className="p-4">{children}fdsaf</div>
//       </div>
//     </div>
//   );
// };

// export default AddUser;

import React from "react";

const AddUser = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold">Add User</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default AddUser;
