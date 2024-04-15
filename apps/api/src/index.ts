import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN', id: 'user_id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id' })

console.log(ability.can('transfer_ownership', 'Organization'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', project))
