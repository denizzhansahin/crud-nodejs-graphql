import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { DataSource } from "typeorm";
import { schema } from "./Schema";
import { Users } from "./Entities/User";

// SQLite bağlantısını tanımlayın
const AppDataSource = new DataSource({
    type: "sqlite",
    logging:true,
    
    database: "database.sqlite", // SQLite dosyanızın adı
    entities: [Users], // Burada entity'lerinizi tanımlayın
    synchronize: true, // Otomatik tabloları oluşturur (Geliştirme sırasında kullanışlı)
});

const main = async () => {
    try {
        // Veri tabanına bağlantı kur
        await AppDataSource.initialize();
        console.log("Database connected successfully!");

        const app = express();
        app.use(cors());
        app.use(express.json());

        
        app.use("/graphql", graphqlHTTP({
            schema,
            graphiql: true
        }));
        

        app.listen(3001, () => {
            console.log("Server running on port 3001");
        });
    } catch (err) {
        console.error("Error during Data Source initialization", err);
    }
};

main().catch((err) => {
    console.error("Main function error", err);
});
