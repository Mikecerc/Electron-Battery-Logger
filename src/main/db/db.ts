import mongoose from "mongoose";
const dbRoot: string = "mongodb://localhost";
const dbName: string = "logs";
const dbPort: string = "27017";
const dbUrl: string = `${dbRoot}:${dbPort}/${dbName}`;
try {
  mongoose.set("strictQuery", true);
  mongoose.connect(dbUrl);
} catch (error) {
  console.error(error);
}
