export default () => ({
    db_connect: process.env.DB_URI,
    stripe_key: process.env.STRIPE_SECRET_KEY
});
