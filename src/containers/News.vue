<template>
  <transition name="slide-fade">
    <div class="container">
      <InformationWidget :info="information"/>
    </div>
  </transition>
</template>

<script>
  import InformationWidget from '../componentsOLD/InformationWidget'
  import olympiadImg from '../../../static/img/news/Variant3_olymp.jpg'
  import opendoorsDayImg from '../../../static/img/news/opendoors-day.jpg'

  export default {
    components: { InformationWidget },
    name: 'News',
    data() {
      return {
        information: [
          {
            id: 1,
            img: olympiadImg,
            title: 'Питання і відповіді про контрактну форму навчання в ХНУРЕ',
            description: 'Зарахування до лав студентів вищого навчального закладу - завжди хвилюючий процес, під час якого навіть самі впевнені.',
            value: 'questions'
          },
          {
            id: 2,
            img: opendoorsDayImg,
            title: 'Розклад вступних іспитів в ХНУРЕ 2017',
            description: 'Розклад вступних іспитів ХНУРЕ і додаткових вступних випробувань для вступу',
            value: 'exams'
          },
        ],
      }
    },
    created() {

    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
