package mn.jwt.data.mappers;

import mn.jwt.data.domain.Consumptions;
import mn.jwt.data.dtos.ConsumptionDto;

import javax.inject.Singleton;

@Singleton
public class ConsumptionMapper {
    public Consumptions toEntity(ConsumptionDto consumptionDto){
        Consumptions consumption = Consumptions.builder()
                .id(consumptionDto.getId())
                .build();
        return consumption;
    }

    public ConsumptionDto toDto(Consumptions consumption){
        return ConsumptionDto.builder()
                .id(consumption.getId())
                .name(consumption.getPurchase().getName())
                .retailPrice(consumption.getPurchase().getRetailPrice())
                .amount(consumption.getAmount())
                .build();
    }
}
