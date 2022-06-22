import React from 'react';
import { OrderRes } from "../../models/OrderResponce";
import './akt.css'

export class Akt extends React.PureComponent {

    render() {     
        return (
                <div className='akt-box'>

                    <h2>Акт об оказании услуг №  от </h2>

                    <br/>

                    <div className="top-box">
                        <div>Исполнитель: </div>
                        <div><p>ИП Иванов И. И., ИНН 123456789012, Кироваская область, г. Киров, Чистопрудненская, дом 10, тел.: 89195033799</p></div>
                    </div>

                    <div className="top-box">
                        <div>Заказчик:</div>
                        <div><p></p></div>
                    </div>

                    <div><span>Основание:</span></div>

                    <div>
                        <table className="box-table">
                            <tr>
                                <th>№</th>
                                <th>Работы/услуги</th>
                                <th>Кол-во</th>
                                <th>Ед.</th>
                                <th>Цена</th>
                                <th>Сумма</th>
                            </tr>

                            <tr></tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Итого: </th>
                                <th>price</th>
                            <tr>

                            </tr>
                        </table>
                    </div>

                    <p>Всего наименований 3 на сумму 2400.00 руб.</p>

                    <p>Вышеперечисленные услуги выполены полностью и в срок. Заказчик претензий по объему, качеству и срокам оказания услуг не имеет.</p>

                    <br/>
                </div>
        );
    }
} 