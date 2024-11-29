const { readJSONFile, writeJSONFile, idGenerator } = require("../Utils/utils");
const jwt = require("jsonwebtoken");
const userPath = "./src/Models/user-data.json";

//logique de connexion
function connexion(req, res) {
  const { useremail, password } = req.body;

  //récupération des users
  const users = readJSONFile(userPath);
  //console.log(users);

  //vérification de l'existance de l'utilisateur
  const user = users.filter(
    (el) => el.useremail == useremail && el.password == password
  );
  //console.log(user);
  const { name,  ...rest } = user[0];
  const userData = { name: name, userEmail: useremail };
  //console.log(user[0]);
  if (user.length > 0) {
    const SECRET_KEY = process.env.SECRET_KEY;
    const token = jwt.sign({ name }, SECRET_KEY, { expiresIn:  process.env.TOKEN_EXPIRESIN});
    res.status(200).json({ 
        msg: "L'utilisateur existe.", 
        user: userData, 
        token: token 
    });
    console.log(token);
  } else {
    res.json({
      statut: "Failed !",
      msg: "email ou mot de passe incorrect",
    });
  }

  //   res.json({ msg: "connexion" });
}
function inscription(req, res) {
  res.json({ msg: "inscription" });
}

module.exports = { connexion, inscription };
