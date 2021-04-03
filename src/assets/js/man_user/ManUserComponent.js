app.component('manuser-component', {
    template:
    /*html*/
    `
    <div class="panel panel-inverse" data-sortable-id="index-1">
        <div class="panel-heading">
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
            </div>
            <h4 class="panel-title">Mantenimiento de Usuarios</h4>
        </div>
        <div class="panel-body">
            <table id="data-table-responsive" class="table table-bordered responsive">
                <thead>
                    <tr>
                        <th width="1%">Id</th>
                        <th class="">Name</th>
                        <th class="">Email</th>
                        <th class="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    
    `,
    data: function(){
        return {
            
        }
    },
    methods: {
        
    }
})