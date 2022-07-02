var blvdcred = document.getElementById('blvdcred');
// perform modal actions on modal is shown
blvdcred.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever');
    // Update the modal's content.
    var modalBodyInput = blvdcred.querySelector('.modal-body input');
    //example to set input values 
    document.getElementById('blvd_api').value = "blvd api key";
    document.getElementById('blvd_location').value = "blvd location";
    // document.getElementById('blvd_secret').value = blvd_secret;
    // document.getElementById('blvd_bussiness_id').value = blvd_bussiness_id;
    // document.getElementById('v1tk').value = v1tk;
    // document.getElementById('calendar_id').value = calendar_id;
    // document.getElementById('sender_email_address').value = sender_email_address;
    modalBodyInput.value = "recipient"
})

document.getElementById('credential-form').addEventListener('submit', function (event) {
    event.preventDefault();
    //your submit button actions here
    console.log(document.getElementById('blvd_secret').value);
});

