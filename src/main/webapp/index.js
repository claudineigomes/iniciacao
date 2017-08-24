'use strict';

angular.module('contagem-regressiva', ['timer'])

    .controller('controller', function ($scope) {


        $scope.provas = [
            {id: "0", nome: "Relatório 1 - Filosofia", data: new Date("08/23/2017")},
            {id: "1", nome: "Apresentação PSE PID", data: new Date( "09/04/2017")},
            {id: "2", nome: "Prova 1 - Distribuída", data: new Date( "09/12/2017")},
            {id: "3", nome: "Prova 1 - PID", data: new Date( "09/13/2017")},
            {id: "4", nome: "Prova 1 - Modelagem Zárate", data: new Date( "09/14/2017")},
            {id: "5", nome: "Prova 1 - Filosofia", data: new Date( "09/28/2017")},
            {id: "6", nome: "Proposta PSE PID", data: new Date( "10/04/2017")},
            {id: "7", nome: "Prova 2 - Distribuída", data: new Date( "10/11/2017")},
            {id: "8", nome: "Prova 2 - Modelagem Zárate", data: new Date( "10/25/2017")},
            {id: "9", nome: "Prova 2 - PID", data: new Date( "10/30/2017")},
            {id: "11", nome: "Apresentação PSE PID", data: new Date( "11/20/2017")},
            {id: "10", nome: "Prova 3 - Distribuída", data: new Date( "11/01/2017")},
            {id: "12", nome: "Relatório 2 - Filosofia", data: new Date( "11/21/2017")},
            {id: "13", nome: "Seminários Distribuída", data: new Date( "11/22/2017")},
            {id: "14", nome: "Prova 3 - Modelagem Zárate", data: new Date( "11/23/2017")},
            {id: "15", nome: "Trabalho Distribuída", data: new Date( "11/29/2017")},
            {id: "16", nome: "Prova 3 - PID", data: new Date( "11/29/2017")},
            {id: "17", nome: "Prova 2 - Filosofia", data: new Date( "12/05/2017")}

        ]


        $scope.checked = function (position) {

            console.log(position);
            console.log($scope.provas[position].data);
            console.log(new Date().getMilliseconds() - new Date($scope.provas[position].data).getMilliseconds());
            if ((new Date().getMilliseconds() - $scope.provas[position].data.getMilliseconds()) < 0) {
                return true;
            }
            return false;
        }

        $scope.test = function () {
            console.log("oi")
            return true
        }

    });

/*
*
* */
