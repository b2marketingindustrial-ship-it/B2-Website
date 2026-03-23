import {loginController} from "../../controllers/loginController";

export default async function handler(req, res) {
    return loginController(req, res);
}