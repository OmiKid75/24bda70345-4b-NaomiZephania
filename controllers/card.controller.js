import * as cardService from "../services/card.service.js";

const getCards = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const result = cardService.getCards(page, limit);
  res.json(result);
};

const getCardById = (req, res) => {
  const id = parseInt(req.params.id);
  const card = cardService.getCardById(id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json(card);
};

const createCard = (req, res) => {
  const { suit, value, collection } = req.body;

  if (!suit || !value || !collection) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newCard = cardService.createCard({ suit, value, collection });
  res.status(201).json(newCard);
};

const updateCard = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedCard = cardService.updateCard(id, req.body);

  if (!updatedCard) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json(updatedCard);
};

const deleteCard = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedCard = cardService.deleteCard(id);

  if (!deletedCard) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json({ message: "Card deleted successfully" });
};

export {
  getCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard
};
