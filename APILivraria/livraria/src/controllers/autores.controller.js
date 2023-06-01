import autor from "../models/Autor.js";

class AutoresController {
  static listarAutores = (req, res) => {
    autor.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static listarAutorPorId = (req, res) => {
    const id = req.params.id;

    autor.findById(id, (err, autores) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do autor não localizado.` });
      } else {
        res.status(200).send(autores);
      }
    });
  };

  static cadastrarAutor = (req, res) => {
    let novoAutor = new autor(req.body);

    novoAutor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar autor.` });
      } else {
        res.status(201).send(novoAutor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autor.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autor.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor remvido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AutoresController;
