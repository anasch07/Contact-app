var i = 0;
var contacts = [];


function showcontact(contacts, arrayOfContacts) {
    var n = arrayOfContacts.length;
    for (i = 0; i < n - 1; i++) {
        var c = arrayOfContacts[i];
        console.log(c.fname);
        console.log(c.lname);
        console.log(c.state);
        console.log(c.street);
    }
}

function hideContactDisplay() {
    event.preventDefault();
    $("#contact-display").hide();
}

function PhoneNumber(phone_number_value) {
    this.phone_number = phone_number_value;
}

function Address(street_value, city_value, state_value) {
    this.street = street_value;
    this.city = city_value;
    this.state = state_value;
}

function Contact(first_name_value, last_name_value, phone_number_object_1, address_object_1) {
    this.first_name = first_name_value;
    this.last_name = last_name_value;
    this.phone_numbers = [phone_number_object_1];
    this.addresses = [address_object_1];
}

function storeContactInfo() {

    var personFirstName = document.getElementById("first-name").value;
    var personLastName = document.getElementById("last-name").value;
    var personPhoneNumber1 = document.getElementById("phone-number-1").value;
    var personStreet1 = document.getElementById("street-1").value;
    var personCity1 = document.getElementById("city-1").value;
    var personState1 = document.getElementById("state-1").value;

    if (personLastName === "" || personFirstName === "" || personPhoneNumber1 === "") {
        alert("Please enter at least a first name, last name and phone number!")
    }

    var PhoneNumber1 = new PhoneNumber(personPhoneNumber1);
    //Place of PhoneNumber2
    var Address1 = new Address(personStreet1, personCity1, personState1);
    //Place ofPhoneNumber2;

    var NewContact = new Contact(personFirstName, personLastName, PhoneNumber1, Address1);

    contacts.push(NewContact);
    console.log(contacts);

    $("#contacts-list").show();
    $("#contacts-list").append("<li id='" + i + "'>" + personFirstName + " " + personLastName + "</li>");

    i++;
    $(".form-control").val("");
    /*
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var numero = $("#numero").val();
    var street = $("#street").val();
    var state = $("#state").val();

    var contact = Object.create(contacts);
    contact.fname = fname;
    contact.lname = lname;
    contact.numero = numero;
    contact.street = street;
    contact.state = state;
    var arrayOfContacts = [];
    arrayOfContacts[contacts.counter] = contact;
    contacts.counter = contacts.counter + 1;
    showcontact(contacts, arrayOfContacts);*/

}

function fillInContactDisplay(currentContact) {
    $("#full-name-display").text(currentContact.first_name + " " + currentContact.last_name);
    $("#first-name-display").text(currentContact.first_name);
    $("#last-name-display").text(currentContact.last_name);
    $("#phone-number-1-display").text(currentContact.phone_numbers[0].phone_number);
    $("#address-1-display").text(currentContact.addresses[0].street + ", " + currentContact.addresses[0].city + ", " + currentContact.addresses[0].state)
}


//EVENT LISETENS
$("form").submit(function(e) {
    e.preventDefault();
    storeContactInfo();

});

$("#contacts-list").on('click', 'li', function(event) {
    $("#contact-display").show();
    //function that fills in the values of the contact display with the array element corresponding to the li
    var selectedID = event.target.id;
    var selectedContact = contacts[selectedID];
    fillInContactDisplay(selectedContact);

});