import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getALLPromptsRoutes(app: FastifyInstance) {
    // @route   GET /api/prompts
    app.get('/prompts', async () => {
        const prompts = await prisma.prompt.findMany({
    
        })
    
        return prompts
    })
    
}