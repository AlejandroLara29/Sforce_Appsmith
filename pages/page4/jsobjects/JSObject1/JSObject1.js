export default {
	async myFun2 () {
		let id = Table1.selectedRow.id;
		console.log("Select Id", id)
		const userdetails = await user_details.run({id:id})
		await storeValue('pettrus',userdetails)
		console.log("Testing after query run", userdetails)
	},
	syncFunc () {
		let id = Table1.selectedRow.id;
		console.log("Select Id", id)
		user_details.run({id: id}).then(data => {
			storeValue('pettrus',data)
		}).then()
		//take calculation or manipulate data here
		console.log("Testing after query run")
	}
}