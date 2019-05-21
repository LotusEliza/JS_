const DAY_LABELS = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
const MONTH_LABELS = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"];

const Calendar = Vue.component('calendar', {
  template: "#calendar",
  data() {
    return {
      today: null,
      selectedDate: null,
      currDateCursor: null,
      dayLabels: null,
    };
  },
  created() {
    this.dayLabels = DAY_LABELS.slice();
    this.today = new Date();
    this.selectedDate = this.today;
    this.currDateCursor = this.today;
  },
  props: {
    startDate: {
      required: false,
      type: Date,
    }
  },
  computed: {
    currentMonth() {
      return this.currDateCursor.getMonth();
    },
    currentYear() {
      return this.currDateCursor.getFullYear();
    },
    currentMonthLabel() {
      return MONTH_LABELS[this.currentMonth];
    },
    daysArray() {
      const date = this.currDateCursor;
      const startOfMonth = dateFns.startOfMonth(date);
      const endOfMonth = dateFns.endOfMonth(date);
      //const days = dateFns.eachDay(startOfMonth, endOfMonth);
      
      const days = dateFns.eachDay(startOfMonth, endOfMonth).map((day) => ({
        date: day,
        isCurrentMonth:  dateFns.isSameMonth(new Date(this.currentYear, this.currentMonth), day),
        isToday: dateFns.isToday(day),
        isSelected: dateFns.isSameDay(this.selectedDate, day)
      }));

      // gen the days from last month
      let previousMonthCursor = dateFns.lastDayOfMonth(dateFns.addMonths(date, -1));
      const begIndex = dateFns.getDay(days[0].date);
      for (let i = begIndex; i > 0; i--) {
        days.unshift({
          date: previousMonthCursor,
          isCurrentMonth: false,
          isToday: dateFns.isToday(previousMonthCursor),
          isSelected: dateFns.isSameDay(this.selectedDate, previousMonthCursor)
        });
        previousMonthCursor = dateFns.addDays(previousMonthCursor, -1);
      }
      
      // gen days for next month
      const daysNeededAtEnd = (days.length % 7 > 0) ? (7 -(days.length % 7)) : 0;
      let nextMonthCursor = dateFns.addMonths(date, 1);
      nextMonthCursor = dateFns.setDate(nextMonthCursor, 1);
      for (let x = 1; x <= daysNeededAtEnd; x++) {
        days.push({
          date: nextMonthCursor,
          isCurrentMonth: false,
          isToday: dateFns.isToday(nextMonthCursor),
          isSelected: dateFns.isSameDay(this.selectedDate, nextMonthCursor)
        });
        nextMonthCursor = dateFns.addDays(nextMonthCursor, 1);
      }
      return days;
    }
  },
  mounted() {
    if (this.startDate) {
      this.currDateCursor = this.startDate;
      this.selectedDate = this.startDate;
    }
  },
  methods: {
    dayClassObj(day) {
      return {
        'today' : day.isToday,
        'current': day.isCurrentMonth,
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
      this.$emit('input', this.selectedDate);
    }
  },
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
    curr: new Date(),
  },
  computed: {
    formattedDate() {
      return dateFns.format(this.curr, 'MM/DD/YYYY');
    }
  },
});