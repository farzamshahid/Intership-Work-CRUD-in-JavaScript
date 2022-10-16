Employeearr = []
function addEmployee() {
    disableBtnAdd()
    let Employeerecord = {
        name: '',
        id: 0,
        gender: document.getElementById('gender').value,
        cnic: document.getElementById('cnic').value,
        cellno: document.getElementById('cellno').value,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        lastdegreename: document.getElementById('lastdegreename').value,
        emergencycontactno: document.getElementById('emergencycontactno').value,
        emergencycontactname: document.getElementById('emergencycontactname').value,
    }
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let NameInput = firstname + ' ' + lastname
    name = NameInput;
    if (document.getElementById('firstname').value == '' || document.getElementById('firstname').value == null || document.getElementById('lastname').value == '' || document.getElementById('lastname').value == null || gender.value == '' || gender.value == null || cnic.value == '' || cnic.value == null || cellno.value == '' || cellno.value == null || address.value == '' || address.value == null || lastdegreename.value == '' || lastdegreename.value == null || emergencycontactname.value == '' || emergencycontactname.value == null || emergencycontactno.value == '' || emergencycontactno.value == null || city.value == '' || city.value == null) {
        if (firstname.value == '' || firstname.value == null) {
            document.getElementById('firstname-error').style.display = 'block'
            document.getElementById('firstname-error').style.color = 'red'
        }
        else {
            document.getElementById('firstname-error').style.display = 'none'

        }
        if (lastname.value == '' || lastname.value == null) {
            document.getElementById('lastname-error').style.display = 'block'
            document.getElementById('lastname-error').style.color = 'red'

        }
        else {
            document.getElementById('lastname-error').style.display = 'none'

        }
        if (gender.value == '' || gender.value == null) {
            document.getElementById('gender-error').style.display = 'block'
            document.getElementById('gender-error').style.color = 'red'

        }
        else {
            document.getElementById('gender-error').style.display = 'none'

        }
        if (cnic.value == '' || cnic.value == null) {
            document.getElementById('cnic-error').style.display = 'block'
            document.getElementById('cnic-error').style.color = 'red'

        } else {

            document.getElementById('cnic-error').style.display = 'none'
        }
        if (cellno.value == '' || cellno.value == null) {
            document.getElementById('cellno-error').style.display = 'block'
            document.getElementById('cellno-error').style.color = 'red'

        }
        else {

            document.getElementById('cellno-error').style.display = 'none'
        }

        if (address.value == '' || address.value == null) {
            document.getElementById('address-error').style.display = 'block'
            document.getElementById('address-error').style.color = 'red'

        }
        else {

            document.getElementById('address-error').style.display = 'none'
        }

        if (emergencycontactno.value == '' || emergencycontactno.value == null) {
            document.getElementById('emergencycontactno-error').style.display = 'block'
            document.getElementById('emergencycontactno-error').style.color = 'red'

        }
        else {

            document.getElementById('emergencycontactno-error').style.display = 'none'
        }
        if (city.value == '' || city.value == null) {
            document.getElementById('city-error').style.display = 'block'
            document.getElementById('city-error').style.color = 'red'


        }

        else {

            document.getElementById('city-error').style.display = 'none'
        }
        if (emergencycontactname.value == '' || emergencycontactname.value == null) {
            document.getElementById('emergencycontactname-error').style.display = 'block'
            document.getElementById('emergencycontactname-error').style.color = 'red'

        }
        else {

            document.getElementById('emergencycontactname-error').style.display = 'none'
        }
        if (lastdegreename.value == '' || lastdegreename.value == null) {
            document.getElementById('lastdegreename-error').style.display = 'block'
            document.getElementById('lastdegreename-error').style.color = 'red'

        }
        else {

            document.getElementById('lastdegreename-error').style.display = 'none'
        }
    }
    else {
        document.getElementById('firstname-error').style.display = 'none'
        document.getElementById('lastname-error').style.display = 'none'
        document.getElementById('gender-error').style.display = 'none'
        document.getElementById('address-error').style.display = 'none'
        document.getElementById('cellno-error').style.display = 'none'
        document.getElementById('cnic-error').style.display = 'none'
        document.getElementById('lastdegreename-error').style.display = 'none'
        document.getElementById('emergencycontactname-error').style.display = 'none'
        document.getElementById('emergencycontactno-error').style.display = 'none'
        document.getElementById('city-error').style.display = 'none'
        Employeerecord.id = Math.floor(Math.random() * 100)
        Employeearr.push(Employeerecord)
        console.log(Employeearr)
        resetForm()
    }
}
function edited() {
    let editedCnic = document.getElementById('editit').value
    let uniqueCnic = Employeearr.find((emp) => emp.cnic == editedCnic);
    disableBtnUp()
    console.log(uniqueCnic)
    if (uniqueCnic != undefined) {
        document.getElementById('firstname').value = uniqueCnic.firstname
        document.getElementById('lastname').value = uniqueCnic.lastname
        document.getElementById('gender').value = uniqueCnic.gender
        document.getElementById('cnic').value = uniqueCnic.cnic
        document.getElementById('cellno').value = uniqueCnic.cellno
        document.getElementById('address').value = uniqueCnic.address
        document.getElementById('lastdegreename').value = uniqueCnic.lastdegreename
        document.getElementById('emergencycontactno').value = uniqueCnic.emergencycontactno
        document.getElementById('emergencycontactname').value = uniqueCnic.emergencycontactname
        document.getElementById('editit').value = ''
        document.getElementById('city').value = uniqueCnic.city
    }
    else {
        alert('error not found cnic');
    }
}
function resetForm() {

    document.getElementById('firstname').value = ''
    document.getElementById('lastname').value = ''
    document.getElementById('gender').value = ''
    document.getElementById('cnic').value = ''
    document.getElementById('cellno').value = ''
    document.getElementById('address').value = ''
    document.getElementById('lastdegreename').value = ''
    document.getElementById('emergencycontactno').value = ''
    document.getElementById('emergencycontactname').value = ''
    document.getElementById('city').value = ''

}

