export const correctUser = {
  email: 'admin@admin.com',
  password: 'secret_admin'
}

export const incorrectEmailUser = {
  email: 'alagoano@admin.com',
  password: 'secret_admin'
}

export const incorretPasswordUser = {
  email: 'admin@admin.com',
  password: 'senhaerrada'
}

export const userWithoutEmail = {
  password: 'secret_admin'
}

export const userWithoutPassword = {
  email: 'admin@admin.com'
}
