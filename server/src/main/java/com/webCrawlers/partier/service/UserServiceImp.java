package com.webCrawlers.partier.service;

import com.webCrawlers.partier.model.user.AppUser;
import com.webCrawlers.partier.model.user.Role;
import com.webCrawlers.partier.repository.RoleRepo;
import com.webCrawlers.partier.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class UserServiceImp implements UserService, UserDetailsService {

    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepo.findByUsername(username);
        Collection<SimpleGrantedAuthority> roles = new ArrayList<>();
        user.getRoles().forEach(role -> roles.add(new SimpleGrantedAuthority(role)));
        return new User(user.getUsername(), user.getPassword(), roles);
    }

    @Override
    public AppUser saveUser(AppUser appUser) {
        appUser.setPassword(bCryptPasswordEncoder.encode(appUser.getPassword()));
        return userRepo.save(appUser);
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepo.save(role);
    }

    @Override
    public AppUser updateUser(AppUser user, long id) {
        AppUser appUser = userRepo.findById(id).get();
        appUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        appUser.setAddress(user.getAddress());
        appUser.setEmail(user.getEmail());
        return userRepo.save(appUser);
    }

    @Override
    public AppUser getUser(long id) {
        return userRepo.findById(id).get();
    }

    @Override
    public AppUser getUser(String username) {
        return userRepo.findByUsername(username);
    }

    @Override
    public List<AppUser> getUsers() {
        return userRepo.findAll();
    }

}
