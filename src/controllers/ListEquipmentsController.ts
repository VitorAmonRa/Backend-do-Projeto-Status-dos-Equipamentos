import { FastifyReply, FastifyRequest } from "fastify";
import { ListEquipmentsService } from "../services/ListEquipmentsService";


export class ListEquipmentsController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const listEquipmentsService = new ListEquipmentsService();
        
        const equipments = await listEquipmentsService.execute();
        reply.send(equipments)
    }
}
