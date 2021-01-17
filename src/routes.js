const { Router } = require("express");
const router = Router();
const axios = require("axios");

const api_url = "http://localhost:3000/"

// Routes

router.get('/', async (req, res) => {
    const data = await axios.get(api_url);
    return res.render("index", { "title": "Main", "contacts": data.data })

});

router.post('/', async (req, res) => {
    const data = await axios({
        method: 'post',
        url: api_url + 'create',
        data: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }
    });
    return res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
    const user = await axios.get(api_url + req.params.id);
    console.log(user.data);
    return res.render("edit", { user: user.data[0] })
});

router.post("/save/:id", async (req, res) => {
    const save = await axios({
        method: 'put',
        url: api_url + req.params.id,
        data: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }
    });
    return res.redirect("/");
});

router.get("/delete/:id", async (req,res) => {
    const query = await axios({
        method: 'delete',
        url: api_url + req.params.id,
    });
    return res.redirect("/");
})

// Export

module.exports = router;