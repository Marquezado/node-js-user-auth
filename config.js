export const {
    PORT = 3000,    
    SALT_ROUNDS = 10,
    SECRET_JWT_KEY
} = process.env

if (!SECRET_JWT_KEY){
    throw new Error('SECRET_JWT_KEY tiene que ser definida')
}