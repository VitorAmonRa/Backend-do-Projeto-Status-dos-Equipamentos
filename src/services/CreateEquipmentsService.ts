import prismaClient from "../prisma";

interface CreateEquipmentsProps {
    name: string;
    status: string;
}

class CreateEquipmentsService{
    async execute({name, status}: CreateEquipmentsProps){

        if(!name || !status){ 
        throw new Error("Preencha todos os campos");
        }
        const equipments = await prismaClient.equipments.create({
            data:{
                name,
                status
            }
        })
        return equipments
    }
}
export {CreateEquipmentsService}