const app = Vue.createApp({
    data: function(){
        return {
            point: 0,
            name: 'Andy',
            image: './assets/img/user/user-2.jpg',
            age: -5,
            permissions: [
                {id: 1, title: 'Mantenimientos', img: './assets/img/user/user-2.jpg'},
                {id: 2, title: 'Configuración', img: './assets/img/user/user-3.jpg'}
            ]
        }
    },
    methods: {
        addPoints(){
            this.point += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})