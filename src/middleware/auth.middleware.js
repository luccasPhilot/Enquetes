import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {

    try {
        const { authorization } = req.headers

        if (!authorization) return res.send(401);

        const parts = authorization.split(" ");

        if (parts.lenght !== 2) return res.send(401);

        const [schema, token] = parts;

        if (schema !== "Bearer") return res.send(401);

        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) {
                return res.status(500).send({ message: "Token inválido" });
                //let user = Usuario.getById(decoded.id) Fazer a busca por usuario!
            }
            req.userId = decoded.id
            req.userTipo = decoded.tipo

            return next();
        });
    } catch (err) {
        res.status(500).send(err.message);
    }

}

module.exports = {
    authMiddleware,
}