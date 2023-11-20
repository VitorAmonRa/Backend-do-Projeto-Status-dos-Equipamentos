import { ok } from "assert";
import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import {CreateEquipmentsController} from "./controllers/CreateEquipmentsController"
import { ListEquipmentsController } from "./controllers/ListEquipmentsController";
import { DeleteEquipmentsController } from "./controllers/DeleteEquipmentsController";

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions) {
    fastify.get("/allequipments",async (request:FastifyRequest, reply:FastifyReply) => {
        return new ListEquipmentsController().handle(request,reply)
    })
    fastify.post("/equipments",async (request:FastifyRequest, reply:FastifyReply) => {
        return new CreateEquipmentsController().handle(request,reply)
    })
    fastify.delete("/equipment",async (request:FastifyRequest, reply:FastifyReply) => {
        return new DeleteEquipmentsController().handle(request,reply)
    })
}
