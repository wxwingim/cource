import { StringLiteralLike } from "typescript";

export class PrettyFormat{
    public static Deserialize(data: number): string
    {

        return PrettyFormat.ReviveDateTime(new Date(data));
    } 

    public static PrettyNumber(type: string, num: number): string{
        return "№ СЦ" + type.substring(0,2).toUpperCase() + "-" + num;
    }

    private static ReviveDateTime(date: Date): string 
    {
        let value: string = date.getDate().toString() + '.';

        if(date.getUTCMonth() < 10) 
            value += '0' + date.getUTCMonth().toString();
        else 
            value += date.getUTCMonth().toString();
        
        value += '.' + date.getFullYear().toString();
        
        return value;
    }
}