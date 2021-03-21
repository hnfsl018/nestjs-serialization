import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { join } from "path"

export default () => ({
    type: process.env.DB_DIALECT || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_DATABASE || "nest-serialization",
    logging: process.env.DB_LOGGING === "true",
    entities: [join(__dirname, "..", "database", "entity", "*.entity{.ts,.js}")],
    migrations: [join(__dirname, "..", "database", "migrations", "*.ts")],
    synchronize: process.env.DB_SYNCHRONIZE === "true",
    dropSchema: process.env.DB_DROP_SCHEMA === "true",
    migrationsRun: process.env.DB_MIGRATIONS_RUN === "true",
}) as TypeOrmModuleOptions