(function () {
    "use strict"

let employee = require('appQemployeeApi.js')


    function getEmployeeById(id) {
        $.ajax({
            method: "GET",
            url: "/api/employees/" + id
        })
        .done(student => {
            console.log(employee)
        });
    }

    $("form").on("submit", event => {
        let id = $("#employeeId").val()
        getEmployeeById(id)
        return false
    })

    function escreverEmployee(employee){
        
        escreverNome(employee.name);
        escreverEmail(employee.email);
        escreverTrabalho(employee.titleOfJob);
        escreverIdade(employee.idade)
    }


    function escreverNome(name){
        $('#name').html(name);

    }

    function escreverEmail(email){
        $('#email').html(email);
        
    }function escreverTrabalho(titleOfJob){
        $('#titleOfJob').html(titleOfJob);
        
    }function escreverIdade(idade){
        $('#idade').html(idade);


    }
        function escreverPhoto(photo){
        $('#photo').attr('src', photo);
        
    }
        
    
    
})()