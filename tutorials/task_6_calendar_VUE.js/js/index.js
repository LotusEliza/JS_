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

            const date = this.currDateCursor; //Sat Apr 27 2019 10:40:23 GMT+0300 (Eastern European Summer Time)
            const startOfMonth = dateFns.startOfMonth(date); //Mon Apr 01 2019 00:00:00 GMT+0300 (Eastern European Summer Time)
            const endOfMonth = dateFns.endOfMonth(date); //Tue Apr 30 2019 23:59:59 GMT+0300 (Eastern European Summer Time)

            const days = dateFns.eachDay(startOfMonth, endOfMonth).map((day) => ({   //(30) [{…},...     0: {date: Sun Mar 31 2019 00:00:00 GMT+0200 (Eastern European Standard Time), isCurrentMonth: false, isToday: false, isSelected: false}
                date: day,
                isToday: dateFns.isToday(day),
                isCurrentMonth:  dateFns.isSameMonth(new Date(this.currentYear, this.currentMonth), day),
                isWeekend: dateFns.isWeekend(day)

            }));
// console.log(days);
            //************************* ADD DAYS OF PREV MONTH IN THE BEGINING OF ARRAY DAYS******************************************

            let previousMonthCursor = dateFns.lastDayOfMonth(dateFns.addMonths(date, -1)); //Sun Mar 31 2019 00:00:00 GMT+0200 (Eastern European Standard Time)
            var begIndex = dateFns.getDay(days[0].date);// 1 (1 day in first week of prev month)

            if(DAY_NAMES == FROM_MON){
                begIndex = begIndex-1;
            }

            // var myDate = new Date();
            // myDate.setFullYear(2019);
            // myDate.setMonth(9);
            // myDate.setDate(1);
            // console.log(dateFns.isWeekend(myDate));

            for (let i = begIndex; i > 0; i--) {
                days.unshift({ //Добавляет элемент в начало массива:
                    date: previousMonthCursor,
                    isCurrentMonth: false,
                    isWeekend: dateFns.isWeekend(previousMonthCursor)
                });
                previousMonthCursor = dateFns.addDays(previousMonthCursor, -1); //add days :Sat Mar 30 2019 00:00:00 GMT+0200 (Eastern European Standard Time), ...
            }

            //************************* ADD DAYS OF NEXT MONTH IN THE END OF ARRAY DAYS******************************************

            const daysNeededAtEnd = (days.length % 7 > 0) ? (7 -(days.length % 7)) : 0;//4
            let nextMonthCursor = dateFns.addMonths(date, 1);//Mon May 27 2019 11:00:21 GMT+0300 (Eastern European Summer Time)
            nextMonthCursor = dateFns.setDate(nextMonthCursor, 1); //Wed May 01 2019 11:02:27 GMT+0300 (Eastern European Summer Time)

            for (let x = 1; x <= daysNeededAtEnd; x++) {//add to the end of array days next month days (4 days)
                days.push({
                    date: nextMonthCursor,
                    isCurrentMonth: false,
                    isWeekend: dateFns.isWeekend(nextMonthCursor)
                });
                nextMonthCursor = dateFns.addDays(nextMonthCursor, 1); //Thu May 02 2019 11:06:25 GMT+0300 (Eastern European Summer Time), ...
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
            this.currDateCursor = dateFns.addMonths(this.currDateCursor, 1); //Mon May 27 2019 11:20:44 GMT+0300 (Eastern European Summer Time)
        },

        previousMonth() {
            this.currDateCursor = dateFns.addMonths(this.currDateCursor, -1); //Wed Mar 27 2019 11:22:54 GMT+0200 (Eastern European Standard Time)
        },
    },

    //************* FILTER DAYS INFO {date: Sun Mar 31 2019 00:00:00 GMT+0200} TO THIS FORMAT 31 *********************

    filters: {
        formatDateToDay(val) {
            return dateFns.format(val, 'D');
        }
    },
});

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

// new Vue({
//     el: '#app2',
//     components: {
//         Calendar,
//     },
//     data: {
//         curr: new Date(),
//     },
//     computed: {
//     },
// });


