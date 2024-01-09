import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const UserSchema = z.object({
  full_name: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().email('Email Inválido').min(1, 'O email é obrigatório'),
  gender: z.enum(['M', 'F']),
})

export const validationUserSchema = toTypedSchema(UserSchema)

export type User = z.infer<typeof UserSchema>
