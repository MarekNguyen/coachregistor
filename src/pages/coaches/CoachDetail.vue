<template>
<section>
    <app-card>
        <h2>{{ fullName }}</h2>
        <h3>${{rate}}/hour</h3>
    </app-card>
</section>
<section>
    <app-card>
        <header>
            <h2>Interested? Reach out now!</h2>
            <app-button :link="true" :to="contactLink">Contact</app-button>
        </header>
        <router-view></router-view>
    </app-card>
</section>
<section>
    <app-card>
        <app-badge v-for="area in areas" :key="area" :type="area" :title="area">{{ area }}</app-badge>
        <p>{{ description }}</p>
    </app-card>
</section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id == this.id);
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
        },
        contactLink() {
            return '/coaches/' + this.id + '/contact'
        },
        areas() {
            return this.selectedCoach.areas
        },
        rate() {
            return this.selectedCoach.hourlyRate
        },
        description() {
            return this.selectedCoach.description
        }

    }
}
</script>
