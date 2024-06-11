import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetMembershipResponse {
  membership: {
    id: string
    role: Role
    userId: string
    organizationId: string
  }
}

export async function getMembership(org: string) {
  const result = await api
    .get(`organizations/${org}/membership`, {})
    .json<GetMembershipResponse>()

  return result
}
