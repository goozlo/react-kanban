  class BoardsApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getBoards() {
        return fetch(`${this._baseUrl}/boards`,
            {
                headers: this._headers,
            })
            .then(this._checkResponse)
    }
}
export const BoardApi = new BoardsApi({
    baseUrl: 'https://6349a83e5df952851404f70d.mockapi.io/api/v1/',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});