function updated() {
    debugger
    const cnu = document.getElementById('cnic').value
    let index = Employeearr.findIndex((obj1) => obj1.cnic == cnu);
    console.log('index', index);
    if (index > -1) {
        debugger
        let Employeerecord1 = {
            id: 0,
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            gender: document.getElementById('gender').value,
            cnic: document.getElementById('cnic').value,
            cellno: document.getElementById('cellno').value,
            address: document.getElementById('address').value,
            lastdegreename: document.getElementById('lastdegreename').value,
            emergencycontactno: document.getElementById('emergencycontactno').value,
            emergencycontactname: document.getElementById('emergencycontactname').value,
            city: document.getElementById('city').value,

        }

        if (firstname.value == '' || firstname.value == null || city.value == '' || city.value == null || lastname.value == '' || lastname.value == null || gender.value == '' || gender.value == null || cnic.value == '' || cnic.value == null || cellno.value == '' || cellno.value == null || address.value == '' || address.value == null || lastdegreename.value == '' || lastdegreename.value == null || emergencycontactname.value == '' || emergencycontactname.value == null || emergencycontactno.value == '' || emergencycontactno.value == null) {
            if (firstname.value == '' || firstname.value == null) {
                document.getElementById('firstname-error').style.display = 'block'
                document.getElementById('firstname-error').style.color = 'red'
            }
            else {
                document.getElementById('firstname-error').style.display = 'none'

            }
            if (lastname.value == '' || lastname.value == null) {
                document.getElementById('lastname-error').style.display = 'block'
                document.getElementById('lastname-error').style.color = 'red'

            }
            else {
                document.getElementById('lastname-error').style.display = 'none'

            }
            if (gender.value == '' || gender.value == null) {
                document.getElementById('gender-error').style.display = 'block'
                document.getElementById('gender-error').style.color = 'red'

            }
            else {
                document.getElementById('gender-error').style.display = 'none'

            }
            if (cnic.value == '' || cnic.value == null) {
                document.getElementById('cnic-error').style.display = 'block'
                document.getElementById('cnic-error').style.color = 'red'

            } else {

                document.getElementById('cnic-error').style.display = 'none'
            }
            if (cellno.value == '' || cellno.value == null) {
                document.getElementById('cellno-error').style.display = 'block'
                document.getElementById('cellno-error').style.color = 'red'

            }
            else {

                document.getElementById('cellno-error').style.display = 'none'
            }

            if (address.value == '' || address.value == null) {
                document.getElementById('address-error').style.display = 'block'
                document.getElementById('address-error').style.color = 'red'

            }
            else {

                document.getElementById('address-error').style.display = 'none'
            }

            if (emergencycontactno.value == '' || emergencycontactno.value == null) {
                document.getElementById('emergencycontactno-error').style.display = 'block'
                document.getElementById('emergencycontactno-error').style.color = 'red'

            }
            else {

                document.getElementById('emergencycontactno-error').style.display = 'none'
            }
            if (emergencycontactname.value == '' || emergencycontactname.value == null) {
                document.getElementById('emergencycontactname-error').style.display = 'block'
                document.getElementById('emergencycontactname-error').style.color = 'red'

            }

            else {

                document.getElementById('emergencycontactname-error').style.display = 'none'
            }
            if (city.value == '' || city.value == null) {
                document.getElementById('city-error').style.display = 'block'
                document.getElementById('city-error').style.color = 'red'


            }

            else {

                document.getElementById('city-error').style.display = 'none'
            }

            if (lastdegreename.value == '' || lastdegreename.value == null) {
                document.getElementById('lastdegreename-error').style.display = 'block'
                document.getElementById('lastdegreename-error').style.color = 'red'

            }
            else {

                document.getElementById('lastdegreename-error').style.display = 'none'
            }
        }
        else {
            document.getElementById('firstname-error').style.display = 'none'
            document.getElementById('lastname-error').style.display = 'none'
            document.getElementById('gender-error').style.display = 'none'
            document.getElementById('address-error').style.display = 'none'
            document.getElementById('cellno-error').style.display = 'none'
            document.getElementById('cnic-error').style.display = 'none'
            document.getElementById('lastdegreename-error').style.display = 'none'
            document.getElementById('emergencycontactname-error').style.display = 'none'
            document.getElementById('emergencycontactno-error').style.display = 'none'
            document.getElementById('city-error').style.display = 'none'

            console.log(Employeerecord1)
            Employeearr.push(Employeerecord1);
            resetForm()
        }
    }
    else {
        alert('not match')
        console.log(Employeearr)
    }
}
function disableBtnAdd() {
    document.getElementById("btnad").disabled = false;
    document.getElementById("btnup").disabled = true;

}
function disableBtnUp() {
    document.getElementById("btnup").disabled = false;
    document.getElementById("btnad").disabled = true;
}
function deletefunction() {
    let del = document.getElementById('delete').value
    let deletedemp = Employeearr.find((emp) => emp.cnic == del);
    if (deletedemp != undefined) {
        let deleted = Employeearr.splice(deletedemp, 1)
        alert('record-deleted')
        console.log(deleted)
    }
    else {
        alert('record not deleted')
    }
}
function searchbynames() {
    let searchEmpbyname = document.getElementById('searchEmpbyname').value
    let namesOfemp = Employeearr.filter((emp1) => emp1.name == searchEmpbyname);
    if (namesOfemp != undefined) {


        console.log(namesOfemp)
    } else {
        alert('name of emp is not found')
    }
}