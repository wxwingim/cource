package mn.jwt.data.mappers;

import mn.jwt.data.domain.User;
import mn.jwt.data.domain.Works;
import mn.jwt.data.dtos.UserDto;
import mn.jwt.data.dtos.WorksDto;

import javax.inject.Singleton;

@Singleton
public class WorksMapper {
    public Works toEntity(WorksDto worksDto) {
        Works work = Works.builder()
                .id(worksDto.getId())
                .service(worksDto.getService())
                .build();
        return work;
    }

    public WorksDto toDto(Works work){
        return WorksDto.builder()
                .id(work.getId())
                .service(work.getService())
                .build();
    }
}