// const DAY_LABELS = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
//
// const MONTH_LABELS = [
//         "January", "February", "March",
//         "April", "May", "June",
//         "July", "August", "September",
//         "October", "November", "December"];
//
// const Calendar = Vue.component('calendar', {
//   template: "#calendar",
//   data() {
//     return {
//       today: null,
//       // selectedDate: null,
//       currDateCursor: null,
//       dayLabels: null,
//     };
//     // previousMonth
//   },
//
//
//   created() {
//     this.dayLabels = DAY_LABELS;
//     // this.dayLabels = DAY_LABELS.slice();
//     this.today = new Date();
//     // this.selectedDate = this.today;
//     this.currDateCursor = this.today;
//   },
//
//   // props: {
//   //   startDate: {
//   //     required: false,
//   //     type: Date,
//   //   }
//   // },
//
//   computed: {
//
//     currentMonth() {
//       return this.currDateCursor.getMonth(); // 3 - pass this val to currentMonthLabel() function to get name of month
//     },
//
//     currentYear() {
//       return this.currDateCursor.getFullYear(); //2019
//     },
//
//     currentMonthLabel() {
//         // console.log(MONTH_LABELS[this.currentMonth]);
//       return MONTH_LABELS[this.currentMonth]; //[3] - April
//     },
//
//     daysArray() {
//
//         //************************CREATING ARRAY OF CURRENT MONTH DAYS******************************************
//
//       const date = this.currDateCursor; //Sat Apr 27 2019 10:40:23 GMT+0300 (Eastern European Summer Time)
//       const startOfMonth = dateFns.startOfMonth(date); //Mon Apr 01 2019 00:00:00 GMT+0300 (Eastern European Summer Time)
//       const endOfMonth = dateFns.endOfMonth(date); //Tue Apr 30 2019 23:59:59 GMT+0300 (Eastern European Summer Time)
//
//       const days = dateFns.eachDay(startOfMonth, endOfMonth).map((day) => ({   //(30) [{…},...     0: {date: Sun Mar 31 2019 00:00:00 GMT+0200 (Eastern European Standard Time), isCurrentMonth: false, isToday: false, isSelected: false}
//         date: day,
//         isCurrentMonth:  dateFns.isSameMonth(new Date(this.currentYear, this.currentMonth), day),
//         // isToday: dateFns.isToday(day),
//         // isSelected: dateFns.isSameDay(this.selectedDate, day)
//       }));
//
// // console.log(days);
//
//         //************************* ADD DAYS OF PREV MONTH IN THE BEGINING OF ARRAY DAYS******************************************
//
//       let previousMonthCursor = dateFns.lastDayOfMonth(dateFns.addMonths(date, -1)); //Sun Mar 31 2019 00:00:00 GMT+0200 (Eastern European Standard Time)
//       const begIndex = dateFns.getDay(days[0].date);// 1 (1 day in first week of prev month)
//
//       for (let i = begIndex; i > 0; i--) {
//         days.unshift({ //Добавляет элемент в начало массива:
//           date: previousMonthCursor,
//           isCurrentMonth: false,
//           // isToday: dateFns.isToday(previousMonthCursor),
//           // isSelected: dateFns.isSameDay(this.selectedDate, previousMonthCursor)
//         });
//         previousMonthCursor = dateFns.addDays(previousMonthCursor, -1); //add days :Sat Mar 30 2019 00:00:00 GMT+0200 (Eastern European Standard Time), ...
//         // console.log(previousMonthCursor);
//       }
//
//         //************************* ADD DAYS OF NEXT MONTH IN THE END OF ARRAY DAYS******************************************
//
//       const daysNeededAtEnd = (days.length % 7 > 0) ? (7 -(days.length % 7)) : 0;//4
//       let nextMonthCursor = dateFns.addMonths(date, 1);//Mon May 27 2019 11:00:21 GMT+0300 (Eastern European Summer Time)
//
//       nextMonthCursor = dateFns.setDate(nextMonthCursor, 1); //Wed May 01 2019 11:02:27 GMT+0300 (Eastern European Summer Time)
//         // console.log(nextMonthCursor);
//
//       for (let x = 1; x <= daysNeededAtEnd; x++) {//add to the end of array days next month days (4 days)
//         days.push({
//           date: nextMonthCursor,
//           isCurrentMonth: false,
//           isToday: dateFns.isToday(nextMonthCursor),
//           // isSelected: dateFns.isSameDay(this.selectedDate, nextMonthCursor)
//         });
//         nextMonthCursor = dateFns.addDays(nextMonthCursor, 1); //Thu May 02 2019 11:06:25 GMT+0300 (Eastern European Summer Time), ...
//         console.log(nextMonthCursor);
//       }
//       return days;
//     }
//   },
//   // mounted() {
//   //   if (this.startDate) { //startDate in props
//   //     this.currDateCursor = this.startDate;
//   //     this.selectedDate = this.startDate;
//   //   }
//   // },
//
//   methods: {
//
//     dayClassObj(day) { //add  dynamically class to css depending on
//       return {
//         'today' : day.isToday,
//         'current': day.isCurrentMonth,
//         // 'selected': day.isSelected,
//       };
//     },
//
//     nextMonth() {
//       this.currDateCursor = dateFns.addMonths(this.currDateCursor, 1); //Mon May 27 2019 11:20:44 GMT+0300 (Eastern European Summer Time)
//       // console.log(this.currDateCursor);
//     },
//
//     previousMonth() {
//       this.currDateCursor = dateFns.addMonths(this.currDateCursor, -1); //Wed Mar 27 2019 11:22:54 GMT+0200 (Eastern European Standard Time)
//         // console.log(this.currDateCursor);
//     },
//
//     // setSelectedDate(day) {
//     //   this.selectedDate = day.date;
//     //   console.log(this.selectedDate); //Mon Mar 11 2019 00:00:00 GMT+0200 (Eastern European Standard Time) - click on any day
//     //   this.$emit('input', this.selectedDate);
//     // }
//   },
//
//     //************* FILTER DAYS INFO {date: Sun Mar 31 2019 00:00:00 GMT+0200} TO THIS FORMAT 31 *********************
//
//   filters: {
//     formatDateToDay(val) {
//       return dateFns.format(val, 'D');
//     }
//   },
// });
//
//
// new Vue({
//   el: '#app',
//   components: {
//     Calendar,
//   },
//   data: {
//     curr: new Date(),
//   },
//   computed: {
//     // formattedDate() {
//     //   return dateFns.format(this.curr, 'MM/DD/YYYY');
//     // }
//   },
// });