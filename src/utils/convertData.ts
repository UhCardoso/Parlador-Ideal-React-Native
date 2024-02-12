export function convertDate(dataHora:string) {
    //split de full date
    const part = dataHora.split(' ');
    const data = part[0];

    const dataFormated = data.split('-').reverse().join('/');

    return dataFormated;
}

export function convertHour(dataHora:string) {
    //split de full date to only hour format
    const part = dataHora.split(' ');
    const horaFormated = part[1];

    return horaFormated;
}