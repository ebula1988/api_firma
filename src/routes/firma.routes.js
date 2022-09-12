import{Router} from "express";
import { methods as firmaController } from "../controllers/firma.controllers";


const router = Router();



///router.get("/", firmaController.getFirmas )
router.post("/", firmaController.addFirma);
router.get("/:identificacion",firmaController.getFirma );







export default router; 

