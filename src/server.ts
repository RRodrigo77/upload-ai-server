import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { prisma } from './lib/prisma'
import { getALLPromptsRoutes } from './routes/get-all-prompts'
import { uploadVideoRoutes } from './routes/upload-video'
import { createTranscriptionRoutes } from './routes/create-transcription'
import { generationAICompletionRoute } from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
    origin: '*', // TODO: Change to your domain name or IP address here!
})

app.register(getALLPromptsRoutes)
app.register(uploadVideoRoutes)
app.register(createTranscriptionRoutes)
app.register(generationAICompletionRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})