import prismaClient from "../prisma";

interface DeleteEquipmentsProps{
    id:string;
}
export class DeleteEquipmentsService{
    async execute({id}: DeleteEquipmentsProps){
        if(!id){
            throw new Error("Solicitação invalida.")
        }
    
        const findEquipaments = await prismaClient.equipments.findFirst({
            where:{
                id:id
            }
        })
        await prismaClient.equipments.delete({
            where:{
                id:findEquipaments?.id
            }
        })
        return{message: "deletado com sucesso."}
    }
}