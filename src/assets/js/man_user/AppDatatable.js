    /*
    Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
    Version: 4.3.0
    Author: Sean Ngu
    Website: http://www.seantheme.com/color-admin-v4.3/admin/
    */
    var handleDataTableResponsive = function() {
        "use strict";
        if ($("#data-table-responsive").length !== 0) {
            $("#data-table-responsive").DataTable({
                responsive: true,
                language: {
                    "lengthMenu": "Mostrar _MENU_ registros por página",
                    "zeroRecords": "No se encontraron registros",
                    "info": "Mostrando página _PAGE_ de _PAGES_",
                    "infoEmpty": "No hay registros disponibles",
                    "infoFiltered": "(filtered from _MAX_ total records)",
                    "search": "Buscar",
                    "paginate": {
                        "previous": "<",
                        "next": ">",
                        },
                    },
                bLengthChange: true,
                iDisplayLength: 10,
                aLengthMenu: [10, 15, 25, 50],
                bDestroy: true,
                bProcessing: true,
                bServerSide: false,
                sAjaxSource: 'http://localhost:8082/example-app/public/api/getUsers',
                aoColumns: [
                    {"mData":"id"},
                    {"mData":"name"},
                    {"mData":"email"},
                    {"mData":"actions"}
                ],
                bPaginate: true,
                bFilter: true,
                searching: true,
            })
        }
    };
    var TableManageResponsive = function() {
        "use strict";
        return {
            init: function() {
                handleDataTableResponsive()
            }
        }
    }()