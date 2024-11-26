
import mongoose from "mongoose";

const roleEnum = ['admin', 'user']

const userModel = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{type:String, enum:roleEnum, default:'user'}
});

export const User = mongoose.models.users || mongoose.model('users', userModel);