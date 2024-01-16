import mongoose from "mongoose";
import Category from "../models/category.model";

mongoose.connect("mongodb://localhost:27017/winestore", {
  family: 4,
});

const seedCategory = async () => {
  try {
    for (let index = 0; index < 5; index++) {
      const categoryName = "Categoria " + index;
      const newCategory = new Category({
        category_name: categoryName,
      });

      await newCategory.save();
      console.error("Categorias criada com sucesso!");
    }
  } catch (error) {
    console.error("Não foi possível realizar o seed para categorias");
  } finally {
    mongoose.disconnect();
  }
};

seedCategory();

// import mongoose from "mongoose";
// import Category from "../models/category.model";
// require("dotenv").config()

// mongoose.connect(process.env.DATABASE_URL as string)

// const seedCategory = async () => {
//   try {
//     mongoose.connection.on("connected", async () => {
//       const qtdSeeds = 5
//       for (let index = 0; index < qtdSeeds; index++) {
//         const newCategory = new Category({
//           category_name: "Categoria" + index,
//         })
//         await newCategory.save()
//       }
//       console.log("Categorias criadas com sucesso")
//       mongoose.disconnect()
//     })
//   } catch (error) {
//     console.log("ERROR:", error)
//     mongoose.disconnect()
//   }
// }

// seedCategory()
