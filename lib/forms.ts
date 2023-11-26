import prisma from "./db";

// make function that returns all forms

export const getAllForms = async () => {
  try {
    const data = await prisma.form.findMany();
    return data;
  } catch (error) {
    return error;
  }
};

// make function that returns one form

export const getForm = async (id: string) => {
  try {
    const data = await prisma.form.findUnique({
      where: {
        id,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};


// make function that deletes one form

export const deleteForm = async (id: string) => {
  try {
    const data = await prisma.form.delete({
      where: {
        id,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that updates one form

export const updateForm = async (id: string, body: any) => {
  try {
    const { studentId, reason, attachment, parentNumber, verificationCode, status, approval } = body;
    const data = await prisma.form.update({
      where: {
        id,
      },
      data: {
        studentId,
        reason,
        attachment,
        parentNumber,
        verificationCode,
        status,
        approval,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that adds new form

export const addForm = async (body: any) => {
  try {
    const { studentId, reason, attachment, parentNumber, verificationCode, status, approval } = body;
    const data = await prisma.form.create({
      data: {
        studentId,
        reason,
        attachment,
        parentNumber,
        verificationCode,
        status,
        approval,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that returns all forms by studentId

export const getFormsByStudentId = async (studentId: string) => {
  try {
    const data = await prisma.form.findMany({
      where: {
        studentId,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that returns all forms by parentNumber

export const getFormsByParentNumber = async (parentNumber: string) => {
  try {
    const data = await prisma.form.findMany({
      where: {
        parentNumber,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that returns all forms by status

export const getFormsByStatus = async (status: string) => {
  try {
    const data = await prisma.form.findMany({
      where: {
        status,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that returns all forms by approval

export const getFormsByApproval = async (approval: string) => {
  try {
    const data = await prisma.form.findMany({
      where: {
        approval,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that returns all forms by status and approval

export const getFormsByStatusAndApproval = async (status: string, approval: string) => {
  try {
    const data = await prisma.form.findMany({
      where: {
        status,
        approval,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that returns all forms by studentId and status

export const getFormsByStudentIdAndStatus = async (studentId: string, status: string) => {
  try {
    const data = await prisma.form.findMany({
      where: {
        studentId,
        status,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// make function that returns all forms by studentId and approval

export const getFormsByStudentIdAndApproval = async (studentId: string, approval: string) => {
  try {
    const data = await prisma.form.findMany({
      where: {
        studentId,
        approval,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// get form code 

export const getFormCode = async (id: string) => {
  try {
    const data = await prisma.form.findUnique({
      where: {
        id,
      },
      select: {
        verificationCode: true,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// add form code

export const addFormCode = async (id: string, verificationCode: string) => {
  try {
    const data = await prisma.form.update({
      where: {
        id,
      },
      data: {
        verificationCode,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// get form status

export const getFormStatus = async (id: string) => {
  try {
    const data = await prisma.form.findUnique({
      where: {
        id,
      },
      select: {
        status: true,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// add form status

export const addFormStatus = async (id: string, status: string) => {
  try {
    const data = await prisma.form.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// get form approval

export const getFormApproval = async (id: string) => {
  try {
    const data = await prisma.form.findUnique({
      where: {
        id,
      },
      select: {
        approval: true,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// add form approval

export const addFormApproval = async (id: string, approval: string) => {
  try {
    const data = await prisma.form.update({
      where: {
        id,
      },
      data: {
        approval,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

