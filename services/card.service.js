import {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard
} from "../models/card.model.js";

const getCards = (page = 1, limit = 10) => {
  const cards = getAllCards();
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedCards = cards.slice(startIndex, endIndex);

  return {
    totalCards,
    totalPages,
    currentPage: page,
    limit,
    cards: paginatedCards,
    next: page < totalPages ? { page: page + 1, limit } : null,
    previous: page > 1 ? { page: page - 1, limit } : null
  };
};

export {
  getCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard
};
