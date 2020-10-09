import "reflect-metadata";
import {createConnections} from "typeorm";
import path from "path";

 const connection =  async () => {
  await createConnections([{
    name: "db1Connection",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "db1",
    entities: [path.join(__dirname, "../entity/*{.js,.ts}")],
    synchronize: true
}, {
    name: "db2Connection",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "db2",
    entities: [path.join(__dirname, "../entity/*{.js,.ts}")],
    synchronize: true
}])
}

export default connection;