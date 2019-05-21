<template>
    <div class="calendar">
        <header class="header">
            <button @click="previousMonth"><</button>
            <h3>{{ currentMonthLabel }} {{ currentYear }}</h3>
            <button @click="nextMonth">&gt;</button>
        </header>

        <div class="headings" v-for="dayLabel in dayLabels">
            {{ dayLabel }}
        </div>

        <div v-for="(day, index) in daysArray"
             class="day"
             :class="dayClassObj(day)">
            <!--<button @click="setSelectedDate(day)">-->
            <!--{{ day.date | formatDateToDay }}-->
            <!--</button>-->
            <button @click="setSelectedDate(day)">
                {{ day.date | formatDateToDay }}
            </button>
        </div>
    </div>
</template>


<script>
    const FROM_SUN = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
    const FROM_MON = ['M', 'T', 'W', 'Th', 'F', 'S', 'S'];
    const DAY_NAMES = FROM_SUN;

    const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    export default {
        name: 'Calendar',
        data() {
            return {
                today: null,
                currDateCursor: null,
                dayLabels: null,
                selectedDate: null,
            };
        },

        created() {
            this.dayLabels = DAY_NAMES;
            this.today = new Date();
            this.currDateCursor = this.today;
            this.selectedDate = this.today;
        },

        computed: {

            currentMonth() {
                return this.currDateCursor.getMonth(); // 3 - pass this val to currentMonthLabel() function to get name of month
            },

            currentYear() {
                return this.currDateCursor.getFullYear(); //2019
            },

            currentMonthLabel() {
                return MONTH_NAMES[this.currentMonth]; //[3] - April
            },

            daysArray() {
                //************************CREATING ARRAY OF CURRENT MONTH DAYS******************************************

                const date = this.currDateCursor;
                const startOfMonth = dateFns.startOfMonth(date);
                const endOfMonth = dateFns.endOfMonth(date);

                const days = dateFns.eachDay(startOfMonth, endOfMonth).map((day) => ({
                    date: day,
                    isToday: dateFns.isToday(day),
                    isCurrentMonth:  dateFns.isSameMonth(new Date(this.currentYear, this.currentMonth), day),
                    isWeekend: dateFns.isWeekend(day),
                    isSelected: dateFns.isSameDay(this.selectedDate, day)
                }));

                //************************* ADD DAYS OF PREV MONTH IN THE BEGINING OF ARRAY DAYS******************************************

                let previousMonthCursor = dateFns.lastDayOfMonth(dateFns.addMonths(date, -1));
                var begIndex = dateFns.getDay(days[0].date);

                if(DAY_NAMES == FROM_MON){
                    begIndex = begIndex-1;
                }

                for (let i = begIndex; i > 0; i--) {
                    days.unshift({ //Добавляет элемент в начало массива
                        date: previousMonthCursor,
                        isCurrentMonth: false,
                        isWeekend: dateFns.isWeekend(previousMonthCursor),
                        isSelected: dateFns.isSameDay(this.selectedDate, previousMonthCursor)
                    });
                    previousMonthCursor = dateFns.addDays(previousMonthCursor, -1);
                }

                //************************* ADD DAYS OF NEXT MONTH IN THE END OF ARRAY DAYS******************************************

                const daysNeededAtEnd = (days.length % 7 > 0) ? (7 -(days.length % 7)) : 0;//4
                let nextMonthCursor = dateFns.addMonths(date, 1);
                nextMonthCursor = dateFns.setDate(nextMonthCursor, 1);

                for (let x = 1; x <= daysNeededAtEnd; x++) {//add to the end of array days next month days (4 days)
                    days.push({
                        date: nextMonthCursor,
                        isCurrentMonth: false,
                        isWeekend: dateFns.isWeekend(nextMonthCursor),
                        isSelected: dateFns.isSameDay(this.selectedDate, nextMonthCursor)
                    });
                    nextMonthCursor = dateFns.addDays(nextMonthCursor, 1);
                }
                return days;
            }
        },

        methods: {

            dayClassObj(day) { //add  dynamically class to css depending on
                return {
                    'today' : day.isToday,
                    'current': day.isCurrentMonth,
                    'weekend': day.isWeekend,
                    'selected': day.isSelected,
                };
            },

            nextMonth() {
                this.currDateCursor = dateFns.addMonths(this.currDateCursor, 1);
            },

            previousMonth() {
                this.currDateCursor = dateFns.addMonths(this.currDateCursor, -1);
            },
            setSelectedDate(day) {
                this.selectedDate = day.date;
                console.log("selected: " + this.selectedDate);
                // this.$emit('input', this.selectedDate);
            },

        },

        //************* FILTER DAYS INFO {date: Sun Mar 31 2019 00:00:00 GMT+0200} TO THIS FORMAT 31 *********************

        filters: {
            formatDateToDay(val) {
                return dateFns.format(val, 'D');
            }
        },
    }
</script>

<style scoped>
    .calendar {
        /*position:fixed;*/
        /*top: 10%;*/
        /*left: 30%;*/
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        width: 400px;
        background-color: #ededf7;
    }
    .calendar > .header {
        padding: .75rem;
        font-size: 1.25rem;
        grid-column: 1 / span 7;
        color: #24524A;
    }

    .calendar > .header button {
        border-radius: 40px;
        border: none;
        background-color: #ededf7;

        margin: 0 1rem;
        padding: .25rem .5rem;
    }

    .calendar > .headings {
        background-color: #5FBB90;
        padding: 10px;
    }

    .calendar > * {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .calendar > .day {
        color: grey;
        font-size: 1rem;
    }

    .calendar > .day.current {
        color: black;
    }

    .calendar > .day.current.today {
        border-radius: 40px;
        background-color: #FCCDB8;
    }

    .calendar > .day.weekend {
        background-color: #e6e6f4;
    //color: #24524A;
    }

    .calendar > .day::before {
        content: "";
        padding-bottom: 100%;
    }

    /*.calendar > .day button {*/
    /*color: inherit;*/
    /*background: transparent;*/
    /*border: none;*/
    /*height: 100%;*/
    /*width: 100%;*/
    /*}*/

    .text-center {
        text-align: center;
    }

    .calendar > .day.selected {
        border: 1px solid var(--blue-grey);
        background-color: #5FBB90;
    }

    .calendar > .day button {
        color: inherit;
        background: transparent;
        border: none;
        height: 100%;
        width: 100%;
    }
</style>


