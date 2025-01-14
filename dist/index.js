"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./src/routers/user"));
const product_1 = __importDefault(require("./src/routers/product"));
const category_1 = __importDefault(require("./src/routers/category"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const veryfyToken_1 = require("./src/middlewares/veryfyToken");
dotenv_1.default.config();
const app = (0, express_1.default)();
const LINK_MONGODB = 'mongodb+srv://thanhmanhdangfa:asdfghjkl@cluster0.jzotb.mongodb.net/kanban?retryWrites=true&w=majority&appName=Cluster0';
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/auth', user_1.default);
app.use(veryfyToken_1.veryfyToken);
app.use('/product', product_1.default);
app.use('/category', category_1.default);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(LINK_MONGODB);
        console.log('Connect to db successfully!!!');
    }
    catch (error) {
        console.error(`Can not connect to db: ${error.message}`);
        process.exit(1);
    }
});
connectDB()
    .then(() => {
    app.listen(process.env.PORT, (err) => {
        if (err) {
            throw new Error(err);
        }
        console.log(`Server is starting at http://localhost:${process.env.PORT}`);
    });
})
    .catch((error) => {
    console.error(`Error in connecting to the database: ${error.message}`);
});
//# sourceMappingURL=index.js.map