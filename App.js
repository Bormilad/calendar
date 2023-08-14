import logo from './logo.svg';
import './App.css';
import React ,{ Component } from 'react'

const date = new Date();
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

//const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let monthDays = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", 16, 17, 18,
                        "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

const weekDay = date.toString().split(" ")[0];
console.log('-----' + weekDay)

let startDate = new Date(date.getYear() + 1900, date.getMonth(), 5);

let startWeekDay = startDate.toString().split(" ")[0];
console.log("ST=" + startDate + " " + startWeekDay)

if (startWeekDay == 'Tue'){
    monthDays.unshift('-31');
}
if (startWeekDay == 'Wed'){
    monthDays.unshift('-31');
    monthDays.unshift('-30');
}

if (startWeekDay == 'Thu'){
    monthDays.unshift('-31');
    monthDays.unshift('-30');
    monthDays.unshift('-29');
}

if (startWeekDay == 'Fri'){
    monthDays.unshift('-31');
    monthDays.unshift('-30');
    monthDays.unshift('-29');
    monthDays.unshift('-28');
}

if (startWeekDay == 'Sut'){
    monthDays.unshift('-31');
    monthDays.unshift('-30');
    monthDays.unshift('-29');
    monthDays.unshift('-28');
    monthDays.unshift('-27');
}

if (startWeekDay == 'Sun'){
    monthDays.unshift('-31');
    monthDays.unshift('-30');
    monthDays.unshift('-29');
    monthDays.unshift('-28');
    monthDays.unshift('-27');
    monthDays.unshift('-25');
}

//monthDays.unshift('-31');
//monthDays.unshift('-30');
//monthDays.unshift('-29');
//monthDays.unshift('-28');
//monthDays.unshift('-27');
//monthDays.unshift('-26');

monthDays.push('-1');
monthDays.push('-2');
monthDays.push('-3');
monthDays.push('-4');
//monthDays.push('-5');
//monthDays.push('-6');

const weekDays1 = monthDays.splice(0, 7);
const weekDays2 = monthDays.splice(0, 7);
const weekDays3 = monthDays.splice(0, 7);
const weekDays4 = monthDays.splice(0, 7);
const weekDays5 = monthDays.splice(0, 7);
const weekDays6 = monthDays.splice(0, 7);
//const weekDays5 = ["29", "30", "31", "4", "5", "6", "8"];

class CalendarCl extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const date = this.props.date;
        console.log('p=' +  this.props);
        console.log('date=' + this.props.date);
//        const {str} = d.getDate();
        console.log('day=' +    this.props.date.getDate());
        const {str} = this.props.date.getDate();
        const day = this.props.date.getDate();
        const month = months[this.props.date.getMonth()];
        const monthDaysVal = monthDays[this.props.date.getMonth()];
        const year = this.props.date.getYear() + 1900;
        const cls = "ui-datepicker-today";
        return(
        <>
            <div>{day}-{month}</div>
            <div class="ui-datepicker">
              <div class="ui-datepicker-material-header">
                <div class="ui-datepicker-material-day">Среда</div>
                <div class="ui-datepicker-material-date">
                  <div class="ui-datepicker-material-day-num">{day}</div>
                  <div class="ui-datepicker-material-month">{month}</div>
                  <div class="ui-datepicker-material-year">{year}</div>
                </div>
              </div>
              <div class="ui-datepicker-header">
                <div class="ui-datepicker-title">
                  <span class="ui-datepicker-month">{day}</span>&nbsp;<span class="ui-datepicker-year">{year}</span>&nbsp;
                </div>
              </div>
              <table class="ui-datepicker-calendar">
                  <col/>
                  <col/>
                  <col/>
                  <col/>
                  <col/>
                  <col class="ui-datepicker-week-end"/>
                  <col class="ui-datepicker-week-end"/>
                <thead>
                  <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="ui-datepicker-other-month">27</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td class={cls}>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                  </tr>
                  <tr>
                      <td class={cls}>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td class="">22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                </tr>
                <tr>
                      <td>28</td>
                      <td class="">29</td>
                      <td>30</td>
                      <td>31</td>
                      <td>01</td>
                      <td>02</td>
                      <td>03</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </>
        )

    }

}

class DayCl extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const now = new Date();
        let date = this.props.date;
//        console.log("DAY=" + date);``
        let cl = now.getDate() == date? "ui-datepicker-today": "";
        if (date < 0) {
            cl = "ui-datepicker-other-month";
            date = date * -1;
        }
        return(
        <>
            <td class={cl}>
                {date}
            </td>
        </>
        )
    }
}

function App() {
  return (
    <>
        <CalendarCl date={date}/>
        <br/>
        <div class="ui-datepicker">
        <table class="ui-datepicker-calendar">
                          <col/>
                          <col/>
                          <col/>
                          <col/>
                          <col/>
                          <col class="ui-datepicker-week-end"/>
                          <col class="ui-datepicker-week-end"/>
                        <thead>
                          <tr>
                            <th scope="col" title="Понедельник">Пн</th>
                            <th scope="col" title="Вторник">Вт</th>
                            <th scope="col" title="Среда">Ср</th>
                            <th scope="col" title="Четверг">Чт</th>
                            <th scope="col" title="Пятница">Пт</th>
                            <th scope="col" title="Суббота">Сб</th>
                            <th scope="col" title="Воскресенье">Вс</th>
                          </tr>
                        </thead>
                        <tbody>

        <tr>
            {weekDays1.map((day) =>(
                <DayCl date={day}/>
            ))}
        </tr>
        <tr>
            {weekDays2.map((day) =>(
                <DayCl date={day}/>
            ))}
        </tr>
        <tr>
            {weekDays3.map((day) =>(
                <DayCl date={day}/>
            ))}
        </tr>
        <tr>
            {weekDays4.map((day) =>(
                <DayCl date={day}/>
            ))}
        </tr>
        <tr>
            {weekDays5.map((day) =>(
                <DayCl date={day}/>
            ))}
        </tr>
        <tr>
            {weekDays6.map((day) =>(
                <DayCl date={day}/>
            ))}
        </tr>
        </tbody>
        </table>
        </div>
    </>
  );
}

export default App;
