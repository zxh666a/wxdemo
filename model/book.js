import { HTTP } from "../utils/http-p.js"
class BookModel extends HTTP {
	getBookList(){
		return this.request({
			url: "book/hot_list",
			method:"GET"
		})
	}
}
export { BookModel}