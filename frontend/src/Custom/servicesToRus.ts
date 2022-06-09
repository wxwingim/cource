export default function ToRus(origString: string) : string {
    switch(origString){
        case 'monitors': {
            return 'мониторов';
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
        default: { 
            return '';
            break; 
        }
    }
}