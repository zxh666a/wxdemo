import { HTTP } from '../utils/http.js'
class LikeModel extends HTTP {
	getlikeInfo(behavior,artID,category){
	  let url = behavior == 'like'?'like':'like/cancel';
	  this.request({
	    url:url,
	    method:'POST',
	    data:{
	      art_id:artID,
	      type:category
	    },
	  })
	}
	getlike(artID, category,sCallback) {
		this.request({
			url: `classic/${category}/${artID}/favor`,
			method: 'GET',
			data: {
				id: artID,
				type: category
			},
			successs:(res)=>{
				sCallback(res)
			}
		})
	}
}
export { LikeModel }