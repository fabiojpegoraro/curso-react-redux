export default function handler(req, resp) {
    if (req.method === "GET") {
        handleGet(req, resp)
    } else {
        resp.status(405).send()
    }
}

function handleGet(req, resp) {
    const { id } = req.query
    if (id == 3) {
        resp.status(200).json({
            id: 3,
            nome: 'Nome',
            idade: 33
        })
    } else {
        resp.status(200).send()
    }

}