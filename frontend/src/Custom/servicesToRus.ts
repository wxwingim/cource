export function ToRus(origString: string) : string {
    switch(origString){
        case 'monoblocks': {
            return 'моноблоков';
        }
        case 'tablets': {
            return 'планшетов';
        }
        case 'phones': {
            return 'телефонов';
        }
        case 'laptops': {
            return 'ноутбуков';
        }
        case 'computers': {
            return 'компьютеров';
        }
        case 'console': {
            return 'приставок';
        }
        case 'cameras': {
            return 'фотоаппаратов';
        }
        case 'watch': {
            return 'часов';
        }
        default: { 
            return '';
        }
    }
}

export function PillColor(id: number) :string {
    switch(id){
        case 1: {
            return 'success';
        }
        case 2: {
            return 'warning';
        }
        case 3: {
            return 'primary';
        }
        case 4: {
            return 'warning';
        }
        case 5: {
            return 'danger';
        }
        case 6: {
            return 'danger';
        }
        case 7: {
            return 'secondary';
        }
        case 8: {
            return 'success';
        }
        case 9: {
            return 'success';
        }
        case 10: {
            return 'light';
        }
        case 11: {
            return 'dark';
        }
        case 12: {
            return 'info';
        }
        default: { 
            return 'light';
        }
    }
}