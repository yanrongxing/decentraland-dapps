import { Avatar } from '@yanrongxing/schemas'

export type Profile = {
  avatars: Avatar[]
}

export type EntityDeploymentError = {
  message: string
  code?: number
}
