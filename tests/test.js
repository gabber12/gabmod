var expect = chai.expect;
describe("modal show close", ()=>{
	let modal = new Modal({
		id:'myModal'
	});
	after(()=>{
		
	});
	it("should not be displayed initially", () =>{
		var el = document.getElementById('myModal');
		expect(el.style.visibility).to.equal('hidden');   
	});
	it("should be displayed when show called", () =>{
		var el = document.getElementById('myModal');
		modal.show();
		expect(el.style.visibility).to.equal('visible');   
	});
	it("should be hidden when close called", () =>{
		var el = document.getElementById('myModal');
		modal.show();
		modal.close();
		expect(el.style.visibility).to.equal('hidden');   
	});
});


