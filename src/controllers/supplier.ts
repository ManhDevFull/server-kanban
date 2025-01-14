// // import SupplierModel from "../models/SupplierModel";

// const getSuppliers = async (req: any, res: any) => {
//   const { page } = req.query;
//   try {
//     const skip = (page - 1) * 10;
//     const items = await SupplierModel.find({ isDeleted: false })
//       .skip(skip)
//       .limit(10);
//     const total = await SupplierModel.countDocuments();
//     res.status(200).json({
//       message: "Get products successfully",
//       data: { items, total },
//     });
//   } catch (error: any) {
//     res.status(404).json({
//       message: error.message,
//       data: [],
//     });
//   }
// };
// const addSupplier = async (req: any, res: any) => {
//   const body = req.body;
//   try {
//     const newSupplier = new SupplierModel(body);
//     newSupplier.save();
//     res.status(200).json({
//       message: "Add new supplier succssfully",
//       data: newSupplier,
//     });
//   } catch (error: any) {
//     res.status(404).json({
//       message: error.message,
//       data: [],
//     });
//   }
// };
// const updateSupplier = async (req: any, res: any) => {
//   const body = req.body;
//   const { id } = req.query;
//   try {
//     await SupplierModel.findByIdAndUpdate(id, body);

//     res.status(200).json({
//       message: "Update supplier succssfully",
//       data: [],
//     });
//   } catch (error: any) {
//     res.status(404).json({
//       message: error.message,
//       data: [],
//     });
//   }
// };
// const deleteSupplier = async (req: any, res: any) => {
//   const { id } = req.query;
//   try {
//     await SupplierModel.findByIdAndDelete(id);

//     res.status(200).json({
//       message: "Delete supplier succssfully",
//       data: [],
//     });
//   } catch (error: any) {
//     res.status(404).json({
//       message: error.message,
//       data: [],
//     });
//   }
// };
// // const getForm = async (_req: any, res: any) => {
// //   try {
// //     const form = {
// //       title: "Supplier",
// //       layout: "horizontal",
// //       labelCol: 6,
// //       wrapperCol: 18,
// //       data: [
// //         {
// //           key: "name",
// //           value: "name",
// //           label: "Supplier name",
// //           placeholder: "Enter supplier name",
// //           type: "default",
// //           required: true,
// //           mesage: "Please enter supplier name",
// //         },
// //       ],
// //     };
// //     res.status(200).json({
// //       message: "",
// //       data: form,
// //     });
// //   } catch (error: any) {
// //     res.status(404).json({
// //       message: error.message,
// //       data: [],
// //     });
// //   }
// // };
// export { getSuppliers, addSupplier, updateSupplier, deleteSupplier };
