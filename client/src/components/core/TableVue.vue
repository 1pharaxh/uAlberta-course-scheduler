<template>
  <div>
    <v-sheet height="500" width="90vw">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :short-weekdays="true"
        now='1'
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        :day-format="dayFormat"
        @change="getEvents"
        :first-interval= 'first'
        :interval-count= 'count'
      >
      </v-calendar>
    </v-sheet>
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    props: {
      data: {
        type: Array
      }
    },
    data () {
      let name = this.data.map(item => item.courseName)
      return {
        type: 'week',
        mode: 'stack',
        weekday: [1, 2, 3, 4, 5],
        value: '',
        events: [],
        colors: this.shuffle(['blue', 'indigo', 'deep-purple', 'red lighten-1', 'cyan', 'green', 'orange', 'grey darken-1', 'teal lighten-3', 'pink lighten-2']),
        names: name,
        first: 7,
        count: 13
      }
    },
    methods: {
      shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
      },
      dayFormat(e) {
        e = ''
        return e;
      },
      getEvents ({ start, end }) {
        const format = "YYYY-MM-DD"
        let daysArr = ['M', 'T', 'W', 'H', 'F'];
        let daysMap = {}
        for (let i = 0; i < end.day-start.day + 1; ++i) {
          daysMap[daysArr[i]] =  moment(start.date).add(i, 'days').format(format)
        }
        const events = []
        for (let i = 0; i < this.data.length; i++){
          let beginTime = this.data[i].time.split('-', 1)[0].replace(/\s/g, "")
          this.first = parseFloat(beginTime.split(':')) - 1
          let endTime = this.data[i].time.split('-', 2)[1].replace(/\s/g, "")
          let days = this.data[i].days.split('')
          days = days.map(day => {
            return daysMap[day]
          })
          for (let el in days) {
            console.log()
            events.push({
              name: this.names[i],
              color: this.colors[i],
              timed: true,
              start: `${days[el]}T${beginTime}:00`,
              end: `${days[el]}T${endTime}:00` ,
            })
          }
        }
        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>
<style scoped lang="scss">
</style>