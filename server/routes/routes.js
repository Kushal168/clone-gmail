import express from "express";
import { saveSentEmails, getEmails,moveEmailsToBin,toggleStarredEmail,deleteEmails} from "../controllers/email-contoller.js";

const routes = express.Router();

routes.post('/save',saveSentEmails)
routes.get('/emails/:type',getEmails);
routes.post('/save-draft',saveSentEmails)
routes.post('/bin',moveEmailsToBin)
routes.post('/starred',toggleStarredEmail)
routes.delete('/delete',deleteEmails)

export default routes; 