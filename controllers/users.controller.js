const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, name = 'Rafa', apiKey } = req.query;
    res.json({
        msg: 'get API - Controlador',
        q,
        name,
        apiKey
    });
};

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post API - Controlador',
        body
    });
};

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - Controlador',
        id
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
};

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete }