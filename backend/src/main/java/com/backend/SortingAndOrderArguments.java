package com.backend;

import io.micronaut.core.annotation.Introspected;
import io.micronaut.core.annotation.Nullable;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import java.util.Optional;

@Introspected
public class SortingAndOrderArguments {


    @PositiveOrZero
    private Integer offset;


    @Positive
    private Integer max;


    @Pattern(regexp = "id|name")
    private String sort;


    @Pattern(regexp = "asc|ASC|desc|DESC")
    private String order;

    public Optional<Integer> getOffset() {
        return Optional.ofNullable(offset);
    }

    public void setOffset(Integer offset) {
        this.offset = offset;
    }

    public Optional<Integer> getMax() {
        return Optional.ofNullable(max);
    }

    public void setMax(Integer max) {
        this.max = max;
    }

    public Optional<String> getSort() {
        return Optional.ofNullable(sort);
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public Optional<String> getOrder() {
        return Optional.ofNullable(order);
    }

    public void setOrder(String order) {
        this.order = order;
    }
}
