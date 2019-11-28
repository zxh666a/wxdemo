import { HTTP } from "../utils/http-p.js"
class BookModel extends HTTP {
	getBookList() {
		return this.request({
			url: "book/hot_list",
			method: "GET"
		})
	}
	getBookdetail(bid) {
		return this.request({
			url: 'book/' + bid + '/detail',
			method: "GET",
			data: {
				id: bid
			}
		})
	}
	getBookshotcomment(bid) {
		return this.request({
			url: 'book/' + bid + '/short_comment',
			method: "GET",
			data: {
				book_id: bid
			}
		})
	}

	getBookfav(bid) {
		return this.request({
			url: 'book/' + bid + '/favor',
			method: "GET",
			data: {
				book_id: bid
			}
		})
	}
}
export { BookModel }