import prismaClient from "../prisma";

export class ListEquipmentsService{

    async execute(){

        const equipments = await prismaClient.equipments.findMany();
        return equipments
    }
}