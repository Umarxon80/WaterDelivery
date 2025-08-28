import { Pool } from "pg";
import  config  from "config";

const pool=new Pool({
    user:config.get("db.username"),
    password:config.get("db.password"),
    database:config.get("db.name"),
    host:config.get("db.host"),
    port:config.get("db.port"),
})

export default pool