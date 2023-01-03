import UserSchema from "./UserSchema.js";

//user CRUD

export const createUser = (userData) => {
  return UserSchema(userData).save();
};

export const getUserByID = (_id) => {
  return UserSchema.findById(_id);
};

export const getAnyUser = (filter) => {
  return UserSchema.findOne(filter);
};

export const updateUserById = (_id, updateData) => {
  return UserSchema.findByIdAndUpdate(_id, updateData);
};

export const deleteUserByID = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
