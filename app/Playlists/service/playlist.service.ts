import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export const createPlaylist = async (userId:number, name:string, description:string) => {
    try{
        const newPlaylist = await prisma.playlist.create({
            data:{
                name,
                description,
                user:{
                    connect: { id: userId }
                }
            }
        });
        return newPlaylist;
    }
    catch (error){
        throw new Error('No se pudo crear la playlist');
    }
};

export const getAllPlaylist = async() => {
    try {
        const users = await prisma.playlist.findMany();
        return users;
    }
    catch (error){
        throw error;
    }
}

export const getPlaylistById = async(id:number) => {
    try{
        const user = await prisma.playlist.findUnique({
            where: { id }
        });
        return user;
    }
    catch (error){
        throw error;
    }
}

export const updatePlaylist = async(id:number, data: {email?:string, name?:string, lastname?:string, username?:string}) => {
    try{
        const user = await prisma.playlist.update({
            where: { id },
            data
        });
        return user;
    }
    catch (error){
        throw error;
    }
}

export const deletePlaylist = async(id: number) => {
    try{
        const user = await prisma.playlist.delete({
            where: { id }
        });
        return user;
    }
    catch (error){
        throw error;
    }
}