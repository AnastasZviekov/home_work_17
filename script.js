const calendarData = {
    days: ["Monday", "Tuesday", "Friday"], hours: {
        start: 10, end: 17,
    }, todos: [ {
        day: `Monday`, hour: 10, title: `First todo`,
    }, {
        day: `Monday`, hour: 13, title: `Second todo`,
    }, {
        day: `Tuesday`, hour: 12, title: `Third todo`,
    }, {
        day: `Tuesday`, hour: 17, title: `Fourth todo`,
    }, {
        day: `Friday`, hour: 14, title: `Fifth todo`,
    }, ],
};


const createCaption = () => {
    const caption = document.createElement( `caption` );
    caption.innerHTML = "Calendar Data";
    return caption;
}


const createDays = (item) => {
    let days;
    days=item.days.map(day=>`<th>${day}</th>`);
    return days;
}
const createThead = (item) => {
    let THD = document.createElement( `thead` );
    THD.innerHTML = `<tr><th></th>${createDays(item)}</tr>`
    return THD;
}


    const createHours = (item) => {
        const hours = []
        let hour = item.hours;
        let hourStep;
        for (hourStep = hour.start; hourStep < hour.end; hourStep++) {
            console.log( hourStep );
            hours.push( hourStep )
        }
        return hours;

    }

    console.log( createHours( calendarData ) )


    const createTableBody = (item) => {
        const tBody = document.createElement( `tbody` );
        const getHours = createHours( calendarData );
        console.log( getHours )
        getHours.map( (hour) => {
            let tr = document.createElement( `tr` );
            let td = document.createElement( `td` )
            td.innerHTML = `${ hour }:00`;
            tr.append( td );
            tBody.append( tr )
            item.days.forEach( day => {
                let td = document.createElement( `td` );
                td.dataset.hour = hour;
                td.dataset.day = day;
                td.innerHTML = ``;
                tr.append( td );
                tBody.append( tr )
            } )
        } );
        return tBody
    }


    const createTable = (item) => {
        const table = document.createElement( `table` );
        table.classList = `render_table`;
        const caption = createCaption();
        table.append( caption );
        const THD = createThead(item);
        table.append( THD );
        const tBody = createTableBody( item );
    table.append( tBody )
    return table;
}


let tableFinal = createTable( calendarData );

const containerTable = () => {
    let container = document.querySelector( `.containerTable` );
    container.append(tableFinal);
    return container;
}
console.log(containerTable());


let createMeeting = () => {
    let todoMeet;
    let cellMeeting;

    let meeting = calendarData.todos.map( (todo) => {
        todoMeet = document.createElement( `div` );
        let todoTitle = document.createElement( `h3` );
        todoTitle.innerHTML = `${ todo.title }`;
        todoMeet.classList = `todo_meeting`;
        let todoBtn = document.createElement( `button` );
        todoBtn.classList = `button_delete`
        todoBtn.innerHTML = `Delete`;
        todoMeet.append( todoTitle )
        todoMeet.append( todoBtn );


        const secondFunc = () => {
            todoBtn.parentElement.style.backgroundColor = `lightgray`
        }
        const firstFunc = (event) => {
            event.target.style.backgroundColor = `red`;
        }
        todoMeet.addEventListener( `mouseenter`, firstFunc )

        todoMeet.addEventListener( `click`, secondFunc )
        /*todoBtn.addEventListener(`click`, (event)=>{console.log(event.target)});*/
        todoBtn.addEventListener( `click`, () => {
            todoBtn.parentElement.remove()
        } );

        cellMeeting = document.querySelector( `td[data-day="${ todo.day }"][data-hour="${ todo.hour }"]` )
        if ( cellMeeting ) {
            cellMeeting.append( todoMeet );
        }
        return todoMeet
    } );
    return cellMeeting
}
createMeeting()


/*
let blockDiv=document.querySelectorAll(`.todo_meeting`)

const secondFunc=(event)=>{
    event.target.style.backgroundColor=`lightgray`
}
const firstFunc=(event)=>{
    event.target.style.backgroundColor=`red`;

}

blockDiv.forEach(block=>block.addEventListener(`mouseenter`, firstFunc))

blockDiv.forEach(block=>block.addEventListener(`click`, secondFunc))

let todoBut=document.querySelectorAll(`.button_delete`);

todoBut.forEach(el=>el.addEventListener(`click`, (event)=>{event.target.parentElement.remove()}));
*/