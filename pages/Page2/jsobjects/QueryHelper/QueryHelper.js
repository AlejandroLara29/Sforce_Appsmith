export default {
	getWhereCountry (){
		if (!!CountrySelector.selectedOptionValue){
			return `WHERE country = '${CountrySelector.selectedOptionValue}'`
		}
		return ``
	}
}