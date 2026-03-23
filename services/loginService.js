export async function loginService(email, password) {
    if (email !== "teste@teste.com" || password !== "123456") {
        return { success: false, message: "Usuario ou senha incorretos" };
    }
    return {
        success: true,
        data: {
            token: "fakeToken",
            user: {
                id: 1,
                email,
                name: "Test User"
            },
            message: "Login successful"
        }
    };
}