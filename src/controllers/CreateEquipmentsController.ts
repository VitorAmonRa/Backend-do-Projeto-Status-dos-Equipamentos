import { FastifyReply, FastifyRequest } from "fastify";
import { CreateEquipmentsService } from "../services/CreateEquipmentsService";

class CreateEquipmentsController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const{name,status} = request.body as {name: string, status: string};
        
        const equipamentsService = new CreateEquipmentsService();
        const equipments = await equipamentsService.execute({name, status})
        reply.send(equipments)
    }
}
export { CreateEquipmentsController};