import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteEquipmentsService } from "../services/DeleteEquipmentsService";

export class DeleteEquipmentsController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const { id } = request.query as { id: string}
        const equipamentsService = new DeleteEquipmentsService();

        const equipments = await equipamentsService.execute({id})
        reply.send(equipments)
    }
}