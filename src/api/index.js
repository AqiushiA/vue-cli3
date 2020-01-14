// vue公用方法的二次的封装
export default {
	sSetObject: function (k, v) {
		try {
			sessionStorage.setItem(k, JSON.stringify(v));
		} catch (e) {
			console.log(e)
		}
	},
	sGetObject: function (k) {
		try {
			let v = sessionStorage.getItem(k)
			return v == null ? null : JSON.parse(v)
		} catch (e) {
			console.log(e)
		}
	},
	sRemoveObject: function (k) {
		try {
			sessionStorage.removeItem(k)
		} catch (e) {
			console.log(e)
		}
	}
}