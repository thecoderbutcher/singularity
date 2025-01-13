import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (email:string, name:string, lastname:string, username:string) => {
    try{
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                lastname,
                username
            },
        });
        return newUser;
    }
    catch (error){
        throw error;
    }
};

export const getAllUser = async() => {
    try {
        const users = await prisma.user.findMany();
        return users;
    }
    catch (error){
        throw error;
    }
}

export const getUserById = async(id:number) => {
    try{
        const user = await prisma.user.findUnique({
            where: { id }
        });
        return user;
    }
    catch (error){
        throw error;
    }
}

export const updateUser = async(id:number, data: {email?:string, name?:string, lastname?:string, username?:string}) => {
    try{
        const user = await prisma.user.update({
            where: { id },
            data
        });
        return user;
    }
    catch (error){
        throw error;
    }
}

export const deleteUser = async(id: number) => {
    try{
        const user = await prisma.user.delete({
            where: { id }
        });
        return user;
    }
    catch (error){
        throw error;
    }
}