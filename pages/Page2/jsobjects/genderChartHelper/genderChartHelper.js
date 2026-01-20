export default {
	getData(){
		return gender_distribution_by_country.data.map(dt => ({
			x: dt.gender,
			y: dt.count
		}));
	}
}