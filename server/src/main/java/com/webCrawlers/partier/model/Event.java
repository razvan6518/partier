package com.webCrawlers.partier.model;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Data
@Builder
@Getter
@Setter

public class Event {

    private int id;
    private String title;
    private String description;
    private String location;
    private String startDate;
    private String endDate;
    private String image;
    private String category;
    private Set<String> artists;

}
