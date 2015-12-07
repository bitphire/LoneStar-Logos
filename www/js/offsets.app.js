$( document ).ready(function() {
	var db = new PouchDB('test');
	var remoteCouch = false;

	function addTodo(text) {
		var todo = {
			_id: new Date().toISOString(),
			title: 'I farted',
			completed: false
		};
		db.put(todo).then(function (result) {
			alert('Success');
			alert(result);
			}).catch(function (err) {
				alert('Failure');
				alert(err);
		});
	}
});