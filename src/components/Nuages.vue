<template>
<div>

    <div class="container mt-5">
        <div class="row">

            <div v-for="nuage in nuages" :key="nuage.id" class="col-md-4 mb-4">
                <a href="#" class="card-link">
                    <div class="card bg-dark text-white" @mouseover="showDescription(nuage.id)" @mouseleave="unShowDescription()">
                        <img v-bind:src="nuage.img" :id="nuage.id" :class="{fond: hoverId === nuage.id}" class="card-img" width="300px" height="300px" alt="Card Image">
                        <div class="card-img-overlay">
                            <h5 class="card-title">{{ nuage.name }}</h5>
                            <p v-show="showInfo && hoverId === nuage.id" >{{ nuage.description }}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

</div>

</template>



<script>



export default {
    name: 'TheNuages',
    data(){
        return{
            nuages:[
                {id: 1, name: "Cumulus", img: require("../assets/images/cumulus.jpeg"), description:"Nuage séparé à extension verticale que l'on retrouve à une altitude allant d'une centaine de mètres du sol à 5 000 mètres. Blanc au niveau des parties éclairées par le soleil, base souvent plus sombre."},
                {id: 2, name: "Cumulonimbus", img: require("../assets/images/cumulonimbus.jpg"), description:"C'est le nuage d'orage. Sa base aux alentours de 300 à 1 000 mètres peut s'étendre verticalement au-delà de 10 000 mètres (jusqu'à la stratosphère où son sommet s'étend, formant une enclume)."},
                {id: 3, name: "Cirrus", img: require("../assets/images/cirrus.jpg"), description:"Nuage constitué de cristaux de glace que l'on retrouve à une altitude supérieure à 6 000 mètres. Caractéristique d'un voile nuageux peu dense, avec aspect fibreux, sous forme de filaments blancs."},
                {id: 4, name: "Mammatus", img: require("../assets/images/mammatus.jpg"), description:""}

            ],
            showInfo: false,
            hoverId: null
        }  
    },
    methods:{
        showDescription(id){
            this.showInfo = true;
            this.hoverId = id;

        },
        unShowDescription(){
            this.showInfo = false;
            this.hoverId = null
        }
    }
}

</script>

<style scoped>
.fond{
    background-color: black;
    opacity: 50%;
}
</style>
