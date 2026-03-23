import { loginService } from "../services/loginService";

export async function loginController(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405)
            .json({ message: "Method not allowed" });
        }

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400) 
            .json({ message: "Email and password are required"});
        }

        const result = await loginService(email, password);

        if (!result.success) {
            return res.status(401)
            .json({message: result.message || "Falha no login"});
        }

        return res.status(200)
        .json({
            message: result.data.message || "Login realizado com sucesso",
            token: result.data.token,
            user: result.data.user
        });
    } catch (err) {
        return error(res, err.message, 500);
    }
}