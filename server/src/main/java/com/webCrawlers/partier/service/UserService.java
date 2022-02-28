package com.webCrawlers.partier.service;

import com.webCrawlers.partier.model.user.AppUser;
import com.webCrawlers.partier.model.user.Role;

import java.util.List;

public interface UserService {
    AppUser saveUser(AppUser appUser);
    Role saveRole(Role role);
    AppUser updateUser(AppUser user, long id);
    AppUser getUser(long id);
    AppUser getUser(String username);
    List<AppUser> getUsers();
}