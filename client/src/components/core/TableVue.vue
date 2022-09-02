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
        @click:event="onEventClick"
        first-interval= '7'
        interval-count= '12'
      >
      </v-calendar>
      <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text class="mb-1 pb-1 text-h6 font-weight-medium text-center">
              🎓 {{ selectedEvent.fullName}}
            </v-card-text>
            <v-divider length="10px" thickness="5"></v-divider>
            <v-card-text class="mb-0 pb-0 mt-1 pt-1 text-h7 font-weight-medium" >
              ⌚ {{ showTime(selectedEvent.start)}} - {{ showTime(selectedEvent.end)}}
            </v-card-text>
            <v-card-text class="mb-0 pb-0 mt-1 pt-1 text-h7 font-weight-medium" v-if="selectedEvent.lectureName">
              📔 {{ selectedEvent.lectureName }}
            </v-card-text>
            <v-card-text class="mb-0 pb-0 mt-1 pt-1 text-h7 font-weight-medium" v-if="selectedEvent.labName">
              🧪 {{ selectedEvent.labName }}
            </v-card-text>
            <v-card-text class="mb-0 pb-0 mt-1 pt-1 text-h7 font-weight-medium" v-if="selectedEvent.seminarName">
              🏫 {{ selectedEvent.seminarName }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
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
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
      }
    },
    methods: {
      showTime (time){
        try {
          return time.split('T')[1].slice(0, -3)
        }
        catch(e) {
          return 
        }
      },
      onEventClick({nativeEvent, event}) {
        const open = () => {
          this.selectedEvent = event;
          this.selectedElement = nativeEvent.target;
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true));
        }
        if (this.selectedOpen){
          this.selectedOpen = false;
          requestAnimationFrame(() => requestAnimationFrame(() => open()));
        } else {
          open();
        }
        nativeEvent.stopPropagation();
      },
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
        for (let i = 0; i < Math.abs(end.day-start.day) + 1; ++i) {
          daysMap[daysArr[i]] =  moment(start.date).add(i, 'days').format(format)
        }
        const events = []
        for (let i = 0; i < this.data.length; i++){
          let beginTime = this.data[i].time.split('-', 1)[0].replace(/\s/g, "")
          let endTime = this.data[i].time.split('-', 2)[1].replace(/\s/g, "")
          let days = this.data[i].days.split('')
          days = days.map(day => {
            return daysMap[day]
          })
          for (let el in days) {
            events.push({
              fullName:  this.data[i].courseFullName,
              lectureName: this.data[i].lectureName,
              labName: this.data[i].labName,
              seminarName: this.data[i].seminarName,
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