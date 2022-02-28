package com.webCrawlers.partier.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    @Column(
            length = 2000
    )
    private String description;
    private String location;
    private String startDate;
    private String endDate;
    private String image;
    private String category;
    private boolean approved;

//    private Set<String> artists;

}
