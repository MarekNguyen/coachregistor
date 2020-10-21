<template>
<section>
    <div>
        Filter
    </div>
    <section>
        <app-card>
            <div class="controls">
                <app-button mode="outline">Refresh</app-button>
                <app-button link :to="'/register'">Register as Coach</app-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName" :lastName="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
            </ul>
            <h3 v-else>No Coaches Found</h3>
        </app-card>
    </section>
</section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
export default {
    components: {
        CoachItem
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches']
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        }
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>
