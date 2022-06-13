export default function ToRus(origString: string) : string {
    switch(origString){
        case 'monoblocks': {
            return 'моноблоков';
            break;
        }
        case 'tablets': {
            return 'планшетов';
            break;
        }
        case 'phones': {
            return 'телефонов';
            break;
        }
        case 'laptops': {
            return 'ноутбуков';
            break;
        }
        case 'computers': {
            return 'компьютеров';
            break;
        }
        case 'console': {
            return 'приставок';
            break;
        }
        case 'cameras': {
            return 'фотоаппаратов';
            break;
        }
        case 'watch': {
            return 'часов';
            break;
        }
        default: { 
            return '';
            break; 
        }
    }
}