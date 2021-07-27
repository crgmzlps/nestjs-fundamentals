module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'iluvcoffee',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations//*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
