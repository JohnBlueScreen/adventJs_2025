const takeoff = '2025*12*25@00|00|00 NP'

let fromtime = '2025*12*24@23|59|30 NP'

// pasar formato elfico a fecha real para operar con ella

function elficToDate(elficDate) {
    const fechaLimpia = elficDate.replace(' NP', '');

    const [fechaPart , horaPart] = fechaLimpia.split('@')
    const [anho,mes,dia] = fechaPart.split('*').map(Number)
    const [hora, min, seg] =horaPart.split('|').map(Number)
    
    return new Date(anho, mes-1 , dia, hora, min, seg);

}

let fecha_salida = elficToDate(takeoff)

// Pasar fecha actual a formato elfico
const fecha = new Date()

function dateFormat (fecha){
   const y = fecha.getFullYear();
   const m = (fecha.getMonth()+1).toString().padStart(2,'0');
   const d = fecha.getDate().toString().padStart(2,'0');
   const h = fecha.getHours().toString().padStart(2,'0');
   const min = fecha.getMinutes().toString().padStart(2,'0');
   const s = fecha.getSeconds().toString().padStart(2,'0');

   return `${y}*${m}*${d}@${h}|${min}|${s} NP`
}


// Funcion final , calcula el tiempo que hace del despegue si ya ha ocurrido, lo que falta  etc...

const timeUntilTakeOff= (fromtime, takeoff) =>{ 
    const fechaFrom = elficToDate(fromtime)
    const fechaTakeoff = elficToDate(takeoff)

    const diferenciaMs = fechaTakeoff - fechaFrom

    if(diferenciaMs < 0) return 'El despegue ya ha ocurrido'

    const from = elficToDate(fromtime);
    const to = elficToDate(takeoff);
    const diff = to - from;

    const sec = Math.floor(diff / 1000);
    const min = Math.floor(sec / 60);
    const hr = Math.floor(min / 60);
    const day = Math.floor(hr / 24);
    
    const parts = [];
    if (day > 0) parts.push(`${day}d`);
    if (hr % 24 > 0) parts.push(`${hr % 24}h`);
    if (min % 60 > 0) parts.push(`${min % 60}m`);
    parts.push(`${sec % 60}s`);
    
    return parts.join(' ');
};


console.log(timeUntilTakeOff(fromtime, takeoff))
