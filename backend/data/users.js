import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin_30', 10),
    isAdmin: true,
  },
  {
    name: 'Shiv Prakash Singh',
    email: 'shiv@example.com',
    password: bcrypt.hashSync('shiv_30', 10),
  },
  {
    name: 'Vishal Singh',
    email: 'vishal@example.com',
    password: bcrypt.hashSync('vishal_30', 10),
  },
  {
    name: 'Gyan Prakash Singh',
    email: 'gyan@example.com',
    password: bcrypt.hashSync('gyan_30', 10),
  },
]

export default users
