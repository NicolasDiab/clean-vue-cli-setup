import RestService from '../RestService'
import Book from '../../models/book'

export default {
  list () {
    return new Promise(function (resolve, reject) {
      RestService.get('books/')
        .then(response => {
          let gotBooks = [];
          for (let b of response.data) {
            const book = new Book(b.name, b.isbn, b.numberOfPages, b.country, b.released);
            gotBooks.push(book);
          }

          resolve(gotBooks);
        })
        .catch(error => {
          reject(error);
        })
    });
  }
}
