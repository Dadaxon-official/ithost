function Save() {

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;


    if (name === '' || phone === '') {
        alert('Formani to\'ldiring')

    } else {
        $('#exampleModal').modal('toggle');
        $('#Modal2').modal('toggle');
    }

}
