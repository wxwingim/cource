package mn.jwt.data.mappers;

import mn.jwt.data.domain.OrderRequests;
import mn.jwt.data.domain.User;
import mn.jwt.data.dtos.OrderDto;
import mn.jwt.data.dtos.UserDto;

import javax.inject.Singleton;

@Singleton
public class OrderMapper {
    public OrderRequests toEntity(OrderDto orderDto){
        OrderRequests orderRequest = OrderRequests.builder()
                .id(orderDto.getId())
                .model(orderDto.getModel())
                .defect(orderDto.getDefect())
                .mechanicalDamage(orderDto.getMechanicalDamage())
                .equipment(orderDto.getEquipment())
                .dateRequest(orderDto.getDateRequest())
                .dateLimit(orderDto.getDateLimit())
                .quarantee(orderDto.getQuarantee())
                .deviceType(orderDto.getDeviceType())
                .statusRepair(orderDto.getStatusRepair())
                .addres(orderDto.getAddres())
//                .consumptions(orderDto.getConsumptions())
//                .works(orderDto.getWorks())
                .build();
        return orderRequest;
    }

    public OrderDto toDto(OrderRequests orderRequest){
        return OrderDto.builder()
                .id(orderRequest.getId())
                .model(orderRequest.getModel())
                .defect(orderRequest.getDefect())
                .mechanicalDamage(orderRequest.getMechanicalDamage())
                .equipment(orderRequest.getEquipment())
                .dateRequest(orderRequest.getDateRequest())
                .dateLimit(orderRequest.getDateLimit())
                .quarantee(orderRequest.isQuarantee())
                .deviceType(orderRequest.getDeviceType())
                .statusRepair(orderRequest.getStatusRepair())
                .addres(orderRequest.getAddres())
//                .consumptions(orderRequest.getConsumptions())
//                .works(orderRequest.getWorks())
                .build();
    }
}
