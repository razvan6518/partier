package com.webCrawlers.partier.model.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String address;
    private String birthdate;
    private String profilePhoto;
    private String password;
//    @ManyToMany
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
//    private Collection<Role> roles = new ArrayList<>();
}
