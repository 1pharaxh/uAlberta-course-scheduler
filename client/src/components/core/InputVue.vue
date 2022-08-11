<template>
    <div>
        <v-card max-width="90vw" color="cyan darken-3" dark :loading="isUpdating" rounded="xl" elevation="12">
            <template slot="progress">
                <v-progress-linear  color="lime darken-1" rounded height="6" indeterminate></v-progress-linear>
            </template>
            <v-img  height="200" src="../../assets/2.png"> 
                <v-row
                    class="pa-4"
                    align="center"
                    justify="center"
                >
                    <v-col class="text-center">
                        <h3 class="text-h4 font-weight-medium">
                            Type your courses
                        </h3>
                        <span class="grey--text text--lighten-1">This app only supports upto 5 courses</span>
                    </v-col>
                </v-row>
            </v-img>
            <v-form v-model="valid"  ref="form">
                <v-container>
                    <v-row>
                        <v-col class="ma-5" v-for="(item, index) in chipArr" :key="index">
                            <div class="text-center">
                                <v-chip
                                    v-if="chip"
                                    class="ma-2"
                                    close
                                    color="amber lighten-2"
                                    outlined
                                    @click:close="remove(item)"
                                >
                                    <v-icon left>mdi-book</v-icon>
                                    {{ item }}
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="courseName"
                                :rules="courseNameRules"
                                :counter="7"
                                label="Course Name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="courseNumber"
                                :rules="courseNumberRules"
                                :counter="3"
                                label="Course Number"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            class="d-flex"
                            cols="12"
                            sm="12"
                        >
                            <v-select
                                :items="items"
                                label="Choose Semester"
                                outlined
                                v-model="selected"
                                :rules="semesterRules"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn rounded color="light-blue darken-2" class="mr-4" @click="submit" :disabled="isDisabled">
                                Submit
                            </v-btn>
                        </v-col>
                        <v-col >
                            <v-btn rounded outlined color="grey lighten-5" class="mr-4" @click="add" :disabled="isDisabled2">
                                <v-icon left>mdi-plus</v-icon>
                                Add
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
        <v-slide-x-transition>
            <div v-if="showTable" class="text-center">
                <h4 class="ma-5 text-h2 font-weight-medium">Here's what I came up with..📑</h4>
                <div v-for="(data, index) in tableData" :key="index">
                    <TableVue class="mt-12" :data="data"/>
                </div>
            </div>
        </v-slide-x-transition>
    </div>
</template>
<script>
import TableVue from './TableVue.vue';
import axios from 'axios'
export default {
    components: {
        TableVue
    },
    data () {
        let currYear = parseInt(`${new Date().getFullYear()}`.slice(-2))
        return {
            selected: '',
            isDisabled: false,
            isDisabled2: false,
            chipArr: [],
            tableData: [],
            showTable: false,
                isUpdating: false,
                items: ['Fall 20'+currYear, 'Winter 20'+currYear+1,],
            chip: true,
            valid: false,
            courseName: '',
            courseNameRules: [
                v => !!v || 'Course Name is required',
                v => (v && v.length <= 7) || 'Course Name must be less than 7 characters'
            ],
            courseNumber: '',
            courseNumberRules: [
                v => !!v || 'Course Number is required',
                v => Number.isInteger(parseInt(v)) || 'Course Number must be a number',
            ],
            semesterRules: [
                v => !!v || 'Semester is required',
            ],
            }
        },
        methods: {
            remove (item) {
                const index = this.chipArr.indexOf(item)
                if (index >= 0) this.chipArr.splice(index, 1)
            },
            async submit() {
                let currYear = parseInt(`${new Date().getFullYear()}`.slice(-2))
                let url = this.selected[0] === 'F' ? 'https://exprescoursesapi.herokuapp.com/get/fa/'+currYear+'/' : 
                    'https://exprescoursesapi.herokuapp.com/get/wi/'+(currYear+=1)+'/'
                for (let i = 0; i < this.chipArr.length; i++) {
                url += this.chipArr[i] + '/'
                }
                this.chipArr, this.tableData = []
                this.selected = ''
                this.isUpdating = true
                this.showTable = false
                this.isDisabled = true
                this.isDisabled2 = true
                let  response = await axios.get(url)
                response = await axios.get(url)
                this.tableData = response.data
                this.showTable = true
                this.isUpdating = false
                this.isDisabled = false
                this.isDisabled2 = false
                this.chipArr = []
                this.$refs.form.reset()
                // console.log(this.tableData)

            },
            add () {
                this.chipArr.push(this.courseName.toUpperCase() + '-' + this.courseNumber)
                this.courseName = ''
                this.courseNumber = ''
                this.chip = true
                this.isDisabled = this.chipArr.length === 6 ? true : false
                this.isDisabled2 = this.chipArr.length === 5 ? true : false
            }
        },
}
</script>

<style scoped>

h3 {
    color: #F5F0BB;
}
h4 {
    color: #006064
}

</style>