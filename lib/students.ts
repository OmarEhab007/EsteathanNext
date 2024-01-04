// import prisma from "./db";

// // make function that returns all students
// export const getAllStudents = async () => {
//   try {
//     const data = await prisma.student.findMany();
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// // make function that returns one student
// export const getStudent = async (number: string) => {
//   try {
//     const data = await prisma.student.findUnique({
//       where: {
//         number,
//       },
//     });
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// // make function that deletes one student
// export const deleteStudent = async (number: string) => {
//   try {
//     const data = await prisma.student.delete({
//       where: {
//         number,
//       },
//     });
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// // make function that updates one student
// export const updateStudent = async (number: string, body: any) => {
//   try {
//     const { name, class: className, year, parentNumber } = body;
//     const data = await prisma.student.update({
//       where: {
//         number,
//       },
//       data: {
//         name,
//         class: className,
//         year,
//         parentNumber,
//       },
//     });
//     return data;
//   } catch (error) {
//     return error;
//   }
// };
