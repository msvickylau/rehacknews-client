class SavesApi {

  static fetchAllSaves() {
    return fetch(`https://rehack-news-api.herokuapp.com/api/v1/saves`, {
      method: 'GET',
      mode: 'cors',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .catch((error) => error)
  }

  static createSave(save) {
    const request = new Request(`https://rehack-news-api.herokuapp.com/api/v1/saves`, {
      method: 'POST',
      mode: 'cors',
      credentials: "same-origin",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(save)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  }

  static deleteSave(save) {
    const request = new  Request(`https://rehack-news-api.herokuapp.com/api/v1/saves${save.id}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json'
      },
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  };

}
export default SavesApi;
