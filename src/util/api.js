import { API_URL } from './constants';

// Проверка статуса ответа от серевера апи: если статус ок, то возвращаем распарсенный json, если нет - возвращаем ошибку
export function checkResponse(response) {
  return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);
}

// Запрос к апи за списком всех досок
export const getAllBoards = () => {
  return fetch(`${API_URL}/boards`, {
    method: 'GET',
    //credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(checkResponse);
};

