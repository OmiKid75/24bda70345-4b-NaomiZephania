let cards = [];

const getAllCards = () => cards;

const getCardById = (id) => {
  return cards.find(card => card.id === id);
};

const createCard = (cardData) => {
  const newCard = {
    id: Date.now(),
    ...cardData
  };
  cards.push(newCard);
  return newCard;
};

const updateCard = (id, updatedData) => {
  const index = cards.findIndex(card => card.id === id);
  if (index === -1) return null;

  cards[index] = { ...cards[index], ...updatedData };
  return cards[index];
};

const deleteCard = (id) => {
  const index = cards.findIndex(card => card.id === id);
  if (index === -1) return null;

  return cards.splice(index, 1)[0];
};

export {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard
};
