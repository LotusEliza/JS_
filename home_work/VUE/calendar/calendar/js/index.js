
//**************************** Choose from what day the week will start:

const FROM_SUN = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
const FROM_MON = ['M', 'T', 'W', 'Th', 'F', 'S', 'S'];
const DAY_NAMES = FROM_MON;

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calendar = Vue.component('calendar', {
    template: `
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
            {{ day.date | formatDateToDay }}`,
        
    data() {
        return {
            today: null,
            currDateCursor: null,
            dayLabels: null,
        };
    },

    created() {
        this.dayLabels = DAY_NAMES;
        this.today = new Date();
        this.currDateCursor = this.today;
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
                isWeekend: dateFns.isWeekend(day)

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
                    isWeekend: dateFns.isWeekend(previousMonthCursor)
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
                    isWeekend: dateFns.isWeekend(nextMonthCursor)
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
            };
        },

        nextMonth() {
            this.currDateCursor = dateFns.addMonths(this.currDateCursor, 1);
        },

        previousMonth() {
            this.currDateCursor = dateFns.addMonths(this.currDateCursor, -1);
        },
    },

    //************* FILTER DAYS INFO {date: Sun Mar 31 2019 00:00:00 GMT+0200} TO THIS FORMAT 31 *********************

    filters: {
        formatDateToDay(val) {
            return dateFns.format(val, 'D');
        }
    },
});

//******************************************************************************************8888
//***********************************************************************************************
//************************************************************************************************


new Vue({
    el: '#app',
    components: {
        Calendar,
    },
    data: {
    },
    computed: {
    },
});