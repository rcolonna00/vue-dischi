var app = new Vue(
    {
        el: '#root',
        data: {
            cds: []
        },
        methods: {

        },
        mounted () {

            axios
                .get( 'https://flynn.boolean.careers/exercises/api/array/music' )
                .then(( response ) => {
                
                    // const result = response.data.response;                
                    // console.log( result )

                    const result = response.data;
                    this.cds = result.response;
                });
            
        }
    }
)











// da copiare nel file js con le parti iniziali
// var app = new Vue(
//     {
//         el: '#root',
//         data: {
            
//         },
//         methods: {

//         },
//         mounted () {

//             axios
//                 .get( 'https://flynn.boolean.careers/exercises/api/array/music' )
//                 .then(( response ) => {
                
//                     const result = response;                
//                     console.log( result )

//                 });
            
//         }
//     }
// )