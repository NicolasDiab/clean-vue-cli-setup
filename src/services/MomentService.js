import moment from 'moment';

export default {
  momentParseDate: function (date) {
    moment.locale('fr');
    if (date)
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    else
      return '';
  },
  momentParseDateToHTMLFormat: function (date) {
    if (date)
      return moment(date).format('YYYY-MM-DD');
    else
      return '';
  },
  momentParseDateToDisplay(date) {
    moment.locale('fr');
    if (date)
      return moment(date).format('ll');
    else
      return '';
  },
  momentParseDateToDisplayWithHours(date) {
    moment.locale('fr');
    if (date)
      return moment(date).format('LLL');
    else
      return '';
  },
}
